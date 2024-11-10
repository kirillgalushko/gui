import { Meta, StoryObj } from '@storybook/vue3';
import Select from './Select.vue';
import SelectOption from './SelectOption.vue'
import { ref } from 'vue';
import { RegisteredOption } from './useSelect';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['!autodocs'],
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
