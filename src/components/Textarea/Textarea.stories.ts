import { Meta, StoryObj } from '@storybook/vue3';
import Textarea from './Textarea.vue';

type TextareaType = typeof Textarea | HTMLTextAreaElement

const meta: Meta<TextareaType> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['fixed', 'fill-vertical', 'fill-horizontal', 'fill-both', 'hug']
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
};

export default meta;
type Story = StoryObj<TextareaType>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    resize: 'horizontal',
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<div style="height: 300px;"><Textarea v-bind="args" v-model="args.value" /></div>`,
  }),
};