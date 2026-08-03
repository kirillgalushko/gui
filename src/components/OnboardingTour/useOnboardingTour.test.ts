import { describe, expect, it, vi } from "vitest";
import { useOnboardingTour } from "./useOnboardingTour";
import type { OnboardingTourStep } from "./types";

const steps: OnboardingTourStep[] = [
  { id: "first", target: "#first", title: "Первый" },
  { id: "second", target: "#second", title: "Второй" },
  { id: "third", target: "#third", title: "Третий" },
];

describe("useOnboardingTour", () => {
  it("starts from a clamped step and exposes progress", () => {
    const onStart = vi.fn();
    const tour = useOnboardingTour({ steps, onStart });

    expect(tour.start(20)).toBe(true);
    expect(tour.open.value).toBe(true);
    expect(tour.step.value).toBe(2);
    expect(tour.currentStep.value?.id).toBe("third");
    expect(tour.progress.value).toEqual({ current: 3, total: 3 });
    expect(onStart).toHaveBeenCalledWith({ step: steps[2], index: 2 });
  });

  it("navigates in both directions and finishes on the last step", () => {
    const onNext = vi.fn();
    const onPrevious = vi.fn();
    const onFinish = vi.fn();
    const onClose = vi.fn();
    const tour = useOnboardingTour({
      steps,
      onNext,
      onPrevious,
      onFinish,
      onClose,
    });

    tour.start();
    tour.next();
    expect(tour.step.value).toBe(1);
    tour.previous();
    expect(tour.step.value).toBe(0);
    tour.goTo(2);
    tour.next();

    expect(tour.open.value).toBe(false);
    expect(onNext).toHaveBeenCalledTimes(2);
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith({ step: steps[2], index: 2 });
    expect(onClose).toHaveBeenLastCalledWith("complete", {
      step: steps[2],
      index: 2,
    });
  });

  it("does not open an empty tour", () => {
    const tour = useOnboardingTour({ steps: [] });

    expect(tour.start()).toBe(false);
    expect(tour.open.value).toBe(false);
    expect(tour.progress.value).toEqual({ current: 0, total: 0 });
  });
});
