<script setup lang="ts">
import { computed, inject, provide } from "vue";
import {
  timelineContextKey,
  timelineItemContextKey,
  type TimelineItemState,
  type TimelineStep,
} from "./types";

export interface TimelineItemProps {
  step?: TimelineStep;
  state?: TimelineItemState;
}

const props = defineProps<TimelineItemProps>();
const timeline = inject(timelineContextKey);

if (!timeline) {
  throw new Error("TimelineItem must be used inside Timeline");
}

const state = computed<TimelineItemState>(() => {
  if (props.state) {
    return props.state;
  }

  const activeStep = timeline.activeStep.value;

  if (activeStep === undefined || props.step === undefined) {
    return "default";
  }

  if (props.step === activeStep) {
    return "current";
  }

  if (typeof props.step === "number" && typeof activeStep === "number") {
    return props.step < activeStep ? "completed" : "pending";
  }

  return "default";
});

provide(timelineItemContextKey, { state });
</script>

<template>
  <div
    :class="[
      'timeline-item',
      timeline.orientation.value,
      timeline.direction.value,
      `date-${timeline.datePosition.value}`,
    ]"
    :data-orientation="timeline.orientation.value"
    :data-direction="timeline.direction.value"
    :data-date-position="timeline.datePosition.value"
    :data-state="state"
    :data-step="props.step"
    :aria-current="state === 'current' ? 'step' : undefined"
    role="listitem"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  min-width: 0;
  box-sizing: border-box;
  scroll-snap-align: start;
}

.vertical {
  display: grid;
  grid-template-columns: var(--timeline-rail-size) minmax(0, 1fr);
  column-gap: var(--gap-3);
  padding-bottom: var(--gap-6);
}

.vertical.date-top {
  grid-template-areas:
    "rail date"
    "rail header"
    "rail content";
}

.vertical.date-side {
  grid-template-columns:
    var(--timeline-rail-size) minmax(0, 1fr)
    max-content;
  grid-template-areas:
    "rail header date"
    "rail content date";
}

.horizontal {
  display: grid;
  flex: 1 0 min(220px, 82vw);
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "date"
    "rail"
    "header"
    "content";
  grid-template-rows: auto var(--timeline-rail-size) auto 1fr;
  padding-right: var(--gap-6);
}

.horizontal.date-side {
  grid-template-columns: minmax(0, 1fr) max-content;
  grid-template-areas:
    "rail rail"
    "header date"
    "content date";
  grid-template-rows: var(--timeline-rail-size) auto 1fr;
}

.forward.timeline-item:last-child,
.reverse.timeline-item:first-child {
  padding-right: 0;
  padding-bottom: 0;
}

.forward.timeline-item:last-child :deep(.timeline-separator),
.reverse.timeline-item:first-child :deep(.timeline-separator) {
  display: none;
}

.date-side :deep(.timeline-date) {
  margin-left: var(--gap-4);
  text-align: right;
}
</style>
