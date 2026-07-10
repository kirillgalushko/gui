import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import Calendar from './Calendar.vue';
import type { CalendarRangePayload } from './types';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range'],
    },
    showOutsideDays: {
      control: 'boolean',
    },
    fixedWeeks: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
  },
  args: {
    mode: 'single',
    showOutsideDays: true,
    fixedWeeks: false,
    readonly: false,
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(new Date());

      return { args, selectedDate };
    },
    template: '<Calendar v-bind="args" v-model="selectedDate" />',
  }),
};

export const Range: Story = {
  args: {
    mode: 'range',
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const rangeValue = ref<CalendarRangePayload>({
        start: new Date(),
        end: null,
      });

      return { args, rangeValue };
    },
    template: '<Calendar v-bind="args" v-model:range-value="rangeValue" />',
  }),
};

export const Restricted: Story = {
  args: {
    minDate: new Date(),
    fixedWeeks: true,
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const selectedDate = ref<Date | null>(null);
      const disabledDates = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

      return { args, selectedDate, disabledDates };
    },
    template: '<Calendar v-bind="args" v-model="selectedDate" :disabled-dates="disabledDates" />',
  }),
};
