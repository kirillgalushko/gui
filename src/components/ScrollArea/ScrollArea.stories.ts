import type { Meta, StoryObj } from "@storybook/vue3";
import ScrollArea from "./ScrollArea.vue";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  args: {
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
