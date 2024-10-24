import { Meta, StoryObj } from '@storybook/vue3';
import Action from './Action.vue';
import Icon from '../Icon/Icon.vue';

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
    components: { Action, Icon },
    setup() {
      return { args };
    },
    template: `<Action v-bind="args"> <Icon name="eye" /> </Action>`,
  }),
};
