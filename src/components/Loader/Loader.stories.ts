import { Meta, StoryObj } from '@storybook/vue3';
import Loader from './Loader.vue';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'text' },
    },
  },
  args: {
    size: '2em'
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Loader },
    setup() {
      return { args };
    },
    template: `<div style="color: hsl(var(--foreground)); font-size: 16px;"><Loader v-bind="args"></Loader></div>`,
  }),
};
