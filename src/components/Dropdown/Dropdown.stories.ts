import { Meta, StoryObj } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownList from './DropdownList.vue';
import DropdownSeparator from './DropdownSeparator.vue';
import Button from '../Button/Button.vue';
import { IconPencilOutline, IconExternalLinkOutline, IconShareOutline, IconCopyOutline, IconMailOutline, IconArchiveOutline } from '@gui/icons';

const meta: Meta<typeof Dropdown> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Dropdown, Button, DropdownItem, DropdownList, DropdownSeparator,
      IconExternalLinkOutline,
      IconPencilOutline,
      IconShareOutline,
      IconArchiveOutline,
      IconMailOutline,
      IconCopyOutline,
    },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><IconPencilOutline />Открыть</DropdownItem>
            <DropdownItem><IconExternalLinkOutline />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><IconShareOutline />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><IconCopyOutline />Скопировать ссылку</DropdownItem>
                  <DropdownItem><IconMailOutline />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><IconArchiveOutline />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>`,
  }),
};