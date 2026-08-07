import type { Meta, StoryObj } from "@storybook/vue3";
import { IconCalendarOutline } from "@gui/icons";
import CollapsibleSection from "./CollapsibleSection.vue";

const meta: Meta<typeof CollapsibleSection> = {
  title: "Components/CollapsibleSection",
  component: CollapsibleSection,
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
type Story = StoryObj<typeof CollapsibleSection>;

export const Default: Story = {
  render: (args) => ({
    components: {
      CollapsibleSection,
      IconCalendarOutline,
    },
    setup() {
      return { args };
    },
    template: `
      <CollapsibleSection v-bind="args">
        <template #icon>
          <IconCalendarOutline />
        </template>
        Даты, гость и стоимость бронирования.
      </CollapsibleSection>
    `,
  }),
};
