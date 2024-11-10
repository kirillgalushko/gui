import { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['!autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['default', 'secondary']
    },
  },
  args: {
    mode: 'default'
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">99+</Badge>`,
  }),
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">99+</Badge>`,
  }),
};
