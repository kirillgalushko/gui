<script setup lang="ts">
import { inject } from "vue";
import Button from "../Button/Button.vue";
import { fileUploadContextKey } from "./context";

export interface FileUploadClearProps {
  label?: string;
}

const props = withDefaults(defineProps<FileUploadClearProps>(), {
  label: "Очистить",
});
const upload = inject(fileUploadContextKey);

if (upload === undefined) {
  throw new Error("FileUploadClear must be used inside FileUpload");
}
</script>

<template>
  <Button
    v-if="upload.files.value.length > 0"
    type="button"
    mode="ghost"
    size="small"
    :disabled="upload.disabled.value"
    @click="upload.clear"
  >
    <slot>{{ props.label }}</slot>
  </Button>
</template>
