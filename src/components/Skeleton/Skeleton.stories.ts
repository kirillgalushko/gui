import { Meta, StoryObj } from "@storybook/vue3";
import Skeleton from "./Skeleton.vue";
import SkeletonProvider from "./SkeletonProvider.vue";
import AvatarSkeleton from "./AvatarSkeleton.vue";
import ButtonSkeleton from "./ButtonSkeleton.vue";
import CardSkeleton from "./CardSkeleton.vue";
import FormSkeleton from "./FormSkeleton.vue";
import TextSkeleton from "./TextSkeleton.vue";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["!autodocs"],
  args: {
    width: "240px",
    height: "40px",
    radius: "10px",
    animated: true,
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args };
    },
    template: `<Skeleton v-bind="args" />`,
  }),
};

export const Presets: Story = {
  render: () => ({
    components: {
      AvatarSkeleton,
      ButtonSkeleton,
      CardSkeleton,
      FormSkeleton,
      TextSkeleton,
    },
    template: `
      <div style="display: grid; gap: var(--gap-6); max-width: 480px;">
        <div style="display: flex; align-items: center; gap: var(--gap-3);">
          <AvatarSkeleton />
          <TextSkeleton :lines="2" :width="['180px', '120px']" typography="label-2" />
        </div>
        <div style="display: flex; gap: var(--gap-2);">
          <ButtonSkeleton size="extra-small" />
          <ButtonSkeleton size="small" />
          <ButtonSkeleton size="medium" />
          <ButtonSkeleton size="large" />
        </div>
        <CardSkeleton />
        <FormSkeleton />
      </div>
    `,
  }),
};

export const Provider: Story = {
  args: {
    loading: false,
  },
  argTypes: {
    loading: {
      control: { type: "boolean" },
    },
  },
  render: (args) => ({
    components: { SkeletonProvider, TextSkeleton, ButtonSkeleton },
    setup() {
      return { args };
    },
    template: `
      <SkeletonProvider :loading="args.loading">
        <div style="display: grid; gap: var(--gap-3); max-width: 320px;">
          <TextSkeleton :lines="2">
            <p style="margin: 0; color: hsl(var(--foreground));">Контент отображается, когда loading выключен.</p>
          </TextSkeleton>
          <ButtonSkeleton>
            <button style="height: 40px; border-radius: 10px;">Готово</button>
          </ButtonSkeleton>
        </div>
      </SkeletonProvider>
    `,
  }),
};
