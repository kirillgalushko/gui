import { Meta, StoryObj } from '@storybook/vue3';
import ProgressBar from './ProgressBar.vue';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: 'range',
      min: 0,
      step: 1,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 64,
    max: 100,
  },
  render: (args) => ({
    components: { ProgressBar },
    setup() {
      return { args };
    },
    template: '<ProgressBar v-bind="args" />',
  }),
};

export const Segmented: Story = {
  args: {
    progress: 3,
    max: 4,
    segments: 4,
    color: 'positive',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup() {
      return { args };
    },
    template: '<ProgressBar v-bind="args" />',
  }),
};
