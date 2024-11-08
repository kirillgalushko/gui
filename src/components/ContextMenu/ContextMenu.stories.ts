import { Meta, StoryObj } from '@storybook/vue3';
import ContextMenu from './ContextMenu.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import ContextSubmenu from './ContextSubmenu.vue';
import ContextMenuList from './ContextMenuList.vue';
import ContextMenuSeparator from './ContextMenuSeparator.vue';

import EditIcon from '@gui/icons/outline/pencil.js'
import LinkIcon from '@gui/icons/outline/external-link.js'
import ShareIcon from '@gui/icons/outline/share.js'
import FeatherIcon from '@gui/icons/outline/feather.js'
import MailIcon from '@gui/icons/outline/mail.js'
import ArchiveIcon from '@gui/icons/outline/archive.js'
import { useContextMenu } from './useContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Example/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: {
      ContextMenu, ContextMenuItem, ContextMenuList, ContextMenuSeparator, ContextSubmenu,
      EditIcon,
      LinkIcon,
      ShareIcon,
      FeatherIcon,
      MailIcon,
      ArchiveIcon
    },
    setup() {
      const { contextMenuData, targetRef } = useContextMenu();
      return { args, contextMenuData, targetRef };
    },
    template: `
    <div>
      <div
        ref="targetRef"
        style="width: 500px; height: 500px; border: 1px dashed grey; display: flex; justify-content: center; align-items: center;"
      >
        <a>Используй правую кнопку мыши в этой области</a>
      </div>

      <ContextMenu :data="contextMenuData">
        <ContextMenuList>
          <ContextMenuItem><EditIcon />Открыть</ContextMenuItem>
          <ContextMenuItem><LinkIcon />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><ShareIcon />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><MailIcon />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><FeatherIcon />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><ArchiveIcon />Архивировать</ContextMenuItem>
        </ContextMenuList>
      </ContextMenu>
      </div>
    `,
  }),
};
