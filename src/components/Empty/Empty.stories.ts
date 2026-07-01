import type { Meta, StoryObj } from '@storybook/vue3';
import { IconArchiveOutline } from '@gui/icons';
import Button from '../Button/Button.vue';
import Empty from './Empty.vue';
import EmptyContent from './EmptyContent.vue';
import EmptyDescription from './EmptyDescription.vue';
import EmptyHeader from './EmptyHeader.vue';
import EmptyMedia from './EmptyMedia.vue';
import EmptyTitle from './EmptyTitle.vue';

const meta = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Button,
      Empty,
      EmptyContent,
      EmptyDescription,
      EmptyHeader,
      EmptyMedia,
      EmptyTitle,
      IconArchiveOutline,
    },
    template: `
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconArchiveOutline />
          </EmptyMedia>
          <EmptyTitle>Нет данных</EmptyTitle>
          <EmptyDescription>Здесь появятся элементы после добавления.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="small">Добавить</Button>
        </EmptyContent>
      </Empty>
    `,
  }),
};
