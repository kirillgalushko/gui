import { Meta, StoryObj } from '@storybook/vue3';
import BaseMenu from './BaseMenu.vue';
import BaseMenuItem from './BaseMenuItem.vue';
import BaseMenuList from './BaseMenuList.vue';
import BaseMenuSeparator from './BaseMenuSeparator.vue';
import Icon from '../Icon/Icon.vue'

const meta: Meta<typeof BaseMenu> = {
  title: 'Example/BaseMenu',
  component: BaseMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseMenu>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { BaseMenu, BaseMenuItem, BaseMenuList, BaseMenuSeparator, Icon },
    setup() {
      return { args };
    },
    template: `
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><Icon name="pencil" />Открыть</BaseMenuItem>
          <BaseMenuItem><Icon name="external-link" />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><Icon name="archive" />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><Icon name="archive" />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`,
  }),
};
