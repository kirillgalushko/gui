import { Meta, StoryObj } from '@storybook/vue3';
import ContextMenu from './ContextMenu.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import ContextSubmenu from './ContextSubmenu.vue';
import ContextMenuList from './ContextMenuList.vue';
import ContextMenuSeparator from './ContextMenuSeparator.vue';
import Icon from '../Icon/Icon.vue'
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
    components: { ContextMenu, ContextMenuItem, ContextMenuList, ContextMenuSeparator, Icon, ContextSubmenu },
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
          <ContextMenuItem><Icon name="pencil" />Открыть</ContextMenuItem>
          <ContextMenuItem><Icon name="external-link" />Открыть в новой вкладке</ContextMenuItem>
          <ContextSubmenu>
            <ContextMenuItem showArrow><Icon name="share" />Поделиться</ContextMenuItem>
            <template #menu>
              <ContextMenuList>
                <ContextMenuItem><Icon name="mail" />Отправить по почте</ContextMenuItem>
                <ContextMenuItem><Icon name="feather" />Отправить голубем</ContextMenuItem>
              </ContextMenuList>
            </template>
          </ContextSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem><Icon name="archive" />Архивировать</ContextMenuItem>
        </ContextMenuList>
      </ContextMenu>
      </div>
    `,
  }),
};
