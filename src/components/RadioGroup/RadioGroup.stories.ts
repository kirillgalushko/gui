import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Field from "../Field/Field.vue";
import FieldDescription from "../Field/FieldDescription.vue";
import FieldLabel from "../Field/FieldLabel.vue";
import RadioGroup from "./RadioGroup.vue";
import RadioGroupItem from "./RadioGroupItem.vue";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    orientation: "vertical",
    mode: "default",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    mode: {
      control: "select",
      options: ["default", "card"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      const value = ref("comfortable");
      return { args, value };
    },
    template: `
      <RadioGroup v-model="value" v-bind="args">
        <RadioGroupItem value="default">
          Default
          <template #description>Стандартные настройки для большинства сценариев.</template>
        </RadioGroupItem>
        <RadioGroupItem value="comfortable">
          Comfortable
          <template #description>Больше пространства между элементами.</template>
        </RadioGroupItem>
        <RadioGroupItem value="compact">
          Compact
          <template #description>Минимальные отступы для плотных интерфейсов.</template>
        </RadioGroupItem>
      </RadioGroup>
    `,
  }),
};

export const ChoiceCards: Story = {
  args: {
    mode: "card",
    orientation: "horizontal",
    stretched: true,
  },
  render: (args) => ({
    components: {
      Field,
      FieldDescription,
      FieldLabel,
      RadioGroup,
      RadioGroupItem,
    },
    setup() {
      const value = ref("sms");
      return { args, value };
    },
    template: `
      <Field stretched>
        <FieldLabel>Куда отправить код</FieldLabel>
        <FieldDescription>Выберите доступный канал подтверждения.</FieldDescription>
        <RadioGroup v-model="value" v-bind="args">
          <RadioGroupItem value="sms">
            SMS
            <template #description>На номер +7 999 •••-••-00</template>
          </RadioGroupItem>
          <RadioGroupItem value="email">
            Email
            <template #description>На адрес g•••@example.ru</template>
          </RadioGroupItem>
        </RadioGroup>
      </Field>
    `,
  }),
};

export const Invalid: Story = {
  args: {
    mode: "card",
    invalid: true,
    stretched: true,
  },
  render: ChoiceCards.render,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Default.render,
};
