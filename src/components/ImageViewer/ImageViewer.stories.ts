import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../Button/Button.vue";
import ImageViewer from "./ImageViewer.vue";
import type { ImageViewerItem } from "./types";

const images: ImageViewerItem[] = [
  {
    id: "one",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=160",
    title: "workspace.jpg",
    description: "Горизонтальное изображение",
  },
  {
    id: "two",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=160",
    title: "office.jpg",
    description: "Вертикальное изображение",
  },
  {
    id: "error",
    src: "/missing-image.jpg",
    title: "broken.jpg",
  },
];

const meta: Meta<typeof ImageViewer> = {
  title: "Components/ImageViewer",
  component: ImageViewer,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ImageViewer>;

export const Gallery: Story = {
  render: () => ({
    components: { Button, ImageViewer },
    setup() {
      const opened = ref(false);
      const activeIndex = ref(0);
      return { activeIndex, images, opened };
    },
    template: `
      <Button @click="opened = true">Открыть галерею</Button>
      <ImageViewer
        v-model:is-opened="opened"
        v-model:active-index="activeIndex"
        :images="images"
        show-thumbnails="auto"
      />
    `,
  }),
};
