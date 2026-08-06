import type { Meta, StoryObj } from "@storybook/vue3";
import { IconUserOutline } from "@gui/icons";
import avatarExample from "../../assets/images/avatar-example.png";
import Avatar from "./Avatar.vue";
import AvatarGroup from "./AvatarGroup.vue";
import AvatarGroupCount from "./AvatarGroupCount.vue";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  args: {
    overlap: undefined,
    shape: "circle",
    size: "48px",
    surface: undefined,
  },
  argTypes: {
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Avatar,
      AvatarGroup,
      AvatarGroupCount,
      IconUserOutline,
    },
    setup: () => ({ args, avatarExample }),
    template: `
      <AvatarGroup v-bind="args" aria-label="Участники бронирования">
        <Avatar :src="avatarExample" name="Анна Петрова" />
        <Avatar name="Иван Смирнов" color="blue" />
        <Avatar mode="default"><IconUserOutline /></Avatar>
        <AvatarGroupCount :count="3" />
      </AvatarGroup>
    `,
  }),
};

export const Square: Story = {
  args: {
    shape: "square",
  },
  render: Default.render,
};

export const CustomAvatarSize: Story = {
  render: (args) => ({
    components: { Avatar, AvatarGroup, AvatarGroupCount },
    setup: () => ({ args }),
    template: `
      <AvatarGroup v-bind="args" aria-label="Команда">
        <Avatar name="Анна Петрова" color="violet" />
        <Avatar name="Иван Смирнов" color="blue" size="56px" />
        <AvatarGroupCount :count="5" />
      </AvatarGroup>
    `,
  }),
};
