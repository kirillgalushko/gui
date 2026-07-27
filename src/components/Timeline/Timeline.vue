<script setup lang="ts">
import { computed, provide } from "vue";
import {
  timelineContextKey,
  type TimelineDatePosition,
  type TimelineDirection,
  type TimelineOrientation,
  type TimelineStep,
} from "./types";

export interface TimelineProps {
  orientation?: TimelineOrientation;
  direction?: TimelineDirection;
  datePosition?: TimelineDatePosition;
  activeStep?: TimelineStep;
  railSize?: string;
}

const props = withDefaults(defineProps<TimelineProps>(), {
  orientation: "vertical",
  direction: "forward",
  datePosition: "top",
  railSize: "40px",
});

const styles = computed(() => ({
  "--timeline-rail-size": props.railSize,
}));

provide(timelineContextKey, {
  orientation: computed(() => props.orientation),
  direction: computed(() => props.direction),
  datePosition: computed(() => props.datePosition),
  activeStep: computed(() => props.activeStep),
});
</script>

<template>
  <div
    :class="['timeline', props.orientation, props.direction]"
    :style="styles"
    :data-orientation="props.orientation"
    :data-direction="props.direction"
    :data-date-position="props.datePosition"
    role="list"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  color: hsl(var(--foreground));
  font-family: var(--font-family);
}

.vertical {
  display: flex;
  flex-direction: column;
}

.vertical.reverse {
  flex-direction: column-reverse;
}

.horizontal {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
}

.horizontal.reverse {
  flex-direction: row-reverse;
}
</style>
