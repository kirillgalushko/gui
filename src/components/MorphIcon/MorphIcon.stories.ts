import { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import MorphIcon from "./MorphIcon.vue";
import Button from "../Button/Button.vue";
import { IconHomeOutline, IconMailOutline, IconUserOutline } from "@gui/icons";

const meta: Meta<typeof MorphIcon> = {
  title: "Components/MorphIcon",
  component: MorphIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
    },
    from: {
      control: false,
    },
    to: {
      control: false,
    },
    reducedMotion: {
      control: "select",
      options: ["never", "user", "always"],
    },
    progress: {
      control: { type: "range", min: 0, max: 1, step: 0.01 },
    },
  },
  args: {
    size: 56,
    strokeWidth: 2,
  },
};

export default meta;
type Story = StoryObj<typeof MorphIcon>;

export const Uncontrolled: Story = {
  render: (args) => ({
    components: { Button, MorphIcon },
    setup() {
      const showUser = ref(false);
      const currentIcon = computed(() =>
        showUser.value ? IconUserOutline : IconHomeOutline,
      );

      return {
        args,
        Button,
        MorphIcon,
        currentIcon,
        showUser,
      };
    },
    template: `
      <div style="display: inline-grid; gap: var(--gap-3); justify-items: start;">
        <MorphIcon v-bind="args" :icon="currentIcon" />
        <Button size="small" @click="showUser = !showUser">
          {{ showUser ? 'Домой' : 'Профиль' }}
        </Button>
      </div>
    `,
  }),
};

export const Controlled: Story = {
  render: (args) => ({
    components: { MorphIcon },
    setup() {
      const progress = ref(0);

      return {
        args,
        IconHomeOutline,
        IconMailOutline,
        progress,
      };
    },
    template: `
      <div style="display: inline-grid; gap: var(--gap-3);">
        <MorphIcon
          v-bind="args"
          :from="IconHomeOutline"
          :to="IconMailOutline"
          :progress="progress"
        />
        <input type="range" min="0" max="1" step="0.01" v-model.number="progress" />
      </div>
    `,
  }),
};
