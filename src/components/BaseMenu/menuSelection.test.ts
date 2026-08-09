import { describe, expect, it } from "vitest";
import { selectMenuRadioValue, toggleMenuCheckboxValue } from "./menuSelection";

describe("menuSelection", () => {
  it("переключает checkbox и сохраняет disabled-значение", () => {
    expect(toggleMenuCheckboxValue(false)).toBe(true);
    expect(toggleMenuCheckboxValue(true)).toBe(false);
    expect(toggleMenuCheckboxValue(true, true)).toBe(true);
  });

  it("выбирает radio value и сохраняет disabled-значение", () => {
    expect(selectMenuRadioValue("top", "bottom")).toBe("bottom");
    expect(selectMenuRadioValue("top", "bottom", true)).toBe("top");
  });
});
