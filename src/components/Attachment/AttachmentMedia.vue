<script setup lang="ts">
import type { AttachmentMediaVariant } from "./types";

export interface AttachmentMediaProps {
  variant?: AttachmentMediaVariant;
}

const props = withDefaults(defineProps<AttachmentMediaProps>(), {
  variant: "icon",
});
</script>

<template>
  <div :class="['attachment-media', props.variant]">
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
  border-radius: calc(var(--attachment-radius, 14px) - 4px);
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

:global(.attachment.vertical) .attachment-media {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
}
</style>
