import { describe, expect, it } from "vitest";
import {
  getNumberFlowTimings,
  getNumberFlowTrend,
  NUMBER_FLOW_DEFAULT_EASING,
} from "./useNumberFlow";

describe("getNumberFlowTrend", () => {
  it("follows the value delta in auto mode", () => {
    const trend = getNumberFlowTrend("auto");

    expect(typeof trend).toBe("function");
    expect(typeof trend === "function" && trend(4, 9)).toBe(1);
    expect(typeof trend === "function" && trend(9, 4)).toBe(-1);
    expect(typeof trend === "function" && trend(4, 4)).toBe(0);
  });

  it.each([
    ["up", 1],
    ["down", -1],
    ["individual", 0],
  ] as const)("maps %s direction to %s", (direction, expected) => {
    expect(getNumberFlowTrend(direction)).toBe(expected);
  });
});

describe("getNumberFlowTimings", () => {
  it("builds coordinated default timings", () => {
    expect(getNumberFlowTimings(700, NUMBER_FLOW_DEFAULT_EASING)).toEqual({
      transform: { duration: 700, easing: NUMBER_FLOW_DEFAULT_EASING },
      spin: { duration: 700, easing: NUMBER_FLOW_DEFAULT_EASING },
      opacity: { duration: 350, easing: "ease-out" },
    });
  });

  it("accepts independent timing overrides", () => {
    const transform = { duration: 500, easing: "linear" };
    const spin = { duration: 800, easing: "ease-in-out" };

    expect(
      getNumberFlowTimings(700, NUMBER_FLOW_DEFAULT_EASING, {
        transform,
        spin,
      }),
    ).toEqual({
      transform,
      spin,
      opacity: { duration: 350, easing: "ease-out" },
    });
  });
});
