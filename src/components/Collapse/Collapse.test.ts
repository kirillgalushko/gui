import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Collapse from "./Collapse.vue";

describe("Collapse", () => {
  it("keeps content mounted and exposes the closed state", () => {
    const wrapper = mount(Collapse, {
      props: { opened: false },
      slots: { default: "Сравнение тарифов" },
    });

    expect(wrapper.text()).toContain("Сравнение тарифов");
    expect(wrapper.attributes("data-state")).toBe("closed");
    expect(wrapper.attributes("aria-hidden")).toBe("true");
    expect(wrapper.attributes()).toHaveProperty("inert");
  });

  it("reacts to externally controlled state", async () => {
    const wrapper = mount(Collapse, {
      props: { opened: false },
    });

    await wrapper.setProps({ opened: true });

    expect(wrapper.attributes("data-state")).toBe("open");
    expect(wrapper.attributes("aria-hidden")).toBe("false");
    expect(wrapper.attributes()).not.toHaveProperty("inert");
  });

  it("supports a configurable transition duration", () => {
    const wrapper = mount(Collapse, {
      props: { opened: true, duration: 320 },
    });

    expect(wrapper.attributes("style")).toContain("--collapse-duration: 320ms");
  });
});
