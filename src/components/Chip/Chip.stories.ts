import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Chip from './Chip.vue';
import ChipGroup from './ChipGroup.vue';
import Dot from '../Dot/Dot.vue';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/Chip',
  component: ChipGroup,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      type: 'boolean',
    },
  },
  args: {
    mode: 'single',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

const chips = [
  { value: 'phone', label: 'Телефон', color: 'slate' },
  { value: 'telegram', label: 'Telegram', color: 'sky' },
  { value: 'whatsapp', label: 'WhatsApp', color: 'green' },
  { value: 'avito', label: 'Авито', color: 'emerald' },
  { value: 'sutochno', label: 'Суточно.ру', color: 'orange' },
  { value: 'travel', label: 'Яндекс.Путешествия', color: 'amber' },
  { value: 'booking', label: 'Booking.com', color: 'blue' },
  { value: 'direct', label: 'Прямая', color: 'violet' },
] as const;

export const Single: Story = {
  render: (args) => ({
    components: { Chip, ChipGroup, Dot },
    setup() {
      const value = ref('phone');

      return { args, chips, value };
    },
    template: `
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `,
  }),
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
  },
  render: (args) => ({
    components: { Chip, ChipGroup, Dot },
    setup() {
      const value = ref(['telegram', 'whatsapp']);

      return { args, chips, value };
    },
    template: `
      <ChipGroup v-bind="args" v-model="value">
        <Chip v-for="chip in chips" :key="chip.value" :value="chip.value">
          <Dot :color="chip.color" />
          {{ chip.label }}
        </Chip>
      </ChipGroup>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Chip, ChipGroup },
    setup() {
      const smallValue = ref('one');
      const mediumValue = ref('one');
      const largeValue = ref('one');

      return { largeValue, mediumValue, smallValue };
    },
    template: `
      <div style="display: grid; gap: var(--gap-4);">
        <ChipGroup v-model="smallValue" size="small">
          <Chip value="one">Small</Chip>
          <Chip value="two">Small</Chip>
        </ChipGroup>
        <ChipGroup v-model="mediumValue" size="medium">
          <Chip value="one">Medium</Chip>
          <Chip value="two">Medium</Chip>
        </ChipGroup>
        <ChipGroup v-model="largeValue" size="large">
          <Chip value="one">Large</Chip>
          <Chip value="two">Large</Chip>
        </ChipGroup>
      </div>
    `,
  }),
};
