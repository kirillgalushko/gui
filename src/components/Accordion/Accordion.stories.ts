import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Accordion from "./Accordion.vue";
import AccordionContent from "./AccordionContent.vue";
import AccordionItem from "./AccordionItem.vue";
import AccordionTrigger from "./AccordionTrigger.vue";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    multiple: false,
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    multiple: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    },
    setup() {
      const value = ref(["delivery"]);
      return { args, value };
    },
    template: `
      <Accordion v-model="value" v-bind="args">
        <AccordionItem value="delivery">
          <AccordionTrigger>Какие варианты доставки доступны?</AccordionTrigger>
          <AccordionContent>
            Стандартная, экспресс-доставка и доставка на следующий день.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>Как оформить возврат?</AccordionTrigger>
          <AccordionContent>
            Создайте заявку на возврат в течение 14 дней после получения.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>Как связаться с поддержкой?</AccordionTrigger>
          <AccordionContent>
            Напишите в чат поддержки — мы отвечаем ежедневно.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
};

export const Multiple: Story = {
  ...Default,
  args: {
    multiple: true,
  },
};
