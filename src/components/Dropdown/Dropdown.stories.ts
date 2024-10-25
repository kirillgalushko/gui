import { Meta, StoryObj } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownList from './DropdownList.vue';
import DropdownSeparator from './DropdownSeparator.vue';
import Button from '../Button/Button.vue';
import Icon from '../Icon/Icon.vue'

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
    components: { Dropdown, Button, DropdownItem, DropdownList, DropdownSeparator, Icon },
    setup() {
      return { args };
    },
    template: `
      <Dropdown v-bind="args">
        <Button>Открыть Dropdown</Button>
        <template #popper>
          <DropdownList>
            <DropdownItem><Icon name="pencil" />Открыть</DropdownItem>
            <DropdownItem><Icon name="external-link" />Открыть в новой вкладке</DropdownItem>
            <Dropdown instant-move placement="right-start">
              <DropdownItem showArrow><Icon name="share" />Поделиться</DropdownItem>
              <template #popper>
                <DropdownList>
                  <DropdownItem><Icon name="copy" />Скопировать ссылку</DropdownItem>
                  <DropdownItem><Icon name="mail" />Отправить по почте</DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>
            <DropdownSeparator />
            <DropdownItem><Icon name="archive" />Архивировать</DropdownItem>
          </DropdownList>
        </template>
      </Dropdown>`,
  }),
};