import type { Meta, StoryObj } from "@storybook/vue3";
import AuroraBackground from "./AuroraBackground.vue";

const meta: Meta<typeof AuroraBackground> = {
  title: "Components/AuroraBackground",
  component: AuroraBackground,
  tags: ["autodocs"],
  args: {
    animated: true,
    intensity: "strong",
    palette: "brand",
  },
  argTypes: {
    animated: { control: "boolean" },
    intensity: {
      control: "select",
      options: ["subtle", "medium", "strong"],
    },
    palette: {
      control: "select",
      options: ["brand", "ocean", "sunset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuroraBackground>;

export const Default: Story = {
  render: (args) => ({
    components: { AuroraBackground },
    setup() {
      return { args };
    },
    template: `
      <AuroraBackground v-bind="args">
        <div style="min-height: 900px; padding: 80px 40px;">
          <div style="max-width: 720px; margin: 0 auto; padding: 48px; border: 1px solid hsl(var(--border)); border-radius: 28px; background: hsl(var(--card) / 0.82);">
            <h2 style="margin: 0 0 12px; font-size: 40px;">Atmospheric surface</h2>
            <p style="margin: 0; color: hsl(var(--muted-foreground));">Aurora остаётся под любым содержимым и мягко движется по фону.</p>
          </div>
        </div>
      </AuroraBackground>
    `,
  }),
};
