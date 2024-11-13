import { Meta, StoryObj } from '@storybook/vue3';
import Avatar from './Avatar.vue';
import { IconUserOutline } from '@gui/icons';
import avatarExample from '../../assets/images/avatar-example.png'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['square', 'circle']
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outlined']
    },
    size: {
      control: { type: 'text' },
    },
  },
  args: {
    size: '60px',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
  },
  render: (args) => ({
    components: { Avatar, IconUserOutline },
    setup() {
      return { args, avatarExample };
    },
    template: `
    <Avatar :src="avatarExample" v-bind="args" />`,
  }),
};

export const WithIcon: Story = {
  args: {
  },
  render: (args) => ({
    components: { Avatar, IconUserOutline },
    setup() {
      return { args, avatarExample };
    },
    template: `
    <Avatar v-bind="args">
      <IconUserOutline />
    </Avatar>`,
  }),
};