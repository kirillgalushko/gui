import { Meta, StoryObj } from '@storybook/vue3';
import HoverMenu from './HoverMenu.vue';
import HoverMenuItem from './HoverMenuItem.vue';
import HoverMenuList from './HoverMenuList.vue';
import HoverMenuSeparator from './HoverMenuSeparator.vue';
import Icon from '../Icon/Icon.vue'
import Button from '../Button/Button.vue'

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
    components: { HoverMenu, HoverMenuItem, HoverMenuList, HoverMenuSeparator, Icon, Button },
    setup() {},
    template: `
    <div>
      <HoverMenu>
        <Button>Hover me</Button>

        <template #menu>
          <HoverMenuList>
            <HoverMenuItem><Icon name="pencil" />Открыть</HoverMenuItem>
            <HoverMenuItem><Icon name="external-link" />Открыть в новой вкладке</HoverMenuItem>
            <HoverMenu>
              <HoverMenuItem showArrow><Icon name="share" />Поделиться</HoverMenuItem>
              <template #menu>
                <HoverMenuList>
                  <HoverMenuItem><Icon name="copy" />Скопировать ссылку</HoverMenuItem>
                  <HoverMenuItem><Icon name="mail" />Отправить по почте</HoverMenuItem>
                </HoverMenuList>
              </template>
            </HoverMenu>
            <HoverMenuSeparator />
            <HoverMenuItem><Icon name="archive" />Архивировать</HoverMenuItem>
          </HoverMenuList>
        </template>
      </HoverMenu>
    </div>
    `,
  }),
};
