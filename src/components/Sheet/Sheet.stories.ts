import { Meta, StoryObj } from "@storybook/vue3";
import Button from "../Button/Button.vue";
import Gap from "../Gap/Gap.vue";
import Input from "../Input/Input.vue";
import Sheet from "./Sheet.vue";
import Text from "../Text/Text.vue";
import { useModal } from "../../hooks/useModal";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    isOpened: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    size: {
      control: { type: "select" },
      options: ["auto", "small", "medium", "large", "full"],
    },
    mode: {
      control: { type: "select" },
      options: ["default", "floating"],
    },
    rounded: {
      control: { type: "boolean" },
    },
  },
  args: {
    isOpened: true,
    showCloseButton: true,
    title: "Настройки объекта",
    description: "Измените параметры объявления и сохраните результат.",
    side: "right",
    mode: "default",
    rounded: true,
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 520,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: (args) => ({
    components: { Button, Gap, Input, Sheet },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    `,
  }),
};

export const WithUseModal: Story = {
  args: {
    isOpened: false,
  },
  render: (args) => ({
    components: { Button, Gap, Input, Sheet },
    setup() {
      const { show, close, visible } = useModal();

      return { args, show, close, visible };
    },
    template: `
      <Button mode="contrast" @click="show">Открыть Sheet</Button>
      <Sheet v-bind="args" :isOpened="visible" :onClose="close">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </Sheet>
    `,
  }),
};

export const LeftSide: Story = {
  args: {
    side: "left",
    size: "small",
  },
  render: (args) => ({
    components: { Button, Sheet, Text },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Левая панель подходит для фильтров, навигации и дополнительных настроек.
        </Text>
      </Sheet>
    `,
  }),
};

export const BottomSide: Story = {
  args: {
    side: "bottom",
  },
  render: (args) => ({
    components: { Button, Sheet, Text },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Нижняя панель удобна для мобильных действий и кратких форм.
        </Text>
      </Sheet>
    `,
  }),
};

export const Floating: Story = {
  args: {
    mode: "floating",
  },
  render: (args) => ({
    components: { Button, Gap, Input, Sheet },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </Sheet>
    `,
  }),
};

export const FloatingBottomSide: Story = {
  args: {
    mode: "floating",
    side: "bottom",
  },
  render: (args) => ({
    components: { Button, Sheet, Text },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Floating-панель сохраняет отступ от краёв экрана на мобильных устройствах.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    `,
  }),
};

export const FullHeightBottomSide: Story = {
  args: {
    side: "bottom",
    size: "full",
  },
  render: (args) => ({
    components: { Button, Sheet, Text },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <Text typography="paragraph-1">
          Полноэкранный bottom sheet оставляет небольшой отступ сверху.
        </Text>
        <template #footer>
          <Button mode="contrast">Готово</Button>
        </template>
      </Sheet>
    `,
  }),
};
