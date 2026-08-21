import type { Meta, StoryObj } from "@storybook/vue3";

import Kbd from "./Kbd.vue";
import KbdGroup from "./KbdGroup.vue";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["!autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["default", "contrast", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "default",
    size: "small",
  },
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: '<Kbd v-bind="args">Ctrl</Kbd>',
  }),
};

export const Modes: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd mode="default">Ctrl</Kbd>
        <Kbd mode="contrast">Ctrl</Kbd>
        <Kbd mode="secondary">Ctrl</Kbd>
        <Kbd mode="outline">Ctrl</Kbd>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
        <Kbd size="extra-small">Ctrl</Kbd>
        <Kbd size="small">Ctrl</Kbd>
        <Kbd size="medium">Ctrl</Kbd>
        <Kbd size="large">Ctrl</Kbd>
      </div>
    `,
  }),
};

export const Group: Story = {
  render: () => ({
    components: { Kbd, KbdGroup },
    template: `
      <KbdGroup aria-label="Сочетание Ctrl и B">
        <Kbd>Ctrl</Kbd>
        <span aria-hidden="true">+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    `,
  }),
};

export const ModifierKeys: Story = {
  render: () => ({
    components: { Kbd, KbdGroup },
    template: `
      <KbdGroup aria-label="Модификаторы клавиатуры">
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
    `,
  }),
};
