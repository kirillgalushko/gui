import { Meta, StoryObj } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownList from './DropdownList.vue';
import DropdownSeparator from './DropdownSeparator.vue';
import Button from '../Button/Button.vue';

import EditIcon from '@gui/icons/outline/pencil.js'
import LinkIcon from '@gui/icons/outline/external-link.js'
import ShareIcon from '@gui/icons/outline/share.js'
import CopyIcon from '@gui/icons/outline/copy.js'
import MailIcon from '@gui/icons/outline/mail.js'
import ArchiveIcon from '@gui/icons/outline/archive.js'

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
      LinkIcon,
      EditIcon,
      ShareIcon,
      ArchiveIcon,
      MailIcon,
      CopyIcon,
    },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><EditIcon />Открыть</DropdownItem>
            <DropdownItem><LinkIcon />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><ShareIcon />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><CopyIcon />Скопировать ссылку</DropdownItem>
                  <DropdownItem><MailIcon />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><ArchiveIcon />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>`,
  }),
};