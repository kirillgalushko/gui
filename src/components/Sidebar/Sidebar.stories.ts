import { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import SidebarList from './SidebarList.vue'
import SidebarItem from './SidebarItem.vue'
import MusicIcon from '@gui/icons/outline/music.js';
import BuildingIcon from '@gui/icons/outline/building-broadcast-tower.js';
import PlaylistIcon from '@gui/icons/outline/playlist.js';
import SettingsIcon from '@gui/icons/outline/settings.js';
import InfoIcon from '@gui/icons/outline/info-triangle.js';
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
      MusicIcon,
      BuildingIcon,
      PlaylistIcon,
      SettingsIcon,
      InfoIcon,
     },
    template: `
      <Sidebar :compactWidth="120" minWidth="100px">
        <SidebarList>
          <SidebarItem>
            <template #left>
              <MusicIcon />
            </template>
            Треки
            <template #right>
              <Badge mode="secondary">99+</Badge>
            </template>
          </SidebarItem>
          <SidebarItem selected>
            <template #left>
              <BuildingIcon />
            </template>
            Радио
            <template #right>
              <Badge mode="default">2</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <PlaylistIcon />
            </template>
            Плейлисты
            <template #right>
              <Badge mode="secondary">3</Badge>
            </template>
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <SettingsIcon />
            </template>
            Настройки
          </SidebarItem>
          <SidebarItem>
            <template #left>
              <InfoIcon />
            </template>
            Очень длинное название для кнопки в сайдбаре
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    `,
  }),
};
