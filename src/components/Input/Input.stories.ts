import { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";
import { IconMenu2Outline, IconSearchOutline } from "@gui/icons";
import Stack from "../Stack/Stack.vue";
import type { ComponentSize } from "../../types";

type InputType = typeof Input | HTMLInputElement;

const meta: Meta<InputType> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
    },
    invalid: {
      type: "boolean",
    },
    size: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<InputType>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    value: "Value",
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" v-model="args.value" />',
  }),
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Placeholder",
    value: "Value",
  },
  render: (args) => ({
    components: { Input, IconSearchOutline },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args" v-model="args.value">
        <template #leftAdornment>
          <IconSearchOutline />
        </template>
      </Input>
    `,
  }),
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Placeholder",
    value: "Value",
  },
  render: (args) => ({
    components: { Input, IconMenu2Outline },
    setup() {
      return { args };
    },
    template: `
      <Input v-bind="args" v-model="args.value">
        <template #rightAdornment>
          <IconMenu2Outline />
        </template>
      </Input>
    `,
  }),
};

export const WithPostfix: Story = {
  args: {
    placeholder: "Стоимость",
    value: "12000",
    postfix: "₽",
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" v-model="args.value" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Input, Stack },
    setup() {
      const sizes: ComponentSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
      ];

      return { sizes };
    },
    template: `
      <Stack direction="column" :gap="3" stretched>
        <Input
          v-for="size in sizes"
          :key="size"
          :size="size"
          :placeholder="size"
          :model-value="size"
        />
      </Stack>
    `,
  }),
};

export const Invalid: Story = {
  args: {
    placeholder: "Placeholder",
    value: "Value",
    description: "Подсказка скрывается при ошибке",
    errorMessage: "Поле заполнено неверно",
    invalid: true,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" v-model="args.value" />',
  }),
};
