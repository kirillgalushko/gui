import { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';
import Icon from '../Icon/Icon.vue';

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
    components: { Input, Icon },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args">
        <template #leftAdornment>
          <Icon name="search" />
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
    components: { Input, Icon },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args">
        <template #rightAdornment>
          <Icon name="menu-2" />
        </template>
      </Input>
    `,
  }),
};
