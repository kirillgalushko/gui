import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import DateNavigator from './DateNavigator.vue';

const meta = {
  title: 'Components/DateNavigator',
  component: DateNavigator,
  tags: ['autodocs'],
} satisfies Meta<typeof DateNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { DateNavigator },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const onChange = (date: Date) => {
        value.value = date;
      };

      return { onChange, value };
    },
    template: '<DateNavigator :value="value" :on-change="onChange" />',
  }),
};

export const Restricted: Story = {
  render: () => ({
    components: { DateNavigator },
    setup() {
      const value = ref(new Date(2026, 6, 9));
      const minDate = new Date(2026, 6, 8);
      const maxDate = new Date(2026, 6, 10);
      const onChange = (date: Date) => {
        value.value = date;
      };

      return { maxDate, minDate, onChange, value };
    },
    template: '<DateNavigator :value="value" :on-change="onChange" :min-date="minDate" :max-date="maxDate" />',
  }),
};
