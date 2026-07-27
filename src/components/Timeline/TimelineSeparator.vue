<script setup lang="ts">
import { inject } from "vue";
import { timelineContextKey, timelineItemContextKey } from "./types";

export interface TimelineSeparatorProps {
  dashed?: boolean;
}

const props = withDefaults(defineProps<TimelineSeparatorProps>(), {
  dashed: false,
});
const timeline = inject(timelineContextKey);
const item = inject(timelineItemContextKey);

if (!timeline || !item) {
  throw new Error("TimelineSeparator must be used inside TimelineItem");
}
</script>

<template>
  <span
    :class="[
      'timeline-separator',
      timeline.orientation.value,
      { dashed: props.dashed },
    ]"
    aria-hidden="true"
  ></span>
</template>

<style scoped>
.timeline-separator {
  grid-area: rail;
  z-index: 0;
  box-sizing: border-box;
}

.vertical {
  align-self: stretch;
  justify-self: center;
  width: 2px;
  margin-top: calc(var(--timeline-rail-size) / 2);
  margin-bottom: calc((var(--timeline-rail-size) / -2) - var(--gap-6));
  border-left: 2px solid hsl(var(--border));
}

.horizontal {
  align-self: center;
  justify-self: stretch;
  height: 2px;
  margin-right: calc((var(--timeline-rail-size) / -2) - var(--gap-6));
  margin-left: calc(var(--timeline-rail-size) / 2);
  border-top: 2px solid hsl(var(--border));
}

.vertical.dashed {
  border-left-style: dashed;
}

.horizontal.dashed {
  border-top-style: dashed;
}
</style>
