import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { IconRefreshOutline, IconRotateClockwiseOutline } from "@gui/icons";
import avatarExample from "../../assets/images/avatar-example.png";
import AdaptiveModal from "../AdaptiveModal/AdaptiveModal.vue";
import Button from "../Button/Button.vue";
import Stack from "../Stack/Stack.vue";
import ImageCrop from "./ImageCrop.vue";

const meta: Meta<typeof ImageCrop> = {
  title: "Components/ImageCrop",
  component: ImageCrop,
  tags: ["autodocs"],
  args: {
    source: avatarExample,
  },
};
export default meta;
type Story = StoryObj<typeof ImageCrop>;

export const InlineWithExternalControls: Story = {
  render: (args) => ({
    components: {
      Button,
      IconRefreshOutline,
      IconRotateClockwiseOutline,
      ImageCrop,
      Stack,
    },
    setup() {
      const crop = ref<InstanceType<typeof ImageCrop>>();
      return { args, crop };
    },
    template: `
      <Stack direction="column" stretched :gap="3" max-width="760px">
        <ImageCrop ref="crop" v-bind="args" />
        <Stack direction="row" :gap="2" wrap>
          <Button squared aria-label="Повернуть" @click="crop?.rotateClockwise()"><IconRotateClockwiseOutline /></Button>
          <Button squared aria-label="Сбросить" @click="crop?.reset()"><IconRefreshOutline /></Button>
        </Stack>
      </Stack>
    `,
  }),
};

export const Portrait: Story = {
  args: {
    aspectRatio: 4 / 5,
    cropArea: 0.72,
    height: "560px",
  },
};

export const FreeAspectRatio: Story = {
  args: {
    lockAspectRatio: false,
    cropArea: 0.68,
    minCropSize: 72,
    height: "520px",
  },
};

export const CircularAvatarInAdaptiveModal: Story = {
  render: (args) => ({
    components: { AdaptiveModal, Button, ImageCrop },
    setup() {
      const opened = ref(false);
      return { args, opened };
    },
    template: `
      <Button @click="opened = true">Настроить аватар</Button>
      <AdaptiveModal
        :isOpened="opened"
        :onClose="() => opened = false"
        title="Настройте фотографию"
        showCloseButton
        :modal-props="{ size: 'large' }"
      >
        <ImageCrop v-bind="args" shape="circle" :output-width="512" />
        <template #footer>
          <Button mode="ghost" @click="opened = false">Отмена</Button>
          <Button mode="contrast" @click="opened = false">Сохранить</Button>
        </template>
      </AdaptiveModal>
    `,
  }),
};
