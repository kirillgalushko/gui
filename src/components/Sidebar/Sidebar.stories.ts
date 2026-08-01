import { Meta, StoryObj } from "@storybook/vue3";
import Sidebar from "./Sidebar.vue";
import SidebarList from "./SidebarList.vue";
import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";
import SidebarCollapsible from "./SidebarCollapsible.vue";
import SidebarSubList from "./SidebarSubList.vue";
import SidebarSubItem from "./SidebarSubItem.vue";
import {
  IconMusicOutline,
  IconBuildingBroadcastTowerOutline,
  IconPlaylistOutline,
  IconSettingsOutline,
  IconInfoTriangleOutline,
} from "@gui/icons";
import Badge from "../Badge/Badge.vue";
import Dot from "../Dot/Dot.vue";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarItem,
      SidebarList,
      Badge,
      Dot,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
      IconInfoTriangleOutline,
    },
    template: `
      <Sidebar :compactWidth="80" :collapseThreshold="180" minWidth="80px">
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
            <template #compact-indicator>
              <Dot color="blue" />
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

export const GroupedWithSubmenu: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarList,
      SidebarItem,
      SidebarGroup,
      SidebarCollapsible,
      SidebarSubList,
      SidebarSubItem,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
    },
    template: `
      <Sidebar :compactWidth="60" :collapseThreshold="180" minWidth="60px">
        <SidebarList>
          <SidebarGroup label="Основное">
            <SidebarItem selected>
              <template #left><IconMusicOutline /></template>
              Главная
            </SidebarItem>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Задачи
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup label="Другое">
            <SidebarCollapsible label="Настройки" selected default-opened>
              <template #icon><IconSettingsOutline /></template>
              <SidebarSubList>
                <SidebarSubItem>
                  <template #icon><IconMusicOutline /></template>
                  Профиль
                </SidebarSubItem>
                <SidebarSubItem selected>
                  <template #icon><IconBuildingBroadcastTowerOutline /></template>
                  Организация
                </SidebarSubItem>
              </SidebarSubList>
            </SidebarCollapsible>
          </SidebarGroup>
        </SidebarList>
      </Sidebar>
    `,
  }),
};

export const ScrollableNavigation: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarList,
      SidebarItem,
      SidebarGroup,
      SidebarCollapsible,
      SidebarSubList,
      SidebarSubItem,
      IconMusicOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
    },
    setup() {
      return {
        pages: Array.from({ length: 9 }, (_, index) => `Страница ${index + 1}`),
        settings: Array.from(
          { length: 6 },
          (_, index) => `Настройка ${index + 1}`,
        ),
      };
    },
    template: `
      <div style="height: 320px;">
        <Sidebar :width="300" minWidth="180px">
          <div style="display: flex; flex-direction: column; height: 100%;">
            <SidebarList scrollable style="flex: 1;">
              <SidebarGroup label="Основное">
                <SidebarItem v-for="page in pages" :key="page">
                  <template #left><IconMusicOutline /></template>
                  {{ page }}
                </SidebarItem>
              </SidebarGroup>
              <SidebarGroup label="Другое">
                <SidebarCollapsible label="Настройки" default-opened>
                  <template #icon><IconSettingsOutline /></template>
                  <SidebarSubList>
                    <SidebarSubItem v-for="setting in settings" :key="setting">
                      <template #icon><IconSettingsOutline /></template>
                      {{ setting }}
                    </SidebarSubItem>
                  </SidebarSubList>
                </SidebarCollapsible>
              </SidebarGroup>
            </SidebarList>
            <SidebarItem>
              <template #left><IconPlaylistOutline /></template>
              Footer остаётся на месте
            </SidebarItem>
          </div>
        </Sidebar>
      </div>
    `,
  }),
};

export const Floating: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarItem,
      SidebarList,
      Badge,
      IconMusicOutline,
      IconBuildingBroadcastTowerOutline,
      IconPlaylistOutline,
      IconSettingsOutline,
      IconInfoTriangleOutline,
    },
    template: `
      <div style="height: 100vh; background: hsl(var(--muted) / 0.35);">
        <Sidebar
          mode="floating"
          :compactWidth="80"
          :collapseThreshold="180"
          minWidth="80px"
        >
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
      </div>
    `,
  }),
};
