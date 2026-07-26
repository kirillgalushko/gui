<script setup lang="ts">
import { computed, inject } from "vue";
import { IconUploadOutline } from "@gui/icons";
import type { ComponentSize } from "../../types";
import Button from "../Button/Button.vue";
import { fileUploadContextKey } from "./context";

export interface FileUploadTriggerProps {
  label?: string;
  mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
  size?: ComponentSize;
  stretched?: boolean;
}

const props = withDefaults(defineProps<FileUploadTriggerProps>(), {
  label: "Выбрать файлы",
  mode: "default",
  size: undefined,
  stretched: false,
});
const upload = inject(fileUploadContextKey);

if (upload === undefined) {
  throw new Error("FileUploadTrigger must be used inside FileUpload");
}

const resolvedSize = computed(() => props.size ?? upload.size.value);
</script>

<template>
  <Button
    type="button"
    :mode="props.mode"
    :size="resolvedSize"
    :stretched="props.stretched"
    :disabled="upload.disabled.value"
    @click.stop="upload.open"
  >
    <IconUploadOutline />
    <slot>{{ props.label }}</slot>
  </Button>
</template>
