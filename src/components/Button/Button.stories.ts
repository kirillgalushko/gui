import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import Icon from '../Icon/Icon.vue'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['default', 'accent', 'ghost'] },
    stretched: { control: 'boolean' },
    squared: { control: 'boolean' },
  },
  args: {
    mode: 'default',
    stretched: false,
    squared: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'default',
    default: 'Button'
  },
};

export const IconButton: Story = {
  args: {
    mode: 'default',
    default: 'Button'
  },
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"><Icon name="edit" /></Button>',
  }),
};

