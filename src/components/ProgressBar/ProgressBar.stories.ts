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
      max: 100,
      step: 1,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 64,
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
    progress: 75,
    segments: 4,
    color: 'success',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup() {
      return { args };
    },
    template: '<ProgressBar v-bind="args" />',
  }),
};
