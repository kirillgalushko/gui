import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import { IconPencilOutline } from '@gui/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['default', 'accent', 'ghost', 'outline'] },
    stretched: { control: 'boolean' },
    squared: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  args: {
    mode: 'default',
    stretched: false,
    squared: false,
    // @ts-expect-error
    onClick: fn(() => 'clicked'),
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
    default: 'Button',
    squared: true,
  },
  render: (args) => ({
    components: { Button, IconPencilOutline },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"><IconPencilOutline /></Button>',
  }),
};

export const Loading: Story = {
  args: {
    mode: 'default',
    default: 'Button',
    isLoading: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Loading</Button>',
  }),
};

export const Disabled: Story = {
  args: {
    mode: 'default',
    default: 'Button',
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Купить</Button>',
  }),
};


