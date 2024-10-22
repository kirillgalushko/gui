import { Meta, StoryObj } from '@storybook/vue3';
import Separator from './Separator.vue';
import Button from '../Button/Button.vue'
import Icon from '../Icon/Icon.vue'
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
    <Button> <Icon name="edit" /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Button> <Icon name="save" /> </Button>
    <Gap direction="horizontal" :default="2" />
    <Separator v-bind="args" />
    <Gap direction="horizontal" :default="2" />
    <Button> <Icon name="close" /> </Button>
  </Row>
`

export const Default: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => ({
    components: { Separator, Button, Icon, Row, Gap },
    setup() {
      return { args };
    },
    template
  }),
};
