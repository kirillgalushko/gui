import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import HourPicker from './HourPicker.vue';
import type { HourPickerChangePayload } from './types';

const meta = {
  title: 'Components/HourPicker',
  component: HourPicker,
  tags: ['autodocs'],
  argTypes: {
    stretched: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof HourPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { HourPicker },
    setup() {
      const value = ref('14:00');
      const onChange = ({ value: nextValue }: HourPickerChangePayload) => {
        value.value = nextValue;
      };

      return { args, onChange, value };
    },
    template: '<HourPicker v-bind="args" :value="value" :on-change="onChange" />',
  }),
};
