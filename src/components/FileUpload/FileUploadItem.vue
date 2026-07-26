<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, watch } from "vue";
import {
  IconAlertSquareRoundedOutline,
  IconCheckOutline,
  IconClockOutline,
  IconFileOutline,
  IconLoader2Outline,
  IconRefreshOutline,
  IconXOutline,
} from "@gui/icons";
import ProgressBar from "../ProgressBar/ProgressBar.vue";
import Attachment from "../Attachment/Attachment.vue";
import AttachmentAction from "../Attachment/AttachmentAction.vue";
import AttachmentActions from "../Attachment/AttachmentActions.vue";
import AttachmentContent from "../Attachment/AttachmentContent.vue";
import AttachmentDescription from "../Attachment/AttachmentDescription.vue";
import AttachmentMedia from "../Attachment/AttachmentMedia.vue";
import AttachmentTitle from "../Attachment/AttachmentTitle.vue";
import type { AttachmentState } from "../Attachment/types";
import { fileUploadContextKey, fileUploadListContextKey } from "./context";
import { formatFileUploadSize } from "./fileUpload";

export interface FileUploadItemProps {
  disabled?: boolean;
  error?: string;
  file: File;
  progress?: number;
  removable?: boolean;
  onRetry?: () => void;
  state?: AttachmentState;
}

const props = withDefaults(defineProps<FileUploadItemProps>(), {
  disabled: false,
  error: undefined,
  progress: undefined,
  removable: true,
  onRetry: undefined,
  state: "idle",
});
const upload = inject(fileUploadContextKey);
const listOrientation = inject(
  fileUploadListContextKey,
  computed(() => "vertical" as const),
);

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
    :stretched="listOrientation !== 'horizontal'"
    :orientation="listOrientation === 'horizontal' ? 'vertical' : 'horizontal'"
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
        v-else-if="props.state === 'uploading'"
        class="file-upload-item-loader"
      />
      <IconAlertSquareRoundedOutline v-else-if="props.state === 'error'" />
      <IconCheckOutline v-else-if="props.state === 'done'" />
      <IconFileOutline v-else-if="props.state === 'processing'" />
      <IconClockOutline v-else />
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
    <AttachmentActions
      v-if="props.removable || (props.state === 'error' && props.onRetry)"
    >
      <AttachmentAction
        v-if="props.state === 'error' && props.onRetry"
        aria-label="Повторить загрузку"
        :disabled="props.disabled || upload.disabled.value"
        @click="props.onRetry"
      >
        <IconRefreshOutline />
      </AttachmentAction>
      <AttachmentAction
        v-if="props.removable"
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
