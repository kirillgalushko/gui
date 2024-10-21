import { Meta, StoryObj } from '@storybook/vue3';
import Tab from './Tab.vue';

const meta: Meta<typeof Tab> = {
  title: 'Example/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => ({
    components: { Tab },
    data() {
      return {
        selectedTab: 'tab1',
      };
    },
    template: `
      <div>
        <Tab :selected="selectedTab === 'tab1'" @click="selectedTab = 'tab1'">Tab 1</Tab>
        <Tab :selected="selectedTab === 'tab2'" @click="selectedTab = 'tab2'">Tab 2</Tab>
        <Tab :selected="selectedTab === 'tab3'" @click="selectedTab = 'tab3'">Tab 3</Tab>
      </div>
    `,
  }),
};
