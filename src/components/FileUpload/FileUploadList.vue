<script setup lang="ts">
import { computed, inject, provide } from "vue";
import { fileUploadContextKey, fileUploadListContextKey } from "./context";
import type { FileUploadListOrientation } from "./types";

export interface FileUploadListProps {
  orientation?: FileUploadListOrientation;
}

const props = withDefaults(defineProps<FileUploadListProps>(), {
  orientation: "vertical",
});
const upload = inject(fileUploadContextKey);

if (upload === undefined) {
  throw new Error("FileUploadList must be used inside FileUpload");
}

const orientation = computed(() => props.orientation);
provide(fileUploadListContextKey, orientation);
</script>

<template>
  <div
    v-if="upload.files.value.length > 0"
    :class="['file-upload-list', orientation]"
    :data-orientation="orientation"
    role="list"
  >
    <slot :files="upload.files.value"></slot>
  </div>
</template>

<style scoped>
.file-upload-list {
  display: flex;
  width: 100%;
  gap: var(--gap-2);
}

.vertical {
  flex-direction: column;
}

.horizontal {
  flex-direction: row;
  overflow-x: auto;
  padding-bottom: var(--gap-1);
  scroll-snap-type: x proximity;
}

.horizontal :deep(.attachment) {
  flex: 0 0 auto;
  scroll-snap-align: start;
}
</style>
