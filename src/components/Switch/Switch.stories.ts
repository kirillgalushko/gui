import type { Meta, StoryObj } from "@storybook/vue3";
import Switch from "./Switch.vue";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    modelValue: false,
    disabled: false,
    size: "medium",
    "aria-label": "Переключить настройку",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      return { args };
    },
    template: '<Switch v-bind="args" v-model="args.modelValue" />',
  }),
};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: true,
    disabled: true,
  },
};
