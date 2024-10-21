import { Meta, StoryObj } from '@storybook/vue3';
import Stack from './Stack.vue';

const meta: Meta<typeof Stack> = {
  title: 'Example/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => ({
    components: { Stack },
    template: `
      <Stack direction="column" gap="2">
        <div style="background-color: lightgrey; padding: 16px;">Элемент 1</div>
        <div style="background-color: lightblue; padding: 16px;">Элемент 2</div>
        <div style="background-color: lightgreen; padding: 16px;">Элемент 3</div>
      </Stack>
    `,
  }),
};

export const Row: Story = {
  render: () => ({
    components: { Stack },
    template: `
      <Stack direction="row" gap="3">
        <div style="background-color: lightgrey; padding: 16px;">Элемент 1</div>
        <div style="background-color: lightblue; padding: 16px;">Элемент 2</div>
        <div style="background-color: lightgreen; padding: 16px;">Элемент 3</div>
      </Stack>
    `,
  }),
};

export const FullHeight: Story = {
  render: () => ({
    components: { Stack },
    template: `
      <Stack direction="column" fullHeight>
        <div style="background-color: lightgrey; padding: 16px;">Элемент 1</div>
        <div style="background-color: lightblue; padding: 16px;">Элемент 2</div>
      </Stack>
    `,
  }),
};
