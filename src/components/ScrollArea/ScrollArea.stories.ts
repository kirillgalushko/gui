import type { Meta, StoryObj } from "@storybook/vue3";
import ScrollArea from "./ScrollArea.vue";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  args: {
    fade: true,
    maxHeight: 240,
    orientation: "vertical",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "both"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      const events = Array.from(
        { length: 16 },
        (_, index) => `Событие ${index + 1}`,
      );
      return { args, events };
    },
    template: `
      <ScrollArea v-bind="args" aria-label="История действий">
        <p v-for="event in events" :key="event">{{ event }}</p>
      </ScrollArea>
    `,
  }),
};

export const HorizontalFade: Story = {
  args: {
    maxHeight: undefined,
    orientation: "horizontal",
  },
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      const items = Array.from(
        { length: 12 },
        (_, index) => `Элемент ${index + 1}`,
      );
      return { args, items };
    },
    template: `
      <ScrollArea v-bind="args" aria-label="Горизонтальный список">
        <div style="display: flex; gap: 16px; width: max-content">
          <span v-for="item in items" :key="item">{{ item }}</span>
        </div>
      </ScrollArea>
    `,
  }),
};

export const NoOverflowNoFade: Story = {
  args: {
    maxHeight: 240,
  },
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      return { args };
    },
    template: `
      <ScrollArea v-bind="args" aria-label="Короткий список">
        <p>Первый элемент</p>
        <p>Второй элемент</p>
      </ScrollArea>
    `,
  }),
};
