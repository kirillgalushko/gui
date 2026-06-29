import { Meta, StoryObj } from '@storybook/vue3';
import PincodeInput from './PincodeInput.vue';

type PincodeInputType = typeof PincodeInput | HTMLInputElement

const meta: Meta<PincodeInputType> = {
  title: 'Components/PincodeInput',
  component: PincodeInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    loading: {
      type: 'boolean',
    },
    invalid: {
      type: 'boolean',
    },
    succeed: {
      type: 'boolean',
    },
    stretched: {
      type: 'boolean',
    },
    length: {
      control: { type: 'number', min: 3, max: 8 },
    },
  },
};

export default meta;
type Story = StoryObj<PincodeInputType>;

export const Default: Story = {
  args: {
    value: '',
    length: 6,
    description: 'Введите код из сообщения',
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};

export const Filled: Story = {
  args: {
    value: '1234',
    length: 4,
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};

export const Stretched: Story = {
  args: {
    value: '123',
    length: 6,
    stretched: true,
    description: 'Растягивается на ширину контейнера',
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};

export const Loading: Story = {
  args: {
    value: '12',
    length: 6,
    loading: true,
    description: 'Проверяем код',
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};

export const Succeed: Story = {
  args: {
    value: '123456',
    length: 6,
    succeed: true,
    description: 'Код подтвержден',
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};

export const Invalid: Story = {
  args: {
    value: '123',
    length: 6,
    invalid: true,
    description: 'Подсказка скрывается при ошибке',
    errorMessage: 'Код введен неверно',
  },
  render: (args) => ({
    components: { PincodeInput },
    setup() {
      return { args };
    },
    template: '<PincodeInput v-bind="args" v-model="args.value" />',
  }),
};
