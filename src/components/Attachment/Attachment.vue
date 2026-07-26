<script setup lang="ts">
import { computed, provide } from "vue";
import { attachmentContextKey } from "./context";
import type {
  AttachmentOrientation,
  AttachmentSize,
  AttachmentState,
} from "./types";

export interface AttachmentProps {
  orientation?: AttachmentOrientation;
  size?: AttachmentSize;
  state?: AttachmentState;
  stretched?: boolean;
}

const props = withDefaults(defineProps<AttachmentProps>(), {
  orientation: "horizontal",
  size: "medium",
  state: "done",
  stretched: false,
});

provide(attachmentContextKey, {
  orientation: computed(() => props.orientation),
  size: computed(() => props.size),
  state: computed(() => props.state),
});
</script>

<template>
  <div
    :class="[
      'attachment',
      props.size,
      props.orientation,
      { stretched: props.stretched },
    ]"
    :data-orientation="props.orientation"
    :data-size="props.size"
    :data-state="props.state"
    :aria-busy="props.state === 'uploading' || props.state === 'processing'"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment {
  --attachment-gap: var(--gap-3);
  --attachment-padding: var(--gap-3);
  --attachment-radius: 14px;
  --attachment-media-size: 48px;

  position: relative;
  display: flex;
  max-width: 100%;
  min-width: 0;
  align-items: center;
  gap: var(--attachment-gap);
  box-sizing: border-box;
  padding: var(--attachment-padding);
  border: 1px solid hsl(var(--border));
  border-radius: var(--attachment-radius);
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  font-family: var(--font-family);
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.large {
  --attachment-gap: var(--gap-4);
  --attachment-padding: var(--gap-4);
  --attachment-radius: 16px;
  --attachment-media-size: 56px;
}

.small {
  --attachment-gap: var(--gap-2);
  --attachment-padding: var(--gap-2);
  --attachment-radius: 12px;
  --attachment-media-size: 40px;
}

.extra-small {
  --attachment-gap: var(--gap-2);
  --attachment-padding: var(--gap-1);
  --attachment-radius: 10px;
  --attachment-media-size: 32px;
}

.horizontal {
  width: auto;
}

.vertical {
  width: 184px;
  flex-direction: column;
  align-items: stretch;
}

.vertical.large {
  width: 224px;
}

.vertical.small {
  width: 152px;
}

.vertical.extra-small {
  width: 120px;
}

.stretched {
  width: 100%;
}

.attachment[data-state="error"] {
  border-color: hsl(var(--negative) / 0.65);
  background: hsl(var(--negative) / 0.06);
}

.attachment[data-state="uploading"],
.attachment[data-state="processing"] {
  border-color: hsl(var(--accent) / 0.45);
}

.attachment[data-state="uploading"] :deep(.attachment-title),
.attachment[data-state="processing"] :deep(.attachment-title) {
  background: linear-gradient(
    90deg,
    hsl(var(--foreground)) 25%,
    hsl(var(--muted-foreground)) 50%,
    hsl(var(--foreground)) 75%
  );
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  animation: attachment-shimmer 1.6s linear infinite;
}

@keyframes attachment-shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .attachment,
  .attachment :deep(.attachment-title) {
    transition: none;
    animation: none;
  }
}
</style>
