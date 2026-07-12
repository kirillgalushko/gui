import { Meta, StoryObj } from "@storybook/vue3";
import Dot from "./Dot.vue";

const colorOptions = [
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
] as const;

const meta: Meta<typeof Dot> = {
  title: "Components/Dot",
  component: Dot,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: colorOptions,
    },
  },
  args: {
    color: "blue",
  },
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default: Story = {
  render: (args) => ({
    components: { Dot },
    setup() {
      return { args };
    },
    template: '<Dot v-bind="args" />',
  }),
};
