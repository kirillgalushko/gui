import type { Meta, StoryObj } from "@storybook/vue3";
import { IconInfoCircleOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import AnnouncementBar from "./AnnouncementBar.vue";

const meta = {
  title: "Components/AnnouncementBar",
  component: AnnouncementBar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: [
        "default",
        "contrast",
        "accent",
        "positive",
        "warning",
        "negative",
      ],
    },
    size: { control: "select", options: ["small", "medium"] },
    role: { control: "select", options: ["status", "alert"] },
  },
  args: { mode: "default", size: "small", role: "status" },
} satisfies Meta<typeof AnnouncementBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DemoMode: Story = {
  args: { mode: "contrast" },
  render: (args) => ({
    components: { AnnouncementBar, Button, IconInfoCircleOutline },
    setup: () => ({ args }),
    template: `
      <AnnouncementBar v-bind="args">
        <template #icon><IconInfoCircleOutline /></template>
        Сейчас открыт демо-режим
        <template #actions>
          <Button mode="contrast" size="small">Начать пользоваться</Button>
          <Button mode="ghost" size="small">Выйти</Button>
        </template>
      </AnnouncementBar>
    `,
  }),
};

export const Warning: Story = {
  args: { mode: "warning" },
  render: (args) => ({
    components: { AnnouncementBar },
    setup: () => ({ args }),
    template: `<AnnouncementBar v-bind="args">Запланированы технические работы</AnnouncementBar>`,
  }),
};

export const CustomColors: Story = {
  args: {
    backgroundColor: "#f1f5f9",
    textColor: "#0f172a",
    borderColor: "#cbd5e1",
  },
  render: (args) => ({
    components: { AnnouncementBar },
    setup: () => ({ args }),
    template: `<AnnouncementBar v-bind="args">Объявление с собственными цветами</AnnouncementBar>`,
  }),
};
