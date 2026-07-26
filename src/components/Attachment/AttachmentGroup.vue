<script setup lang="ts">
import type { AttachmentOrientation } from "./types";

export interface AttachmentGroupProps {
  orientation?: AttachmentOrientation;
}

const props = withDefaults(defineProps<AttachmentGroupProps>(), {
  orientation: "vertical",
});
</script>

<template>
  <div
    :class="['attachment-group', props.orientation]"
    :data-orientation="props.orientation"
    role="list"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.attachment-group {
  display: flex;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  gap: var(--gap-2);
  box-sizing: border-box;
}

.vertical {
  flex-direction: column;
}

.horizontal {
  flex-direction: row;
  gap: var(--gap-6);
  overflow-x: auto;
  padding-bottom: var(--gap-1);
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
}

.horizontal :deep(.attachment) {
  flex: 0 0 auto;
  scroll-snap-align: start;
}
</style>
