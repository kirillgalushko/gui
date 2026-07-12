import { Meta, StoryObj } from "@storybook/vue3";
import FieldHelper from "./FieldHelper.vue";

const meta: Meta<typeof FieldHelper> = {
  title: "Components/FieldHelper",
  component: FieldHelper,
  tags: ["autodocs"],
  argTypes: {
    invalid: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldHelper>;

export const Default: Story = {
  args: {
    description: "Подсказка для поля",
  },
  render: (args) => ({
    components: { FieldHelper },
    setup() {
      return { args };
    },
    template: '<FieldHelper v-bind="args" />',
  }),
};

export const Invalid: Story = {
  args: {
    description: "Подсказка для поля",
    errorMessage: "Поле заполнено неверно",
    invalid: true,
  },
  render: (args) => ({
    components: { FieldHelper },
    setup() {
      return { args };
    },
    template: '<FieldHelper v-bind="args" />',
  }),
};
