import { computed } from 'vue';
import { Meta, StoryObj } from '@storybook/vue3';
import PasswordStrengthInput from './PasswordStrengthInput.vue';

type PasswordStrengthInputType = typeof PasswordStrengthInput | HTMLInputElement

const meta: Meta<PasswordStrengthInputType> = {
  title: 'Components/PasswordStrengthInput',
  component: PasswordStrengthInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    invalid: {
      type: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<PasswordStrengthInputType>;

export const Default: Story = {
  args: {
    placeholder: 'Придумайте пароль',
    value: 'Password1',
    description: 'Используйте надежный пароль',
  },
  render: (args) => ({
    components: { PasswordStrengthInput },
    setup() {
      const rules = computed(() => {
        const value = String(args.value ?? '');

        return [
          { id: 'length', label: 'Минимум 8 символов', valid: value.length >= 8 },
          { id: 'upper', label: 'Есть заглавная буква', valid: /[A-ZА-Я]/.test(value) },
          { id: 'number', label: 'Есть цифра', valid: /\d/.test(value) },
          { id: 'special', label: 'Есть спецсимвол', valid: /[^A-Za-zА-Яа-я0-9]/.test(value) },
        ];
      });

      return { args, rules };
    },
    template: '<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />',
  }),
};

export const ExternalProgress: Story = {
  args: {
    placeholder: 'Придумайте пароль',
    value: 'Password1',
    progress: 50,
    progressSegments: 5,
    mediumColor: '#f59e0b',
  },
  render: (args) => ({
    components: { PasswordStrengthInput },
    setup() {
      const rules = [
        { id: 'length', label: 'Минимум 8 символов', valid: true },
        { id: 'upper', label: 'Есть заглавная буква', valid: true },
        { id: 'number', label: 'Есть цифра', valid: false },
        { id: 'special', label: 'Есть спецсимвол', valid: false },
      ];

      return { args, rules };
    },
    template: '<PasswordStrengthInput v-bind="args" v-model="args.value" :rules="rules" />',
  }),
};
