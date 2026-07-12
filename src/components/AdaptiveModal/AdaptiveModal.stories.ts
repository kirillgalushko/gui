import { Meta, StoryObj } from "@storybook/vue3";
import AdaptiveModal from "./AdaptiveModal.vue";
import Button from "../Button/Button.vue";
import Gap from "../Gap/Gap.vue";
import Input from "../Input/Input.vue";
import Text from "../Text/Text.vue";
import { useModal } from "../../hooks/useModal";

const meta: Meta<typeof AdaptiveModal> = {
  title: "Components/AdaptiveModal",
  component: AdaptiveModal,
  tags: ["autodocs"],
  argTypes: {
    isOpened: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    modalProps: {
      control: { type: "object" },
    },
    sheetProps: {
      control: { type: "object" },
    },
  },
  args: {
    isOpened: true,
    showCloseButton: true,
    title: "Редактировать объявление",
    sheetProps: {
      rounded: true,
    },
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
type Story = StoryObj<typeof AdaptiveModal>;

export const Default: Story = {
  render: (args) => ({
    components: { AdaptiveModal, Button, Gap, Input },
    setup() {
      return { args };
    },
    template: `
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `,
  }),
};

export const WithUseModal: Story = {
  args: {
    isOpened: false,
  },
  render: (args) => ({
    components: { AdaptiveModal, Button, Gap, Input, Text },
    setup() {
      const { show, close, visible } = useModal();

      return { args, show, close, visible };
    },
    template: `
      <Button mode="contrast" @click="show">Открыть</Button>
      <AdaptiveModal v-bind="args" :isOpened="visible" :onClose="close">
        <Text typography="paragraph-1">
          На больших экранах откроется Modal, на мобильных — Sheet снизу.
        </Text>
        <Gap :size="4" />
        <Input placeholder="Комментарий" />
        <template #footer>
          <Button mode="ghost" @click="close">Отмена</Button>
          <Button mode="contrast" @click="close">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `,
  }),
};

export const FullHeightMobileSheet: Story = {
  args: {
    sheetProps: {
      size: "full",
    },
  },
  render: (args) => ({
    components: { AdaptiveModal, Button, Gap, Input },
    setup() {
      return { args };
    },
    template: `
      <AdaptiveModal v-bind="args">
        <Input placeholder="Название объявления" value="Квартира у парка" />
        <Gap :size="4" />
        <Input placeholder="Стоимость" value="120 000" />
        <template #footer>
          <Button mode="ghost">Отмена</Button>
          <Button mode="contrast">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `,
  }),
};
