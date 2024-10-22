import { Meta, StoryObj } from '@storybook/vue3';
import Card from '../Card/Card.vue'
import Stack from './Stack.vue';

const meta: Meta<typeof Stack> = {
  title: 'Example/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['column', 'row']
    },
    gap: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6]
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    direction: 'column',
    gap: 3,
  },
  render: (args) => ({
    components: { Stack, Card },
    setup() {
      return { args };
    },
    template: `
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        1
        <Card>Элемент 2</Card>
        2
        <Card>Элемент 3</Card>
        3
      </Stack>
    `,
  }),
};

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 3,
  },
  render: (args) => ({
    components: { Stack, Card },
    setup() {
      return { args };
    },
    template: `
      <Stack v-bind="args">
        <Card>Элемент 1</Card>
        <Card>Элемент 2</Card>
        <Card>Элемент 3</Card>
      </Stack>
    `,
  }),
};
