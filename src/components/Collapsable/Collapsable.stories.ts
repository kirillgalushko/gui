import type { Meta, StoryObj } from "@storybook/vue3";
import { IconCalendarOutline } from "@gui/icons";
import Collapsable from "./Collapsable.vue";

const meta: Meta<typeof Collapsable> = {
  title: "Components/Collapsable",
  component: Collapsable,
  tags: ["autodocs"],
  args: {
    defaultOpened: true,
    disabled: false,
    title: "Данные бронирования",
  },
  argTypes: {
    defaultOpened: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsable>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Collapsable,
      IconCalendarOutline,
    },
    setup() {
      return { args };
    },
    template: `
      <Collapsable v-bind="args">
        <template #icon>
          <IconCalendarOutline />
        </template>
        Даты, гость и стоимость бронирования.
      </Collapsable>
    `,
  }),
};
