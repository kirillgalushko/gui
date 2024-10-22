import { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';

type InputType = typeof Input | HTMLInputElement

const meta: Meta<InputType> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    stretched: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InputType>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
    value: 'value',
    stretched: false,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
  }),
};
