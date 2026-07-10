import type { Meta, StoryObj } from '@storybook/vue3';
import { IconChevronDownOutline } from '@gui/icons';

import Picker from './Picker.vue';

const meta = {
  title: 'Components/Picker',
  component: Picker,
  tags: ['autodocs'],
  argTypes: {
    stretched: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Picker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IconChevronDownOutline, Picker },
    setup() {
      return { args };
    },
    template: `
      <Picker v-bind="args">
        Выберите значение
        <template #icon>
          <IconChevronDownOutline />
        </template>
      </Picker>
    `,
  }),
};
