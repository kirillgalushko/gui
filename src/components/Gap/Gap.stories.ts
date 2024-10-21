import { Meta, StoryObj } from '@storybook/vue3';
import Gap from './Gap.vue';

const meta: Meta<typeof Gap> = {
  title: 'Example/Gap',
  component: Gap,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
    },
    default: {
      control: { type: 'select', options: ['1', '2', '3', '4', '5', '6'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Gap>;

export const HorizontalGap: Story = {
  args: {
    direction: 'horizontal',
    default: 3,
  },
  render: (args) => ({
    components: { Gap },
    setup() {
      return { args };
    },
    template: '<Gap v-bind="args">This is a horizontal gap</Gap>',
  }),
};

export const VerticalGap: Story = {
  args: {
    direction: 'vertical',
    default: 2,
  },
  render: (args) => ({
    components: { Gap },
    setup() {
      return { args };
    },
    template: '<Gap v-bind="args">This is a vertical gap</Gap>',
  }),
};

export const CustomGap: Story = {
  args: {
    direction: 'horizontal',
    default: 5,
  },
  render: (args) => ({
    components: { Gap },
    setup() {
      return { args };
    },
    template: '<Gap v-bind="args">This is a custom gap</Gap>',
  }),
};
