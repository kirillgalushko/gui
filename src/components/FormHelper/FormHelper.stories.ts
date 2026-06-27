import { Meta, StoryObj } from '@storybook/vue3';
import FormHelper from './FormHelper.vue';

const meta: Meta<typeof FormHelper> = {
  title: 'Components/FormHelper',
  component: FormHelper,
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormHelper>;

export const Default: Story = {
  args: {
    description: 'Подсказка для поля',
  },
  render: (args) => ({
    components: { FormHelper },
    setup() {
      return { args };
    },
    template: '<FormHelper v-bind="args" />',
  }),
};

export const Invalid: Story = {
  args: {
    description: 'Подсказка для поля',
    errorMessage: 'Поле заполнено неверно',
    invalid: true,
  },
  render: (args) => ({
    components: { FormHelper },
    setup() {
      return { args };
    },
    template: '<FormHelper v-bind="args" />',
  }),
};
