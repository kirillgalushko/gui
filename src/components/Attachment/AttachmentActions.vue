<script setup lang="ts">
import { inject } from "vue";
import { attachmentContextKey } from "./context";

const attachment = inject(attachmentContextKey, null);
</script>

<template>
  <div :class="['attachment-actions', attachment?.orientation.value]">
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment-actions {
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--gap-1);
  margin-left: auto;
}

.attachment-actions.vertical {
  position: absolute;
  top: calc(var(--attachment-padding) + var(--gap-1));
  right: calc(var(--attachment-padding) + var(--gap-1));
  margin-left: 0;
}

.attachment-actions.vertical :deep(.button) {
  background: hsl(var(--background) / 0.72);
  color: hsl(var(--foreground));
  backdrop-filter: blur(8px);
}
</style>
