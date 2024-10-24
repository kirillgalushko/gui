import { Meta, StoryObj } from '@storybook/vue3';
import Modal from './Modal.vue';
import Button from '../Button/Button.vue';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpened: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' }
    },
    showCloseButton: {
      control: { type: 'boolean' }
    }
  },
  args: {
    isOpened: true,
    showCloseButton: false,
    title: "Сохранить прогресс?",
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const HorizontalModal: Story = {
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

export const LongContent: Story = {
  args: {
    isOpened: true,
    title: "Сохранить прогресс?Сохранить прогресс?Сохранить прогресс?",
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