<script setup lang="ts">
import { computed, inject, useAttrs } from "vue";
import type { ComponentSize } from "../../types";
import Button from "../Button/Button.vue";
import { attachmentContextKey } from "./context";

defineOptions({ inheritAttrs: false });

export interface AttachmentActionProps {
  disabled?: boolean;
  mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
  size?: ComponentSize;
}

const props = withDefaults(defineProps<AttachmentActionProps>(), {
  disabled: false,
  mode: "ghost",
  size: undefined,
});
const attrs = useAttrs();
const attachment = inject(attachmentContextKey, null);
const resolvedSize = computed<ComponentSize>(
  () =>
    props.size ??
    (attachment?.size.value === "large" || attachment?.size.value === "medium"
      ? "small"
      : "extra-small"),
);
</script>

<template>
  <Button
    v-bind="attrs"
    type="button"
    squared
    :mode="props.mode"
    :size="resolvedSize"
    :disabled="props.disabled"
  >
    <slot></slot>
  </Button>
</template>
