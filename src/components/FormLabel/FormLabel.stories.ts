import { Meta, StoryObj } from '@storybook/vue3';
import FormLabel from './FormLabel.vue';

const meta: Meta<typeof FormLabel> = {
  title: 'Components/FormLabel',
  component: FormLabel,
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
type Story = StoryObj<typeof FormLabel>;

export const Default: Story = {
  args: {
    htmlFor: 'form-label-input',
  },
  render: (args) => ({
    components: { FormLabel },
    setup() {
      return { args };
    },
    template: '<FormLabel v-bind="args">Название поля</FormLabel>',
  }),
};
