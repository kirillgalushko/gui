import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Collapsable from "./Collapsable.vue";

describe("Collapsable", () => {
  it("is opened by default and toggles content", async () => {
    const wrapper = mount(Collapsable, {
      props: { title: "Данные бронирования" },
      slots: { default: "Содержимое" },
    });
    const trigger = wrapper.get("button");

    expect(trigger.attributes("aria-expanded")).toBe("true");
    await trigger.trigger("click");

    expect(trigger.attributes("aria-expanded")).toBe("false");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
  });

  it("supports controlled state", async () => {
    const wrapper = mount(Collapsable, {
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
    const wrapper = mount(Collapsable, {
      props: {
        disabled: true,
        title: "Данные бронирования",
      },
    });

    await wrapper.get("button").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
