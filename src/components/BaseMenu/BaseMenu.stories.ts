import { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import BaseMenu from "./BaseMenu.vue";
import BaseMenuCheckboxItem from "./BaseMenuCheckboxItem.vue";
import BaseMenuGroup from "./BaseMenuGroup.vue";
import BaseMenuItem from "./BaseMenuItem.vue";
import BaseMenuLabel from "./BaseMenuLabel.vue";
import BaseMenuRadioGroup from "./BaseMenuRadioGroup.vue";
import BaseMenuRadioItem from "./BaseMenuRadioItem.vue";
import BaseMenuSeparator from "./BaseMenuSeparator.vue";

import {
  IconPencilOutline,
  IconShareOutline,
  IconExternalLinkOutline,
  IconArchiveOutline,
} from "@gui/icons";

const meta: Meta<typeof BaseMenu> = {
  title: "Components/BaseMenu",
  component: BaseMenu,
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseMenu>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: {
      BaseMenu,
      BaseMenuCheckboxItem,
      BaseMenuGroup,
      BaseMenuItem,
      BaseMenuLabel,
      BaseMenuRadioGroup,
      BaseMenuRadioItem,
      BaseMenuSeparator,
      IconPencilOutline,
      IconShareOutline,
      IconExternalLinkOutline,
      IconArchiveOutline,
    },
    setup() {
      const statusBar = ref(true);
      const position = ref("bottom");

      return { args, statusBar, position };
    },
    template: `
      <BaseMenu v-bind="args">
        <BaseMenuGroup>
          <BaseMenuLabel>Действия</BaseMenuLabel>
          <BaseMenuItem><IconPencilOutline />Открыть</BaseMenuItem>
          <BaseMenuItem><IconExternalLinkOutline />Открыть в новой вкладке</BaseMenuItem>
          <BaseMenuItem showArrow><IconShareOutline />Поделиться</BaseMenuItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Отображение</BaseMenuLabel>
          <BaseMenuCheckboxItem v-model="statusBar">Строка состояния</BaseMenuCheckboxItem>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuLabel>Позиция</BaseMenuLabel>
          <BaseMenuRadioGroup v-model="position">
            <BaseMenuRadioItem value="top">Сверху</BaseMenuRadioItem>
            <BaseMenuRadioItem value="bottom">Снизу</BaseMenuRadioItem>
          </BaseMenuRadioGroup>
        </BaseMenuGroup>
        <BaseMenuSeparator />
        <BaseMenuGroup>
          <BaseMenuItem><IconArchiveOutline />Архивировать</BaseMenuItem>
        </BaseMenuGroup>
      </BaseMenu>`,
  }),
};
