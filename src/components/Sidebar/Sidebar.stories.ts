import { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import SidebarList from './SidebarList.vue'
import SidebarItem from './SidebarItem.vue'
import Icon from '../Icon/Icon.vue'
import Badge from '../Badge/Badge.vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => ({
    components: { Sidebar, SidebarItem, SidebarList, Icon, Badge },
    template: `
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <Icon name="music" />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <Icon name="building-broadcast-tower" />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="playlist" />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="settings" />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <Icon name="info-triangle" />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    `,
  }),
};
