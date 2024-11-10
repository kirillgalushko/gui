import { Meta, StoryObj } from '@storybook/vue3';
import Text from './Text.vue';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    typography: 'paragraph-1-regular',
    mode: 'default',
    clamp: 2,
    ellipsis: true,
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `<Text v-bind="args">This is a sample text that demonstrates the typography component in different modes.</Text>`,
  }),
};

export const Secondary: Story = {
  args: {
    typography: 'title-2-semibold',
    mode: 'secondary',
    clamp: 3,
    ellipsis: false,
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `<Text v-bind="args">This is a secondary styled title text.</Text>`,
  }),
};

export const WithClamping: Story = {
  args: {
    typography: 'paragraph-2-regular',
    mode: 'default',
    clamp: 4,
    ellipsis: true,
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `<Text v-bind="args">This is a longer paragraph that should be clamped after a certain number of lines, demonstrating the clamping functionality of the text component.</Text>`,
  }),
};
