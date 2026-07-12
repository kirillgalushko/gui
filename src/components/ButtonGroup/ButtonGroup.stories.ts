import type { Meta, StoryObj } from "@storybook/vue3";
import {
  IconChevronDownOutline,
  IconCopyOutline,
  IconMinusOutline,
  IconPlusOutline,
} from "@gui/icons";

import Button from "../Button/Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import ButtonGroupSeparator from "./ButtonGroupSeparator.vue";
import ButtonGroupText from "./ButtonGroupText.vue";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupSeparator,
      IconChevronDownOutline,
    },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args" aria-label="Действия с отчетом">
        <Button mode="outline">Archive Report</Button>
        <Button mode="outline">Snooze</Button>
        <Button mode="outline" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    `,
  }),
};

export const WithSeparator: Story = {
  render: () => ({
    components: { Button, ButtonGroup, ButtonGroupSeparator, IconCopyOutline },
    template: `
      <ButtonGroup aria-label="Буфер обмена">
        <Button mode="default">
          <IconCopyOutline />
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button mode="default">Paste</Button>
      </ButtonGroup>
    `,
  }),
};

export const Split: Story = {
  render: () => ({
    components: {
      Button,
      ButtonGroup,
      ButtonGroupSeparator,
      IconChevronDownOutline,
      IconPlusOutline,
    },
    template: `
      <ButtonGroup aria-label="Добавление">
        <Button mode="contrast">
          <IconPlusOutline />
          Button
        </Button>
        <ButtonGroupSeparator />
        <Button mode="contrast" squared aria-label="Открыть меню">
          <IconChevronDownOutline />
        </Button>
      </ButtonGroup>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => ({
    components: { Button, ButtonGroup, IconMinusOutline, IconPlusOutline },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup v-bind="args" aria-label="Изменить значение">
        <Button mode="outline" squared aria-label="Увеличить">
          <IconPlusOutline />
        </Button>
        <Button mode="outline" squared aria-label="Уменьшить">
          <IconMinusOutline />
        </Button>
      </ButtonGroup>
    `,
  }),
};

export const WithText: Story = {
  render: () => ({
    components: { Button, ButtonGroup, ButtonGroupText },
    template: `
      <ButtonGroup aria-label="Цена">
        <ButtonGroupText>$</ButtonGroupText>
        <Button mode="outline">10.00</Button>
      </ButtonGroup>
    `,
  }),
};
