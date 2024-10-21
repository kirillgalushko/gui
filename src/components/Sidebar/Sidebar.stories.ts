import { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';

const meta: Meta<typeof Sidebar> = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => ({
    components: { Sidebar },
    template: `
      <Sidebar>
        <div style="background-color: lightgrey; padding: 16px;">Содержимое боковой панели</div>
      </Sidebar>
    `,
  }),
};
