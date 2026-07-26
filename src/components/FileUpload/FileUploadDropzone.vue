<script setup lang="ts">
import { inject } from "vue";
import { IconFileUploadOutline } from "@gui/icons";
import Stack from "../Stack/Stack.vue";
import Text from "../Text/Text.vue";
import { fileUploadContextKey } from "./context";
import FileUploadTrigger from "./FileUploadTrigger.vue";

export interface FileUploadDropzoneProps {
  description?: string;
  title?: string;
  triggerLabel?: string;
}

const props = withDefaults(defineProps<FileUploadDropzoneProps>(), {
  description: "Или выберите файлы с устройства",
  title: "Перетащите файлы сюда",
  triggerLabel: "Выбрать файлы",
});
const upload = inject(fileUploadContextKey);

if (upload === undefined) {
  throw new Error("FileUploadDropzone must be used inside FileUpload");
}

const handleDragOver = (event: DragEvent) => {
  if (!upload.disabled.value && event.dataTransfer?.types.includes("Files")) {
    event.preventDefault();
    upload.isDragging.value = true;
  }
};

const handleDragLeave = (event: DragEvent) => {
  if (
    event.relatedTarget === null ||
    !(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)
  ) {
    upload.isDragging.value = false;
  }
};

const handleDrop = (event: DragEvent) => {
  if (upload.disabled.value) {
    return;
  }

  event.preventDefault();
  upload.isDragging.value = false;
  upload.addFiles(Array.from(event.dataTransfer?.files ?? []));
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    upload.open();
  }
};
</script>

<template>
  <div
    class="file-upload-dropzone"
    role="button"
    :tabindex="upload.disabled.value ? -1 : 0"
    :aria-disabled="upload.disabled.value"
    :data-disabled="upload.disabled.value || undefined"
    :data-dragging="upload.isDragging.value || undefined"
    :data-invalid="upload.invalid.value || undefined"
    @click="upload.open"
    @keydown="handleKeydown"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <slot>
      <Stack direction="column" align-items="center" :gap="2">
        <div class="file-upload-dropzone-icon" aria-hidden="true">
          <IconFileUploadOutline />
        </div>
        <Stack direction="column" align-items="center" :gap="1">
          <Text typography="label-2" text-align="center">{{
            props.title
          }}</Text>
          <Text color="secondary" text-align="center">{{
            props.description
          }}</Text>
        </Stack>
        <FileUploadTrigger :label="props.triggerLabel" size="small" />
      </Stack>
    </slot>
  </div>
</template>

<style scoped>
.file-upload-dropzone {
  display: flex;
  width: 100%;
  min-height: 168px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--gap-6);
  border: 1px dashed hsl(var(--border));
  border-radius: 14px;
  background: hsl(var(--card) / 0.55);
  color: hsl(var(--foreground));
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    scale 0.2s ease;
}

.file-upload-dropzone:hover,
.file-upload-dropzone:focus-visible,
.file-upload-dropzone[data-dragging] {
  border-color: hsl(var(--accent));
  background: hsl(var(--accent) / 0.07);
  outline: 0;
}

.file-upload-dropzone[data-dragging] {
  scale: 0.995;
}

.file-upload-dropzone[data-invalid] {
  border-color: hsl(var(--negative));
  background: hsl(var(--negative) / 0.06);
}

.file-upload-dropzone[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.file-upload-dropzone-icon {
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  font-size: 22px;
}

@media (prefers-reduced-motion: reduce) {
  .file-upload-dropzone {
    transition: none;
  }
}
</style>
