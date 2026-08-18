import { describe, expect, it } from "vitest";
import { getScrollFadeEdges } from "./useScrollFade";

const createScrollElement = ({
  clientHeight = 100,
  clientWidth = 100,
  scrollHeight = 100,
  scrollLeft = 0,
  scrollTop = 0,
  scrollWidth = 100,
} = {}) => {
  const element = document.createElement("div");
  Object.defineProperties(element, {
    clientHeight: { value: clientHeight },
    clientWidth: { value: clientWidth },
    scrollHeight: { value: scrollHeight },
    scrollLeft: { configurable: true, value: scrollLeft },
    scrollTop: { configurable: true, value: scrollTop },
    scrollWidth: { value: scrollWidth },
  });
  return element;
};

describe("getScrollFadeEdges", () => {
  it("does not fade when content does not overflow", () => {
    expect(getScrollFadeEdges(createScrollElement())).toEqual({
      top: false,
      bottom: false,
      start: false,
      end: false,
    });
  });

  it("only fades toward available vertical scroll directions", () => {
    const element = createScrollElement({ scrollHeight: 300, scrollTop: 100 });

    expect(getScrollFadeEdges(element)).toMatchObject({
      top: true,
      bottom: true,
    });

    Object.defineProperty(element, "scrollTop", { value: 200 });
    expect(getScrollFadeEdges(element)).toMatchObject({
      top: true,
      bottom: false,
    });
  });

  it("supports horizontal scrolling and RTL", () => {
    const ltr = createScrollElement({ scrollWidth: 300, scrollLeft: 100 });
    const rtlAtStart = createScrollElement({ scrollWidth: 300, scrollLeft: 0 });

    expect(getScrollFadeEdges(ltr)).toMatchObject({ start: true, end: true });
    expect(getScrollFadeEdges(rtlAtStart, "rtl")).toMatchObject({
      start: false,
      end: true,
    });
  });
});
