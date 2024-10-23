import { Meta, StoryObj } from '@storybook/vue3';
import Icon from './Icon.vue';

 // @ts-ignore import.meta.glob is provided by Vite for dynamic import
const importIcons = import.meta.glob('../../assets/icons/**/*.svg', { eager: true });
const allImportedIcons = Object.keys(importIcons).map(path => {
  const name = path.split('/').pop()?.replace('.svg', '') || '';
  const variant = path.includes('/filled/') ? 'filled' : 'outline';
  return { name, variant };
});
const allIcons = allImportedIcons.sort((a, b) => a.name.localeCompare(b.name));

const meta = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'text' },
    variant: { control: 'select', options: ['filled', 'outline'] }
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'user',
    className: '',
    style: 'width: 100px; height: 100px; color: #777;',
    variant: 'filled',
  },
};

export const AllIcons = {
  render: () => ({
    components: { Icon },
    template: `
      <ul>
        ${allIcons.map(({ name, variant }) => 
          `<li style="display: flex; align-items: center; gap: 8px;" key="${name}${variant}">
              ${name} (${variant}) <Icon name="${name}" variant="${variant}" style="height: 24px; width: 24px;" />
          </li>`
        ).join('')}
      </ul>
    `,
  }),
};
