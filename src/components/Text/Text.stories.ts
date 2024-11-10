import { Meta, StoryObj } from '@storybook/vue3';
import Text from './Text.vue';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    typography: { control: 'select',
      options: [
        'title-1',
        'title-2',
        'title-3',
        'title-4',
        'subtitle-1',
        'subtitle-2',
        'subtitle-3',
        'subtitle-4',
        'label-1',
        'label-2',
        'paragraph-1',
        'paragraph-2'
      ]
    },
    Element: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'] },
    color: { control: 'select', options: ['default', 'inherit', 'secondary'] },
  }
};

const text = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЧЦШЩЬЪЫЭЮЯабвгдеёжзийклмнопрстуфхчцшщьъыэюя'

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    typography: 'paragraph-1',
    color: 'default',
    clamp: 2,
    ellipsis: true,
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args, text };
    },
    template: `<Text v-bind="args">{{text}}</Text>`,
  }),
};

export const Typography: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div>
        <Text typography="title-1">Заголовок</Text>
        <Text typography="subtitle-1">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-2">Заголовок</Text>
        <Text typography="subtitle-2">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-3">Заголовок</Text>
        <Text typography="subtitle-3">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <Text typography="subtitle-4">Подзаголовок</Text>
        <br /><br />
        <Text typography="title-4">Заголовок</Text>
        <Text typography="paragraph-1">Параграф c текстом, который просто демонстрирует как будет выглядеть текст</Text>
        <br /><br />
        <div style="display: flex; flex-direction: row; align-items: center; gap: 8px">
          <div style="width: 40px; height: 40px; background: white; border-radius: 100%" /> 
          <div>
            <Text typography="label-1">Иван Иванов</Text>
            <Text typography="label-2" color="secondary">Дизайнер интерьеров</Text>
          </div>
        </div>
      </div>
    `
  })
}

export const WithClamping: Story = {
  args: {
    typography: 'title-2',
    color: 'default',
    clamp: 2,
    ellipsis: true,
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `<Text v-bind="args">Это длинный абзац, который должен быть обрезан после определённого числа строк, демонстрируя функциональность обрезки текста в компоненте.</Text>`,
  }),
};
