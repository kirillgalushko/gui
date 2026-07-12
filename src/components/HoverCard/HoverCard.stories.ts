import type { Meta, StoryObj } from '@storybook/vue3';
import HoverCard from './HoverCard.vue';
import Button from '../Button/Button.vue';
import Text from '../Text/Text.vue';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => ({
    components: { Button, HoverCard, Text },
    template: `
      <HoverCard>
        <Button>Наведи курсор</Button>
        <template #content>
          <div style="width: 280px; padding: 16px;">
            <Text typography="title-2">Карточка объекта</Text>
            <Text color="secondary">Короткая дополнительная информация без клика.</Text>
          </div>
        </template>
      </HoverCard>
    `,
  }),
};
