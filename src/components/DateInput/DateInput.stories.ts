import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import DateInput from "./DateInput.vue";
import type { DateInputChangePayload } from "./types";

const meta = {
  title: "Components/DateInput",
  component: DateInput,
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { DateInput },
    setup() {
      const value = ref<Date | null>(new Date());
      const onChange = ({ value: nextValue }: DateInputChangePayload) => {
        value.value = nextValue;
      };

      return { onChange, value };
    },
    template: '<DateInput :value="value" :on-change="onChange" />',
  }),
};

export const Restricted: Story = {
  render: () => ({
    components: { DateInput },
    setup() {
      const value = ref<Date | null>(null);
      const minDate = new Date(2026, 6, 1);
      const maxDate = new Date(2026, 6, 31);
      const onChange = ({ value: nextValue }: DateInputChangePayload) => {
        value.value = nextValue;
      };

      return { maxDate, minDate, onChange, value };
    },
    template:
      '<DateInput :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />',
  }),
};

export const Invalid: Story = {
  render: () => ({
    components: { DateInput },
    setup() {
      const value = ref<Date | null>(null);
      const onChange = ({ value: nextValue }: DateInputChangePayload) => {
        value.value = nextValue;
      };

      return { onChange, value };
    },
    template:
      '<DateInput :value="value" :on-change="onChange" invalid error-message="Введите корректную дату" />',
  }),
};
