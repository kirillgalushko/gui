import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import DatePicker from "./DatePicker.vue";
import type { DatePickerChangePayload } from "./types";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    stretched: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const value = ref<Date | null>(new Date());
      const onChange = ({ value: nextValue }: DatePickerChangePayload) => {
        value.value = nextValue;
      };

      return { args, onChange, value };
    },
    template:
      '<DatePicker v-bind="args" :value="value" :on-change="onChange" />',
  }),
};

export const Empty: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const value = ref<Date | null>(null);
      const onChange = ({ value: nextValue }: DatePickerChangePayload) => {
        value.value = nextValue;
      };

      return { args, onChange, value };
    },
    template:
      '<DatePicker v-bind="args" :value="value" :on-change="onChange" />',
  }),
};
