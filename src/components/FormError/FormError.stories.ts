import { Meta, StoryObj } from '@storybook/vue3';
import FormError from './FormError.vue';

const meta: Meta<typeof FormError> = {
  title: 'Components/FormError',
  component: FormError,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormError>;

export const Default: Story = {
  args: {
    message: 'Не удалось отправить форму',
  },
  render: (args) => ({
    components: { FormError },
    setup() {
      return { args };
    },
    template: '<FormError v-bind="args" />',
  }),
};

export const Centered: Story = {
  args: {
    message: 'Неверная почта или пароль',
    textAlign: 'center',
  },
  render: (args) => ({
    components: { FormError },
    setup() {
      return { args };
    },
    template: '<FormError v-bind="args" />',
  }),
};
