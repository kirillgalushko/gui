import { Meta, StoryObj } from '@storybook/vue3';
import Text from '../Text/Text.vue';
import Button from '../Button/Button.vue'
import Gap from '../Gap/Gap.vue';
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
      control: { type: 'select', },
      options: ['default', 'secondary']
    },
    stretched: {
      control: { type: 'boolean' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    padding: {
      control: { type: 'number' },
    },
    borderRadius: {
      control: { type: 'number' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<CardType>;

export default meta;
type Story = StoryObj<CardType>;

const cardContent = `
  <Text typography="title-2-semibold">Notifications</Text>
  <Gap :default="1" direction="vertical" />
  <Text typography="paragraph-2-regular" mode="secondary">You have 3 unread messages</Text>
  <Gap :default="3" direction="vertical" />
  <Button mode="accent">Mark as read</Button>
`
const demoComponents = { Card, Text, Button, Gap }
const demoArgs = {
  padding: 24,
  borderRadius: 20,
} as const

export const DefaultCard: Story = {
  args: {
    background: 'default',
    stretched: false,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `
    <Card v-bind="args">
      ${cardContent}
    </Card>`,
  }),
};

export const SecondaryCard: Story = {
  args: {
    background: 'secondary',
    stretched: false,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `<Card v-bind="args">${cardContent}</Card>`,
  }),
};

export const InteractiveCard: Story = {
  args: {
    background: 'default',
    stretched: false,
    interactive: true,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      const onClick = (event: MouseEvent) => {
        console.log('Card clicked', event);
      };
      return { args, onClick };
    },
    template: `<Card v-bind="args" @click="onClick">
      <Text typography="title-2-semibold">Interactive Card</Text>
      <Text typography="paragraph-2-regular" mode="secondary">The whole card is clickable</Text>
    </Card>`,
  }),
};

export const StretchedCard: Story = {
  args: {
    background: 'default',
    stretched: true,
    interactive: false,
    ...demoArgs,
  },
  render: (args) => ({
    components: demoComponents,
    setup() {
      return { args };
    },
    template: `<Card v-bind="args">${cardContent}</Card>`,
  }),
};
