import { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';
import { IconMenu2Outline, IconSearchOutline } from '@gui/icons';

type InputType = typeof Input | HTMLInputElement

const meta: Meta<InputType> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      type: 'boolean'
    },
  },
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
    template: '<Input v-bind="args" v-model="args.value" />',
  }),
};


export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
  },
  render: (args) => ({
    components: { Input, IconSearchOutline },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
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
    components: { Input, IconMenu2Outline },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `,
  }),
};
