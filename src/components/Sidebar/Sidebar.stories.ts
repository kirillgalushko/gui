import { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import SidebarList from './SidebarList.vue'
import SidebarItem from './SidebarItem.vue'
import { IconMusicOutline, IconBuildingBroadcastTowerOutline, IconPlaylistOutline, IconSettingsOutline, IconInfoTriangleOutline } from '@gui/icons';
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
    components: { Sidebar, SidebarItem, SidebarList, Badge,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
      IconInfoTriangleOutline,
     },
    template: `
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <IconMusicOutline />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <IconBuildingBroadcastTowerOutline />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconPlaylistOutline />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconSettingsOutline />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <IconInfoTriangleOutline />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    `,
  }),
};
