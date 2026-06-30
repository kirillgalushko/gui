import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import { IconSettingsOutline } from '@gui/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['default', 'contrast', 'ghost', 'outline', 'negative', 'accent'] },
    size: { control: 'select', options: ['extra-small', 'small', 'medium', 'large'] },
    stretched: { control: 'boolean' },
    squared: { control: 'boolean' },
    rounded: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  args: {
    mode: 'default',
    size: 'large',
    stretched: false,
    squared: false,
    rounded: false,
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
    components: { Button, IconSettingsOutline },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"><IconSettingsOutline /></Button>',
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
