import { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import Button from '../Button/Button.vue';
import Stack from '../Stack/Stack.vue';

const meta: Meta<typeof Sidebar> = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => ({
    components: { Sidebar, Button, Stack },
    template: `
      <Sidebar>
        <Stack stretched direction="column" :gap="3">
          <Button>Входящие</Button>
          <Button>Отправлено</Button>
          <Button>Черновики</Button>
        </Stack>
      </Sidebar>
    `,
  }),
};
