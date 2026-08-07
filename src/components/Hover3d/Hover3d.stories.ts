import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "../Avatar/Avatar.vue";
import Button from "../Button/Button.vue";
import Card from "../Card/Card.vue";
import Hover3d from "./Hover3d.vue";

const meta: Meta<typeof Hover3d> = {
  title: "Components/Hover3d",
  component: Hover3d,
  tags: ["autodocs"],
  args: {
    disabled: false,
    maxTilt: 7,
    scale: 1.025,
    stretched: false,
  },
  argTypes: {
    disabled: { control: "boolean" },
    maxTilt: { control: { type: "range", min: 0, max: 16, step: 1 } },
    scale: { control: { type: "range", min: 1, max: 1.1, step: 0.005 } },
    stretched: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Hover3d>;

export const CardExample: Story = {
  render: (args) => ({
    components: { Card, Hover3d },
    setup() {
      return { args };
    },
    template: `
      <Hover3d v-bind="args">
        <Card :padding="24" :border-radius="16">
          Произвольное содержимое
        </Card>
      </Hover3d>
    `,
  }),
};

export const DifferentContent: Story = {
  render: (args) => ({
    components: { Avatar, Button, Hover3d },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; align-items: center; gap: 32px; padding: 32px">
        <Hover3d v-bind="args">
          <Button>Кнопка</Button>
        </Hover3d>
        <Hover3d v-bind="args">
          <Avatar name="Анна Климова" size="56px" color="blue" />
        </Hover3d>
      </div>
    `,
  }),
};
