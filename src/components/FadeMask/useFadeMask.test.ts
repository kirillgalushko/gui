import { describe, expect, it } from "vitest";
import { getFadeMaskGradient } from "./useFadeMask";

describe("getFadeMaskGradient", () => {
  it("creates a smooth fade in the selected direction", () => {
    const gradient = getFadeMaskGradient({
      direction: "bottom",
      easing: "smooth",
      start: 40,
      end: 90,
    });

    expect(gradient).toContain("linear-gradient(to bottom");
    expect(gradient).toContain("rgb(0 0 0 / 1) 40%");
    expect(gradient).toContain("rgb(0 0 0 / 0.5) 65%");
    expect(gradient).toContain("rgb(0 0 0 / 0) 90%");
  });

  it("creates a linear fade and normalizes reversed percentages", () => {
    expect(
      getFadeMaskGradient({
        direction: "left",
        easing: "linear",
        start: 80,
        end: 20,
      }),
    ).toBe("linear-gradient(to left, black 20%, transparent 80%)");
  });

  it("clamps percentages to the available range", () => {
    expect(
      getFadeMaskGradient({
        direction: "right",
        easing: "linear",
        start: -10,
        end: 120,
      }),
    ).toBe("linear-gradient(to right, black 0%, transparent 100%)");
  });
});
