<script setup lang="ts">
import { inject } from "vue";
import { attachmentContextKey } from "./context";
import type { AttachmentMediaVariant } from "./types";

export interface AttachmentMediaProps {
  variant?: AttachmentMediaVariant;
}

const props = withDefaults(defineProps<AttachmentMediaProps>(), {
  variant: "icon",
});
const attachment = inject(attachmentContextKey, null);
</script>

<template>
  <div
    :class="['attachment-media', props.variant, attachment?.orientation.value]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment-media {
  position: relative;
  display: flex;
  width: var(--attachment-media-size, 48px);
  height: var(--attachment-media-size, 48px);
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: calc(var(--attachment-radius, 14px) - 6px);
  overflow: hidden;
}

.icon {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  font-size: calc(var(--attachment-media-size, 48px) * 0.46);
}

.image {
  background: hsl(var(--muted));
}

.image :deep(img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.attachment-media.vertical {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: calc(var(--attachment-radius, 24px) - 8px);
}
</style>
