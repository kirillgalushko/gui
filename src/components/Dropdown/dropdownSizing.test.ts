import { describe, expect, it } from "vitest";
import { resolveDropdownContentStyles } from "./dropdownSizing";

describe("dropdownSizing", () => {
  it("использует ширину по содержимому для auto", () => {
    expect(resolveDropdownContentStyles("auto", "320px")).toEqual({
      width: "fit-content",
      maxWidth: "320px",
    });
  });

  it("растягивает content внутри фиксированного пресета", () => {
    expect(resolveDropdownContentStyles("medium", "100%")).toEqual({
      width: "100%",
      maxWidth: "100%",
    });
  });
});
