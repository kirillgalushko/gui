import { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './Tabs.vue';

const meta: Meta<typeof Tabs> = {
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </Tabs>
    `,
  }),
};
