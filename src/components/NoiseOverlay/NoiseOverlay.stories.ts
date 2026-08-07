import type { Meta, StoryObj } from "@storybook/vue3";
import NoiseOverlay from "./NoiseOverlay.vue";

const meta: Meta<typeof NoiseOverlay> = {
  title: "Components/NoiseOverlay",
  component: NoiseOverlay,
  tags: ["autodocs"],
  args: {
    blendMode: "soft-light",
    grainSize: 1.25,
    octaves: 4,
    opacity: 0.1,
    position: "absolute",
    seed: 7,
    zIndex: 1,
  },
  argTypes: {
    blendMode: {
      control: "select",
      options: ["normal", "overlay", "soft-light"],
    },
    grainSize: { control: { type: "range", min: 0.5, max: 8, step: 0.25 } },
    octaves: { control: { type: "range", min: 1, max: 6, step: 1 } },
    opacity: { control: { type: "range", min: 0, max: 0.3, step: 0.01 } },
    position: { control: "select", options: ["absolute", "fixed"] },
    seed: { control: { type: "range", min: 1, max: 20, step: 1 } },
    zIndex: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof NoiseOverlay>;

export const Gradient: Story = {
  render: (args) => ({
    components: { NoiseOverlay },
    setup() {
      return { args };
    },
    template: `
      <div style="position: relative; overflow: hidden; min-height: 360px; border-radius: 24px; background: radial-gradient(circle at 50% 20%, #8b5cf6, #111827 68%);">
        <NoiseOverlay v-bind="args" />
      </div>
    `,
  }),
};

export const BackgroundSurface: Story = {
  render: (args) => ({
    components: { NoiseOverlay },
    setup() {
      return { args };
    },
    template: `
      <NoiseOverlay v-bind="args" :z-index="0">
        <div style="min-height: 360px; padding: 48px; background: radial-gradient(circle at 50% 20%, rgb(139 92 246 / 0.5), transparent 68%);">
          <div style="padding: 32px; border-radius: 20px; background: hsl(var(--card));">
            Шум виден на фоне, но не поверх этой карточки.
          </div>
        </div>
      </NoiseOverlay>
    `,
  }),
};
