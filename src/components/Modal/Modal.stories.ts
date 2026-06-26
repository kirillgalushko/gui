import { Meta, StoryObj } from '@storybook/vue3';
import Modal from './Modal.vue';
import Button from '../Button/Button.vue';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpened: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isOpened: true,
    showCloseButton: false,
    title: "Сохранить прогресс?",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  args: {
    isOpened: true,
    title: "Сохранить прогресс?",
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      return { args };
    },
    template: `
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
      </Modal>`,
  }),
};

export const WithFooter: Story = {
  args: {
    isOpened: true,
    title: "Сохранить прогресс?",
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      return { args };
    },
    template: `
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>`,
  }),
};

export const WithUseModal: Story = {
  args: {
    title: "Сохранить прогресс?",
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const { show, close, visible } = useModal();

      return { args, show, close, visible };
    },
    template: `
      <Button mode="accent" @click="show">Открыть модалку</Button>
      <Modal v-bind="args" :isOpened="visible" :onClose="close" showCloseButton>
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost" @click="close">Закрыть</Button>
          <Button mode="accent" @click="close">Сохранить</Button>
        </template>
      </Modal>`,
  }),
};

export const LongContent: Story = {
  args: {
    isOpened: true,
    title: "Сохранить прогресс?",
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      return { args };
    },
    template: `
      <Modal v-bind="args">
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        Закрытие приведет к потере данных. Хотите сохранить прогресс?
        <template #footer>
          <Button mode="ghost">Закрыть</Button>
          <Button mode="accent">Сохранить</Button>
        </template>
      </Modal>`,
  }),
};
