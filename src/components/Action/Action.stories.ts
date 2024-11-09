import { Meta, StoryObj } from '@storybook/vue3';
import Action from './Action.vue';
import {IconEyeOutline} from '@gui/icons'

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
    components: { Action, IconEyeOutline },
    setup() {
      return { args };
    },
    template: `<Action v-bind="args"> <IconEyeOutline /> </Action>`,
  }),
};
