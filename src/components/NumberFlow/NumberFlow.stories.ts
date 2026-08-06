import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import NumberFlow from "./NumberFlow.vue";

const meta: Meta<typeof NumberFlow> = {
  title: "Components/NumberFlow",
  component: NumberFlow,
  tags: ["autodocs"],
  args: {
    value: 12450,
    typography: "title-8",
    locales: "ru-RU",
    direction: "auto",
    duration: 700,
    continuous: false,
    animateOnMount: true,
    initialValue: 0,
    startOnVisible: false,
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["auto", "up", "down", "individual"],
    },
    typography: {
      control: "select",
      options: ["inherit", "title-4", "title-6", "title-8", "title-9"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberFlow>;

export const Interactive: Story = {
  render: (args) => ({
    components: { NumberFlow },
    setup() {
      const value = ref(args.value);

      return { args, value };
    },
    template: `
      <div style="display: grid; justify-items: start; gap: 24px">
        <NumberFlow v-bind="args" :value="value" />
        <div style="display: flex; gap: 8px">
          <button type="button" @click="value -= 137">Уменьшить</button>
          <button type="button" @click="value += 257">Увеличить</button>
        </div>
      </div>
    `,
  }),
};
