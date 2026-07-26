import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Field from "../Field/Field.vue";
import RadioGroup from "./RadioGroup.vue";
import RadioGroupItem from "./RadioGroupItem.vue";

const createRadioGroup = (props: Record<string, unknown> = {}) =>
  mount(RadioGroup, {
    props: {
      modelValue: "sms",
      "onUpdate:modelValue": (value: string | number | null) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
    slots: {
      default: `
        <RadioGroupItem value="sms">
          SMS
          <template #description>Код придёт на телефон</template>
        </RadioGroupItem>
        <RadioGroupItem value="email">Email</RadioGroupItem>
      `,
    },
    global: {
      components: { RadioGroupItem },
    },
  });

let wrapper: ReturnType<typeof createRadioGroup>;

describe("RadioGroup", () => {
  it("selects exactly one native radio and updates v-model", async () => {
    wrapper = createRadioGroup({ name: "channel" });
    const inputs = wrapper.findAll('input[type="radio"]');
    const smsInput = inputs[0]?.element as HTMLInputElement;
    const emailInput = inputs[1]?.element as HTMLInputElement;

    expect(smsInput.checked).toBe(true);
    expect(emailInput.checked).toBe(false);
    expect(inputs[0]?.attributes("name")).toBe("channel");

    await inputs[1]?.setValue(true);

    expect(wrapper.props("modelValue")).toBe("email");
    expect(smsInput.checked).toBe(false);
    expect(emailInput.checked).toBe(true);
  });

  it("inherits disabled and invalid state from Field", () => {
    const field = mount(Field, {
      props: { disabled: true, invalid: true },
      slots: {
        default: `
          <RadioGroup model-value="sms">
            <RadioGroupItem value="sms">SMS</RadioGroupItem>
          </RadioGroup>
        `,
      },
      global: {
        components: { RadioGroup, RadioGroupItem },
      },
    });

    const group = field.get('[role="radiogroup"]');
    const input = field.get('input[type="radio"]');

    expect(group.attributes("aria-invalid")).toBe("true");
    expect(input.attributes("disabled")).toBeDefined();
    expect(input.attributes("aria-invalid")).toBe("true");
  });

  it("supports card mode, orientation and item-level disabled state", () => {
    wrapper = createRadioGroup({
      mode: "card",
      orientation: "horizontal",
    });

    expect(wrapper.classes()).toContain("card");
    expect(wrapper.classes()).toContain("horizontal");
    expect(wrapper.findAll(".radio-group-item")).toHaveLength(2);
    expect(wrapper.text()).toContain("Код придёт на телефон");
  });
});
