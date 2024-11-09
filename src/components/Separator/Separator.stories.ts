import { Meta, StoryObj } from '@storybook/vue3';
import Separator from './Separator.vue';
import Button from '../Button/Button.vue'
import { IconChevronDownOutline, IconPencilOutline } from '@gui/icons';
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
    <Button squared> <IconPencilOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconChevronDownOutline /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button squared> <IconPencilOutline /> </Button>
  </Row>
`

export const Default: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => ({
    components: { Separator, Button, IconChevronDownOutline, IconPencilOutline, Row, Gap },
    setup() {
      return { args };
    },
    template
  }),
};
