import { Meta, StoryObj } from '@storybook/vue3';
import Card, { CardProps } from './Card.vue';
import { DefineComponent } from 'vue';

type CardType = DefineComponent<CardProps>

const meta = {
  title: 'Example/Card',
  // @ts-ignore
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: { type: 'select', options: ['default', 'secondary'] },
    },
    stretched: {
      control: { type: 'boolean' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<CardType>;

export default meta;
type Story = StoryObj<CardType>;

export const DefaultCard: Story = {
  args: {
    background: 'default',
    stretched: false,
    interactive: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Default Card</Card>',
  }),
};

export const SecondaryCard: Story = {
  args: {
    background: 'secondary',
    stretched: false,
    interactive: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Secondary Card</Card>',
  }),
};

export const InteractiveCard: Story = {
  args: {
    background: 'default',
    stretched: false,
    interactive: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log('Card clicked', event);
      };
      return { args, onClick };
    },
    template: '<Card v-bind="args" @click="onClick">Interactive Card</Card>',
  }),
};

export const StretchedCard: Story = {
  args: {
    background: 'default',
    stretched: true,
    interactive: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args">Stretched Card</Card>',
  }),
};
