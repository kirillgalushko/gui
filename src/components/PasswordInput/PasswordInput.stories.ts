import { Meta, StoryObj } from '@storybook/vue3';
import PasswordInput from './PasswordInput.vue';

type PasswordInputType = typeof PasswordInput | HTMLInputElement

const meta: Meta<PasswordInputType> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    invalid: {
      type: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<PasswordInputType>;

export const Default: Story = {
  args: {
    placeholder: 'Пароль',
    value: 'password',
  },
  render: (args) => ({
    components: { PasswordInput },
    setup() {
      return { args };
    },
    template: '<PasswordInput v-bind="args" v-model="args.value" />',
  }),
};

export const Invalid: Story = {
  args: {
    placeholder: 'Пароль',
    value: '123',
    description: 'Минимум 8 символов',
    errorMessage: 'Пароль слишком короткий',
    invalid: true,
  },
  render: (args) => ({
    components: { PasswordInput },
    setup() {
      return { args };
    },
    template: '<PasswordInput v-bind="args" v-model="args.value" />',
  }),
};
