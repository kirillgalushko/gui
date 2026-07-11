import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from '../Avatar/Avatar.vue';
import Button from '../Button/Button.vue';
import Item from './Item.vue';
import ItemActions from './ItemActions.vue';
import ItemContent from './ItemContent.vue';
import ItemDescription from './ItemDescription.vue';
import ItemMedia from './ItemMedia.vue';
import ItemTitle from './ItemTitle.vue';

const meta: Meta<typeof Item> = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    interactive: {
      control: { type: 'boolean' },
    },
    mode: {
      control: { type: 'select' },
      options: ['card', 'outlined', 'plain'],
    },
    padding: {
      control: { type: 'select' },
      options: [undefined, 0, 4, 8, 12, 16, 20, 24, 32, 36],
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'extra-small'],
    },
    stretched: {
      control: { type: 'boolean' },
    },
  },
  args: {
    mode: 'card',
    padding: undefined,
    size: 'medium',
    stretched: true,
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Avatar,
      Button,
      Item,
      ItemActions,
      ItemContent,
      ItemDescription,
      ItemMedia,
      ItemTitle,
    },
    setup() {
      return { args };
    },
    template: `
      <Item v-bind="args">
        <ItemMedia>
          <Avatar name="Аренда" size="40px" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Аренда</ItemTitle>
          <ItemDescription>Организация</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="small">Открыть</Button>
        </ItemActions>
      </Item>
    `,
  }),
};
