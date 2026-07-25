import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Switch from "./Switch.vue";

describe("Switch", () => {
  it("updates the model and exposes switch semantics", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        "onUpdate:modelValue": (value: boolean) =>
          wrapper.setProps({ modelValue: value }),
        "aria-label": "Синхронизация броней",
      },
    });

    const input = wrapper.get('input[role="switch"]');
    await input.setValue(true);

    expect(wrapper.props("modelValue")).toBe(true);
    expect(input.attributes("aria-label")).toBe("Синхронизация броней");
  });

  it("cannot be changed when disabled", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
        disabled: true,
      },
    });

    await wrapper.get("input").setValue(false);

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
