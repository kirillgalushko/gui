import { describe, expect, it } from "vitest";
import { resolveMenuWidth } from "./menuSizing";

describe("menuSizing", () => {
  it("преобразует auto в ширину по содержимому", () => {
    expect(resolveMenuWidth("auto")).toBe("fit-content");
  });

  it("сохраняет пользовательское CSS-значение", () => {
    expect(resolveMenuWidth("24rem")).toBe("24rem");
  });
});
