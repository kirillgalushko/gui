import { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./Avatar.vue";
import { IconCircleCheckOutline, IconUserOutline } from "@gui/icons";
import IconContainer from "../IconContainer/IconContainer.vue";
import avatarExample from "../../assets/images/avatar-example.png";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: { type: "select" },
      options: ["square", "circle"],
    },
    color: {
      control: { type: "select" },
      options: [undefined, "red", "orange", "green", "blue", "violet", "gray"],
    },
    mode: {
      control: { type: "select" },
      options: [
        "default",
        "accent",
        "secondary",
        "ghost",
        "outlined",
        "negative",
        "positive",
        "danger",
        "warning",
      ],
    },
    size: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
  },
  args: {
    size: "60px",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {},
  render: (args) => ({
    components: { Avatar, IconUserOutline },
    setup() {
      return { args, avatarExample };
    },
    template: `
    <Avatar :src="avatarExample" v-bind="args" />`,
  }),
};

export const WithIcon: Story = {
  args: {
    mode: "positive",
  },
  render: (args) => ({
    components: { Avatar, IconUserOutline },
    setup() {
      return { args, avatarExample };
    },
    template: `
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>`,
  }),
};

export const WithFallback: Story = {
  args: {
    name: "Аренда",
  },
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `
    <Avatar v-bind="args" />`,
  }),
};

export const WithCornerContent: Story = {
  args: {
    name: "Аренда",
  },
  render: (args) => ({
    components: { Avatar, IconCircleCheckOutline, IconContainer },
    setup() {
      return { args };
    },
    template: `
    <Avatar v-bind="args">
      <template #corner>
        <IconContainer mode="circle" size="18px">
          <IconCircleCheckOutline />
        </IconContainer>
      </template>
    </Avatar>`,
  }),
};
