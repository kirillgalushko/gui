import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ScrollArea from "./ScrollArea.vue";

describe("ScrollArea", () => {
  it("limits numeric max height and enables vertical scrolling", () => {
    const wrapper = mount(ScrollArea, {
      props: { maxHeight: 320 },
      attrs: { "aria-label": "История действий" },
      slots: { default: "Содержимое" },
    });

    expect(wrapper.classes()).toContain("vertical");
    expect(wrapper.attributes("style")).toContain("max-height: 320px");
    expect(wrapper.attributes("aria-label")).toBe("История действий");
    expect(wrapper.attributes("tabindex")).toBe("0");
  });

  it("supports CSS max-height values and two-axis scrolling", () => {
    const warning = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    const wrapper = mount(ScrollArea, {
      props: { maxHeight: "50vh", orientation: "both" },
    });

    expect(wrapper.classes()).toContain("both");
    expect(wrapper.attributes("style")).toContain("max-height: 50vh");
    expect(warning).not.toHaveBeenCalled();
    warning.mockRestore();
  });
});
