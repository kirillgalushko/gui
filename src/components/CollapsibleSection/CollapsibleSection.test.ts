import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Collapse from "../Collapse/Collapse.vue";
import CollapsibleSection from "./CollapsibleSection.vue";

describe("CollapsibleSection", () => {
  it("is opened by default and toggles content through Collapse", async () => {
    const wrapper = mount(CollapsibleSection, {
      props: { title: "Данные бронирования" },
      slots: { default: "Содержимое" },
    });
    const trigger = wrapper.get("button");

    expect(wrapper.findComponent(Collapse).exists()).toBe(true);
    expect(trigger.attributes("aria-expanded")).toBe("true");
    await trigger.trigger("click");

    expect(trigger.attributes("aria-expanded")).toBe("false");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
  });

  it("supports controlled state", async () => {
    const wrapper = mount(CollapsibleSection, {
      props: {
        modelValue: false,
        title: "Данные бронирования",
      },
    });

    await wrapper.get("button").trigger("click");

    expect(wrapper.get("button").attributes("aria-expanded")).toBe("false");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("does not toggle when disabled", async () => {
    const wrapper = mount(CollapsibleSection, {
      props: {
        disabled: true,
        title: "Данные бронирования",
      },
    });

    await wrapper.get("button").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
