import { Meta, StoryObj } from '@storybook/vue3';
import Icon from './Icon.vue';

// @ts-ignore import.meta.glob is provided by vite for dynamic import
const importIcons = import.meta.glob('../../assets/icons/*.svg', { eager: true });
const iconNames = Object.keys(importIcons).map(path => path.replace('../../assets/icons/', '').replace('.svg', ''));

const meta = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'text' },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'user-male',
    className: '',
    style: '',
  },
};

export const AllIcons = {
  render: () => ({
    components: { Icon },
    template: `
      <ul>
        ${iconNames.map((name) => 
          `<li style="display: flex; align-items: center; gap: 8px;" key="${name}">${name} <Icon name="${name}" /></li>`
        ).join('')}
      </ul>
    `,
  }),
};
