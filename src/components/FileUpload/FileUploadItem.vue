<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, watch } from "vue";
import { IconFileOutline, IconLoader2Outline, IconXOutline } from "@gui/icons";
import ProgressBar from "../ProgressBar/ProgressBar.vue";
import Attachment from "../Attachment/Attachment.vue";
import AttachmentAction from "../Attachment/AttachmentAction.vue";
import AttachmentActions from "../Attachment/AttachmentActions.vue";
import AttachmentContent from "../Attachment/AttachmentContent.vue";
import AttachmentDescription from "../Attachment/AttachmentDescription.vue";
import AttachmentMedia from "../Attachment/AttachmentMedia.vue";
import AttachmentTitle from "../Attachment/AttachmentTitle.vue";
import type { AttachmentState } from "../Attachment/types";
import { fileUploadContextKey } from "./context";
import { formatFileUploadSize } from "./fileUpload";

export interface FileUploadItemProps {
  disabled?: boolean;
  error?: string;
  file: File;
  progress?: number;
  removable?: boolean;
  state?: AttachmentState;
}

const props = withDefaults(defineProps<FileUploadItemProps>(), {
  disabled: false,
  error: undefined,
  progress: undefined,
  removable: true,
  state: "idle",
});
const upload = inject(fileUploadContextKey);

if (upload === undefined) {
  throw new Error("FileUploadItem must be used inside FileUpload");
}

const previewUrl = ref<string | null>(null);
const isImage = computed(() => props.file.type.startsWith("image/"));
const description = computed(() => {
  if (props.error !== undefined) return props.error;
  if (props.state === "uploading")
    return props.progress === undefined
      ? "Загрузка"
      : `Загрузка · ${Math.round(props.progress)}%`;
  if (props.state === "processing") return "Обработка файла";
  if (props.state === "done")
    return `Загружен · ${formatFileUploadSize(props.file.size)}`;
  return `${props.file.type || "Файл"} · ${formatFileUploadSize(props.file.size)}`;
});

const revokePreview = () => {
  if (previewUrl.value !== null) {
    URL.revokeObjectURL(previewUrl.value);
    previewUrl.value = null;
  }
};

watch(
  () => props.file,
  (file) => {
    revokePreview();
    if (file.type.startsWith("image/")) {
      previewUrl.value = URL.createObjectURL(file);
    }
  },
  { immediate: true },
);

onBeforeUnmount(revokePreview);
</script>

<template>
  <Attachment
    stretched
    :orientation="upload.orientation.value"
    :size="upload.size.value"
    :state="props.error === undefined ? props.state : 'error'"
    role="listitem"
  >
    <AttachmentMedia :variant="isImage ? 'image' : 'icon'">
      <img
        v-if="isImage && previewUrl"
        :src="previewUrl"
        :alt="props.file.name"
      />
      <IconLoader2Outline
        v-else-if="props.state === 'uploading' || props.state === 'processing'"
        class="file-upload-item-loader"
      />
      <IconFileOutline v-else />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>{{ props.file.name }}</AttachmentTitle>
      <AttachmentDescription>{{ description }}</AttachmentDescription>
      <ProgressBar
        v-if="props.state === 'uploading' && props.progress !== undefined"
        :progress="props.progress"
        :max="100"
        height="3px"
      />
    </AttachmentContent>
    <AttachmentActions v-if="props.removable">
      <AttachmentAction
        aria-label="Удалить файл"
        :disabled="props.disabled || upload.disabled.value"
        @click="upload.remove(props.file)"
      >
        <IconXOutline />
      </AttachmentAction>
    </AttachmentActions>
  </Attachment>
</template>

<style scoped>
.file-upload-item-loader {
  animation: file-upload-item-spin 1s linear infinite;
}

@keyframes file-upload-item-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .file-upload-item-loader {
    animation: none;
  }
}
</style>
