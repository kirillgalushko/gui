import { Meta, StoryObj } from "@storybook/vue3";
import Tooltip from "./Tooltip.vue";
import Text from "../Text/Text.vue";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    mode: { control: "select", options: ["default", "contrast"] },
    delay: { control: "object" },
    stretched: { control: "boolean" },
  },
  args: {
    mode: "default",
    delay: { show: 200, hide: 0 },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    mode: "default",
    delay: { show: 200, hide: 0 },
  },
  render: (args) => ({
    components: { Tooltip, Text },
    setup() {
      return { args };
    },
    template: `
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это подсказка
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `,
  }),
};

export const Stretched: Story = {
  args: {
    stretched: true,
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 320px;">
        <Tooltip v-bind="args">
          <button style="width: 100%;">Trigger на всю ширину</button>
          <template #popper>Подсказка</template>
        </Tooltip>
      </div>
    `,
  }),
};

export const Long: Story = {
  args: {
    mode: "default",
    delay: { show: 200, hide: 0 },
  },
  render: (args) => ({
    components: { Tooltip, Text },
    setup() {
      return { args };
    },
    template: `
      Наведи курсор вот 
      <Tooltip v-bind="args">
        <template #popper>
          Это очень длинная подсказка, чтобы посмотреть как будет вести себя компонент в таких условиях
        </template>
        <strong>сюда</strong></Tooltip>, чтобы увидеть Tooltip.
    `,
  }),
};
