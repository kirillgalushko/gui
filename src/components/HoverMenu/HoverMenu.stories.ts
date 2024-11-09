import { Meta, StoryObj } from '@storybook/vue3';
import HoverMenu from './HoverMenu.vue';
import HoverMenuItem from './HoverMenuItem.vue';
import HoverMenuList from './HoverMenuList.vue';
import HoverMenuSeparator from './HoverMenuSeparator.vue';
import Button from '../Button/Button.vue'
import { IconPencilOutline, IconExternalLinkOutline, IconShareOutline, IconCopyOutline, IconMailOutline, IconArchiveOutline } from '@gui/icons';

const meta: Meta<typeof HoverMenu> = {
  title: 'Example/HoverMenu',
  component: HoverMenu,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof HoverMenu>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { HoverMenu, HoverMenuItem, HoverMenuList, HoverMenuSeparator, Button,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline,
     },
    setup() {},
    template: `
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><IconPencilOutline />Открыть</HoverMenuItem>
            <HoverMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><IconShareOutline />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><IconCopyOutline />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><IconMailOutline />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><IconArchiveOutline />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `,
  }),
};
