import { Meta, StoryObj } from '@storybook/vue3';
import BaseMenu from './BaseMenu.vue';
import BaseMenuItem from './BaseMenuItem.vue';
import BaseMenuList from './BaseMenuList.vue';
import BaseMenuSeparator from './BaseMenuSeparator.vue';

import PencilIcon from '@gui/icons/outline/pencil.js'
import ShareIcon from '@gui/icons/outline/share.js'
import ExternalLinkIcon from '@gui/icons/outline/external-link.js'
import ArchiveIcon from '@gui/icons/outline/archive.js'

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
    components: { BaseMenu, BaseMenuItem, BaseMenuList, BaseMenuSeparator, PencilIcon, ShareIcon, ExternalLinkIcon, ArchiveIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseMenu v-bind="args">
        <BaseMenuList>
          <BaseMenuItem><PencilIcon />Открыть</BaseMenuItem>
          <BaseMenuItem><ExternalLinkIcon />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><ShareIcon />Поделиться</BaseMenuItem>
          <BaseMenuSeparator />
          <BaseMenuItem><ArchiveIcon />Архивировать</BaseMenuItem>
        </BaseMenuList>
      </BaseMenu>`,
  }),
};
