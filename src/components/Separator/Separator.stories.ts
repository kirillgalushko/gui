import { Meta, StoryObj } from '@storybook/vue3';
import Separator from './Separator.vue';
import Button from '../Button/Button.vue'
import ArrowIcon from '@gui/icons/outline/chevron-down.js'
import EditIcon from '@gui/icons/outline/pencil.js'
import Row from '../Row/Row.vue';
import Gap from '../Gap/Gap.vue';

const meta: Meta<typeof Separator> = {
  title: 'Example/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

const template = `
  <Row alignItems="center">
    <Button squared> <EditIcon /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button squared> <ArrowIcon /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button squared> <EditIcon /> </Button>
  </Row>
`

export const Default: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => ({
    components: { Separator, Button, ArrowIcon, EditIcon, Row, Gap },
    setup() {
      return { args };
    },
    template
  }),
};
