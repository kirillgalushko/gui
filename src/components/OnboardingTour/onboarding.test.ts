import { afterEach, describe, expect, it, vi } from "vitest";
import {
  clampTourStep,
  expandAndClampRect,
  getOverlayRects,
  resolveOnboardingTarget,
  scrollOnboardingTargetIntoView,
  shouldBlockOnboardingTargetScroll,
} from "./onboarding";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("onboarding utilities", () => {
  it("clamps step indices", () => {
    expect(clampTourStep(-4, 3)).toBe(0);
    expect(clampTourStep(1.9, 3)).toBe(1);
    expect(clampTourStep(20, 3)).toBe(2);
    expect(clampTourStep(4, 0)).toBe(0);
  });

  it("resolves selectors, elements and lazy targets safely", () => {
    const button = document.createElement("button");
    button.id = "tour-target";
    document.body.append(button);

    expect(resolveOnboardingTarget("#tour-target")).toBe(button);
    expect(resolveOnboardingTarget(button)).toBe(button);
    expect(resolveOnboardingTarget(() => button)).toBe(button);
    expect(resolveOnboardingTarget("[invalid-selector")).toBeNull();
  });

  it("scrolls a target that layout changes moved outside the viewport", () => {
    const target = document.createElement("section");
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;
    target.getBoundingClientRect = () =>
      ({
        top: window.innerHeight + 40,
        right: 300,
        bottom: window.innerHeight + 120,
        left: 100,
        width: 200,
        height: 80,
      }) as DOMRect;
    document.body.append(target);

    expect(scrollOnboardingTargetIntoView(target, "auto")).toBe(true);
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  });

  it("blocks manual scroll only when the event originated inside the target", () => {
    const target = document.createElement("section");
    const child = document.createElement("button");
    target.append(child);
    const targetEvent = {
      composedPath: () => [child, target, document.body],
    } as unknown as Event;
    const outsideEvent = {
      composedPath: () => [document.body],
    } as unknown as Event;

    expect(shouldBlockOnboardingTargetScroll(targetEvent, target, true)).toBe(
      true,
    );
    expect(shouldBlockOnboardingTargetScroll(outsideEvent, target, true)).toBe(
      false,
    );
    expect(shouldBlockOnboardingTargetScroll(targetEvent, target, false)).toBe(
      false,
    );
    expect(shouldBlockOnboardingTargetScroll(targetEvent, null, true)).toBe(
      false,
    );
  });

  it("expands a spotlight without leaving the viewport", () => {
    expect(
      expandAndClampRect(
        {
          top: 2,
          right: 98,
          bottom: 48,
          left: 4,
          width: 94,
          height: 46,
        },
        8,
        100,
        50,
      ),
    ).toEqual({
      top: 0,
      right: 100,
      bottom: 50,
      left: 0,
      width: 100,
      height: 50,
    });
  });

  it("builds four non-overlapping blockers around the spotlight", () => {
    const overlays = getOverlayRects(
      {
        top: 20,
        right: 80,
        bottom: 60,
        left: 20,
        width: 60,
        height: 40,
      },
      100,
      100,
    );

    expect(overlays).toHaveLength(4);
    expect(
      overlays.reduce((area, rect) => area + rect.width * rect.height, 0),
    ).toBe(7600);
  });
});
