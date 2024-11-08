import { Meta, StoryObj } from '@storybook/vue3';
import Action from './Action.vue';
import EyeIcon from '@gui/icons/outline/eye.js'

const meta: Meta<typeof Action> = {
  title: 'Example/Action',
  component: Action,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Action>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Action, EyeIcon },
    setup() {
      return { args };
    },
    template: `<Action v-bind="args"> <EyeIcon /> </Action>`,
  }),
};
