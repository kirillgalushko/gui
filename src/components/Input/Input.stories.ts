import { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';
import MenuIcon from '@gui/icons/outline/menu-2.js'
import SearchIcon from '@gui/icons/outline/search.js'

type InputType = typeof Input | HTMLInputElement

const meta: Meta<InputType> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputType>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
  }),
};


export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
  },
  render: (args) => ({
    components: { Input, SearchIcon },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args">
        <template #leftAdornment>
          <SearchIcon />
        </template>
      </Input>
    `,
  }),
};


export const WithRightIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
  },
  render: (args) => ({
    components: { Input, MenuIcon },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args">
        <template #rightAdornment>
          <MenuIcon />
        </template>
      </Input>
    `,
  }),
};
