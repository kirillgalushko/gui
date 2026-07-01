import { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';

type CheckboxType = typeof Checkbox | HTMLInputElement

const meta: Meta<CheckboxType> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    invalid: {
      type: 'boolean',
    },
    indeterminate: {
      type: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxType>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Accept terms and conditions</Checkbox>',
  }),
};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Remember this choice</Checkbox>',
  }),
};

export const WithDescription: Story = {
  args: {
    modelValue: true,
    description: 'You can change this setting later.',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Enable notifications</Checkbox>',
  }),
};

export const Indeterminate: Story = {
  args: {
    modelValue: false,
    indeterminate: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Some items selected</Checkbox>',
  }),
};

export const Invalid: Story = {
  args: {
    modelValue: false,
    invalid: true,
    errorMessage: 'Required field',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">I agree with the policy</Checkbox>',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: true,
    disabled: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: '<Checkbox v-bind="args" v-model="args.modelValue">Unavailable option</Checkbox>',
  }),
};
