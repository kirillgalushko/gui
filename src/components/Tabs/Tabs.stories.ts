import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue'
import Card from '../Card/Card.vue'
import Text from '../Text/Text.vue'
import Gap from '../Gap/Gap.vue'
import Button from '../Button/Button.vue'
import Tabs from './Tabs.vue';
import Tab from './Tab.vue'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const getExample = (tabs: string, stretched: boolean) => `
  <Card ${stretched ? 'stretched' : ''} :padding="16" :borderRadius="12">
      ${tabs}
    <Gap direction="vertical" :default="4" />
    <Text typography="title-3">{{selectedTab}}</Text>
    <Text typography="paragraph-1" color="secondary">Total Revenue</Text>
    <Gap direction="vertical" :default="2" />
    <Text typography="title-2"><b>$223.89</b></Text>
    <Gap direction="vertical" :default="4" />
    <Button mode="accent" ${stretched ? 'stretched' : ''}>Button</Button>
  </Card>
`

export const Default: Story = {
  render: () => ({
    components: { Tabs, Tab, Card, Text, Gap, Button },
    setup() {
      const selectedTab = ref<string>('Notifications')
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab
      }
      return { selectedTab, handleChangeTab };
    },
    template: getExample(`<Tabs :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`, false),
  }),
};

export const Stretched: Story = {
  render: () => ({
    components: { Tabs, Tab, Card, Text, Gap, Button },
    setup() {
      const selectedTab = ref<string>('Notifications')
      const handleChangeTab = (newTab: string) => {
        selectedTab.value = newTab
      }
      return { selectedTab, handleChangeTab };
    },
    template: getExample(`<Tabs stretched :value="selectedTab" :onChange="handleChangeTab">
        <Tab name="Overview">Overview</Tab>
        <Tab name="Reports">Reports</Tab>
        <Tab name="Notifications">Notifications</Tab>
      </Tabs>`, true),
  }),
};
