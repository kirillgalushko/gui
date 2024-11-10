import { Meta, StoryObj } from '@storybook/vue3';
import BaseMenu from './BaseMenu.vue';
import BaseMenuItem from './BaseMenuItem.vue';
import BaseMenuList from './BaseMenuList.vue';
import BaseMenuSeparator from './BaseMenuSeparator.vue';

import { IconPencilOutline, IconShareOutline, IconExternalLinkOutline, IconArchiveOutline } from '@gui/icons';

const meta: Meta<typeof BaseMenu> = {
  title: 'Components/BaseMenu',
  component: BaseMenu,
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseMenu>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { BaseMenu, BaseMenuItem, BaseMenuList, BaseMenuSeparator, IconPencilOutline, IconShareOutline, IconExternalLinkOutline, IconArchiveOutline },
    setup() {
      return { args };
    },
    template: `
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`,
  }),
};
