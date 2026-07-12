import { Meta, StoryObj } from '@storybook/vue3';
import Select from './Select.vue';
import SelectOption from './SelectOption.vue'
import { ref } from 'vue';
import { RegisteredOption } from './useSelect';
import Button from '../Button/Button.vue';
import Gap from '../Gap/Gap.vue';
import type { ButtonProps } from '../Button/Button.vue';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['!autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Выберите тему',
    name: 'theme'
  },
  render: (args) => ({
    components: { Select, SelectOption },
    setup() {
      const selectedOption = ref<string>('dark')
      const handleChange = (option: RegisteredOption) => {
        selectedOption.value = option.value
      }
      return { args, handleChange, selectedOption };
    },
    template: `
    <div>
      <Select v-bind="args" :value="selectedOption" @change="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
    </div>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button, Gap, Select, SelectOption },
    setup() {
      const selectedOption = ref<string>('dark')
      const sizes: ButtonProps['size'][] = ['extra-small', 'small', 'medium', 'large']
      const handleChange = (option: RegisteredOption) => {
        selectedOption.value = option.value
      }

      return { handleChange, selectedOption, sizes };
    },
    template: `
    <div v-for="size in sizes" :key="size">
      <Select :size="size" :value="selectedOption" :onChange="handleChange">
        <SelectOption value="auto" label="Авто" />
        <SelectOption value="light" label="Светлая тема" />
        <SelectOption value="dark" label="Тёмная тема" />
      </Select>
      <Gap direction="horizontal" :size="2" />
      <Button :size="size">Button</Button>
      <Gap direction="vertical" :size="3" />
    </div>`,
  }),
};
