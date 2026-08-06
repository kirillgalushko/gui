import { Meta, StoryObj } from "@storybook/vue3";
import { IconCreditCardOutline } from "@gui/icons";
import IconContainer from "./IconContainer.vue";

const meta: Meta<typeof IconContainer> = {
  title: "Components/IconContainer",
  component: IconContainer,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "text" } },
    mode: {
      control: { type: "select" },
      options: ["square", "circle", "plain"],
    },
    color: {
      control: { type: "select" },
      options: [undefined, "red", "orange", "green", "blue", "violet", "gray"],
    },
  },
  args: {
    size: "80px",
    mode: "square",
  },
};

export default meta;
type Story = StoryObj<typeof IconContainer>;

export const Default: Story = {
  render: (args) => ({
    components: { IconContainer, IconCreditCardOutline },
    setup() {
      return { args };
    },
    template: `
      <IconContainer v-bind="args">
        <IconCreditCardOutline />
      </IconContainer>`,
  }),
};

export const Colored: Story = {
  args: { color: "blue", mode: "circle" },
  render: Default.render,
};

export const Plain: Story = {
  args: { color: "blue", mode: "plain", size: "32px" },
  render: Default.render,
};
