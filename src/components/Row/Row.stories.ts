import { Meta, StoryObj } from '@storybook/vue3';
import Row from './Row.vue';

const meta: Meta<typeof Row> = {
  title: 'Example/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    fullHeight: {
      control: 'boolean',
      description: 'Устанавливает высоту строки на 100%',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {
  args: {
    fullHeight: false,
  },
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: `
      <Row v-bind="args">
        <div style="background-color: lightgrey; padding: 16px;">Это строка по умолчанию</div>
      </Row>
    `,
  }),
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
  },
  render: (args) => ({
    components: { Row },
    setup() {
      return { args };
    },
    template: `
      <Row v-bind="args">
        <div style="background-color: lightblue; padding: 16px;">Это строка с полной высотой</div>
      </Row>
    `,
  }),
};
