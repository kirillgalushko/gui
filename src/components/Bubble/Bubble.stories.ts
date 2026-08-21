import type { Meta, StoryObj } from "@storybook/vue3";
import Bubble from "./Bubble.vue";
import BubbleContent from "./BubbleContent.vue";
import BubbleGroup from "./BubbleGroup.vue";

const meta = {
  title: "Components/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  args: {
    mode: "default",
    align: "start",
    size: "medium",
  },
  argTypes: {
    mode: {
      control: { type: "select" },
      options: [
        "default",
        "contrast",
        "accent",
        "secondary",
        "ghost",
        "outlined",
        "negative",
        "positive",
        "danger",
        "warning",
      ],
    },
    align: {
      control: { type: "inline-radio" },
      options: ["start", "end"],
    },
    size: {
      control: { type: "select" },
      options: ["extra-small", "small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Bubble, BubbleContent },
    setup: () => ({ args }),
    template: `
      <Bubble v-bind="args">
        <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
      </Bubble>
    `,
  }),
};

export const Conversation: Story = {
  render: () => ({
    components: { Bubble, BubbleContent, BubbleGroup },
    template: `
      <div style="display: flex; width: min(100%, 560px); flex-direction: column; gap: var(--gap-4);">
        <BubbleGroup>
          <Bubble mode="secondary">
            <BubbleContent>Здравствуйте! Чем могу помочь?</BubbleContent>
          </Bubble>
          <Bubble mode="secondary">
            <BubbleContent>Могу подсказать по бронированию или оплате.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <BubbleGroup>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Нужна помощь с переносом дат.</BubbleContent>
          </Bubble>
          <Bubble mode="contrast" align="end">
            <BubbleContent>Заезд уже завтра.</BubbleContent>
          </Bubble>
        </BubbleGroup>
        <Bubble mode="ghost">
          <BubbleContent>
            Изменить даты можно до подтверждения бронирования. После этого напишите в поддержку.
          </BubbleContent>
        </Bubble>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Bubble, BubbleContent, BubbleGroup },
    template: `
      <BubbleGroup>
        <Bubble mode="secondary">
          <BubbleContent>Как вам помочь?</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="button" type="button">Перенести даты</BubbleContent>
        </Bubble>
        <Bubble mode="outlined" align="start">
          <BubbleContent as="a" href="#support">Написать в поддержку</BubbleContent>
        </Bubble>
      </BubbleGroup>
    `,
  }),
};
