import { Meta, StoryObj } from '@storybook/vue3';
import Gap from './Gap.vue';

const meta: Meta<typeof Gap> = {
  title: 'Example/Gap',
  component: Gap,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    default: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6]
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
    template: `<div>Gap<span style="border: 1px solid red;"><Gap v-bind="args" /></span>Gap</div>`,
  }),
};

export const VerticalGap: Story = {
  args: {
    direction: 'vertical',
    default: 3,
  },
  render: (args) => ({
    components: { Gap },
    setup() {
      return { args };
    },
    template: `<div>Gap<div style="border: 1px solid red; width: 1em;"><Gap v-bind="args" /></div>Gap</div>`,
  }),
};
