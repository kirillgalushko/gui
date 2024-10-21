import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['default', 'accent'] },
    stretched: { control: 'boolean' },
  },
  args: {
    mode: 'default',
    stretched: false,
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

