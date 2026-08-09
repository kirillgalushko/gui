import { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownCheckboxItem from "./DropdownCheckboxItem.vue";
import DropdownGroup from "./DropdownGroup.vue";
import DropdownItem from "./DropdownItem.vue";
import DropdownLabel from "./DropdownLabel.vue";
import DropdownRadioGroup from "./DropdownRadioGroup.vue";
import DropdownRadioItem from "./DropdownRadioItem.vue";
import DropdownSeparator from "./DropdownSeparator.vue";
import DropdownSub from "./DropdownSub.vue";
import DropdownSubTrigger from "./DropdownSubTrigger.vue";
import Button from "../Button/Button.vue";
import {
  IconPencilOutline,
  IconExternalLinkOutline,
  IconShareOutline,
  IconCopyOutline,
  IconMailOutline,
  IconArchiveOutline,
} from "@gui/icons";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["!autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: {
      Dropdown,
      Button,
      DropdownCheckboxItem,
      DropdownGroup,
      DropdownItem,
      DropdownLabel,
      DropdownRadioGroup,
      DropdownRadioItem,
      DropdownSeparator,
      DropdownSub,
      DropdownSubTrigger,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline,
    },
    setup() {
      const statusBar = ref(true);
      const activityBar = ref(false);
      const position = ref("bottom");

      return { args, statusBar, activityBar, position };
    },
    template: `
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownGroup>
            <DropdownLabel>Действия</DropdownLabel>
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <DropdownSub>
              <DropdownSubTrigger><IconShareOutline />Поделиться</DropdownSubTrigger>
              <template #popper>
                <DropdownGroup>
                  <DropdownLabel>Поделиться</DropdownLabel>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownGroup>
              </template>
            </DropdownSub>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Отображение</DropdownLabel>
            <DropdownCheckboxItem v-model="statusBar">Строка состояния</DropdownCheckboxItem>
            <DropdownCheckboxItem v-model="activityBar">Панель активности</DropdownCheckboxItem>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownLabel>Позиция</DropdownLabel>
            <DropdownRadioGroup v-model="position">
              <DropdownRadioItem value="top">Сверху</DropdownRadioItem>
              <DropdownRadioItem value="bottom">Снизу</DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownGroup>
          <DropdownSeparator />
          <DropdownGroup>
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
          </DropdownGroup>
        </template>
      </Dropdown>`,
  }),
};
