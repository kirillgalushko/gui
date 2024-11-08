import { Meta, StoryObj } from '@storybook/vue3';
import HoverMenu from './HoverMenu.vue';
import HoverMenuItem from './HoverMenuItem.vue';
import HoverMenuList from './HoverMenuList.vue';
import HoverMenuSeparator from './HoverMenuSeparator.vue';
import Button from '../Button/Button.vue'

import EditIcon from '@gui/icons/outline/pencil.js'
import LinkIcon from '@gui/icons/outline/external-link.js'
import ShareIcon from '@gui/icons/outline/share.js'
import CopyIcon from '@gui/icons/outline/copy.js'
import MailIcon from '@gui/icons/outline/mail.js'
import ArchiveIcon from '@gui/icons/outline/archive.js'

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
      LinkIcon,
      EditIcon,
      ShareIcon,
      ArchiveIcon,
      MailIcon,
      CopyIcon,
     },
    setup() {},
    template: `
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><EditIcon />Открыть</HoverMenuItem>
            <HoverMenuItem><LinkIcon />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><ShareIcon />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><CopyIcon />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><MailIcon />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><ArchiveIcon />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `,
  }),
};
