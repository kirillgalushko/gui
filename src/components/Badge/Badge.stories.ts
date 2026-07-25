import { Meta, StoryObj } from "@storybook/vue3";
import Badge from "./Badge.vue";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["!autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: [
        "default",
        "accent",
        "secondary",
        "ghost",
        "negative",
        "positive",
        "danger",
        "warning",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: [
        undefined,
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
        "mauve",
        "olive",
        "mist",
        "taupe",
      ],
    },
  },
  args: {
    mode: "default",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">99+</Badge>`,
  }),
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">99+</Badge>`,
  }),
};

export const Accent: Story = {
  args: {
    mode: "accent",
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Новое</Badge>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 8px;">
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    `,
  }),
};
