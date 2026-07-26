import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import FileUpload from "./FileUpload.vue";
import FileUploadClear from "./FileUploadClear.vue";
import FileUploadDropzone from "./FileUploadDropzone.vue";
import FileUploadItem from "./FileUploadItem.vue";
import FileUploadList from "./FileUploadList.vue";

const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  args: {
    accept: "image/*,.pdf",
    disabled: false,
    maxFiles: 3,
    maxSize: 10 * 1024 * 1024,
    multiple: true,
    orientation: "vertical",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (args) => ({
    components: {
      FileUpload,
      FileUploadClear,
      FileUploadDropzone,
      FileUploadItem,
      FileUploadList,
    },
    setup() {
      const files = ref<File[]>([]);
      return { args, files };
    },
    template: `
      <FileUpload v-model="files" v-bind="args">
        <FileUploadDropzone
          title="Перетащите файлы сюда"
          description="Изображения или PDF, не больше 10 МБ"
        />
        <FileUploadList v-slot="{ files: selectedFiles }">
          <FileUploadItem
            v-for="file in selectedFiles"
            :key="file.name"
            :file="file"
          />
        </FileUploadList>
        <FileUploadClear />
      </FileUpload>
    `,
  }),
};

export const Horizontal: Story = {
  ...Default,
  args: {
    ...Default.args,
    orientation: "horizontal",
  },
};
