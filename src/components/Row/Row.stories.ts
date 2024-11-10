import { Meta, StoryObj } from '@storybook/vue3';
import Row from './Row.vue';
import Card from '../Card/Card.vue'

const meta: Meta<typeof Row> = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    fullHeight: {
      control: 'boolean',
      description: 'Устанавливает высоту строки на 100%',
    },
    alignItems: {
      control: 'select',
      description: 'Устанавливает высоту строки на 100%',
      options: ['start', 'center', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

const template = `
      <Row v-bind="args">
        <Card>1<br/>1</Card>
        <Card>2<br/><br/>2</Card>
        <Card>3<br/><br/><br/>3</Card>
      </Row>
    `

export const Default: Story = {
  args: {
    fullHeight: false,
  },
  render: (args) => ({
    components: { Row, Card },
    setup() {
      return { args };
    },
    template
  }),
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
  },
  render: (args) => ({
    components: { Row, Card },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 300px;">
        ${template}
      </div>
    `,
  }),
};
