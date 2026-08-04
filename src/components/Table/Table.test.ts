import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Table from "./Table.vue";

describe("Table", () => {
  it("supports CSS size values without runtime prop warnings", () => {
    const warning = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    const wrapper = mount(Table, {
      props: { minWidth: "760px", maxHeight: "65vh" },
      slots: { default: "<tbody><tr><td>Value</td></tr></tbody>" },
    });

    expect(wrapper.attributes("style")).toContain("max-height: 65vh");
    expect(wrapper.get("table").attributes("style")).toContain(
      "min-width: 760px",
    );
    expect(warning).not.toHaveBeenCalled();
    warning.mockRestore();
  });
});
