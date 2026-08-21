import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Action from "../Action/Action.vue";
import EmojiPicker from "./EmojiPicker.vue";
import EmojiPickerDropdown from "./EmojiPickerDropdown.vue";

const meta: Meta<typeof EmojiPicker> = {
  title: "Components/EmojiPicker",
  component: EmojiPicker,
  tags: ["!autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    size: "large",
  },
};

export default meta;
type Story = StoryObj<typeof EmojiPicker>;

export const Default: Story = {
  render: (args) => ({
    components: { EmojiPicker },
    setup() {
      const selected = ref("");

      return { args, selected };
    },
    template: `
      <EmojiPicker v-bind="args" v-model="selected" />
      <p v-if="selected">Выбрано: {{ selected }}</p>
    `,
  }),
};

export const Dropdown: Story = {
  render: (args) => ({
    components: { Action, EmojiPickerDropdown },
    setup() {
      const selected = ref("");

      return { args, selected };
    },
    template: `
      <EmojiPickerDropdown v-bind="args" @select="selected = $event">
        <Action type="button" aria-label="Добавить эмодзи">🙂</Action>
      </EmojiPickerDropdown>
      <p v-if="selected">Выбрано: {{ selected }}</p>
    `,
  }),
};
