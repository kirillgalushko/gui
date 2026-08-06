import type { Meta, StoryObj } from "@storybook/vue3";
import FadeMask from "./FadeMask.vue";

const meta: Meta<typeof FadeMask> = {
  title: "Components/FadeMask",
  component: FadeMask,
  tags: ["autodocs"],
  args: {
    direction: "bottom",
    disabled: false,
    easing: "smooth",
    end: 90,
    inline: false,
    overflow: true,
    start: 40,
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    easing: { control: "select", options: ["smooth", "linear"] },
    start: { control: { type: "range", min: 0, max: 100, step: 1 } },
    end: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof FadeMask>;

export const ListPreview: Story = {
  render: (args) => ({
    components: { FadeMask },
    setup() {
      return { args };
    },
    template: `
      <FadeMask v-bind="args" style="max-width: 420px; height: 280px">
        <div style="display: grid; gap: 12px">
          <div
            v-for="item in 6"
            :key="item"
            style="min-height: 56px; padding: 16px; border: 1px solid var(--border); border-radius: 12px"
          >
            Элемент списка {{ item }}
          </div>
        </div>
      </FadeMask>
    `,
  }),
};
