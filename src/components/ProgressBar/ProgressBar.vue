<script setup lang="ts">
import { computed, ref, watch } from 'vue';

export interface ProgressBarProps {
  progress?: number;
  max?: number;
  color?: string;
  segments?: number;
  height?: string;
  gap?: string;
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  progress: 0,
  max: 100,
  color: 'accent',
  segments: 1,
  height: '8px',
  gap: 'var(--gap-1)',
});

const progressTransitionMs = 450;
const normalizedMax = computed(() => Math.max(1, props.max));
const normalizedProgress = computed(() => Math.min(normalizedMax.value, Math.max(0, props.progress)));
const segmentCount = computed(() => Math.max(1, Math.floor(props.segments)));
const filledSegments = computed(() => (normalizedProgress.value / normalizedMax.value) * segmentCount.value);
const isIncreasing = ref(true);
const previousFilledSegments = ref(filledSegments.value);

watch(filledSegments, (currentFilledSegments, previousFilledSegmentsValue) => {
  isIncreasing.value = currentFilledSegments >= previousFilledSegmentsValue;
  previousFilledSegments.value = previousFilledSegmentsValue;
});

const progressColor = computed(() => {
  if (props.color.startsWith('--')) {
    return `hsl(var(${props.color}))`;
  }

  if (
    props.color.startsWith('#') ||
    props.color.startsWith('rgb') ||
    props.color.startsWith('hsl') ||
    props.color.startsWith('var(')
  ) {
    return props.color;
  }

  return `hsl(var(--${props.color}))`;
});

const getSegmentTransitionDelay = (index: number) => {
  const from = previousFilledSegments.value;
  const to = filledSegments.value;

  if (from === to) {
    return '0ms';
  }

  const start = Math.min(from, to);
  const end = Math.max(from, to);
  const segmentChanged = index < end && index + 1 > start;

  if (!segmentChanged) {
    return '0ms';
  }

  if (isIncreasing.value) {
    return `${Math.max(0, index - Math.floor(start)) * progressTransitionMs / segmentCount.value}ms`;
  }

  return `${Math.max(0, Math.ceil(end) - 1 - index) * progressTransitionMs / segmentCount.value}ms`;
};

const segmentsData = computed(() => {
  return Array.from({ length: segmentCount.value }, (_, index) => {
    const fill = Math.min(100, Math.max(0, (filledSegments.value - index) * 100));

    return {
      id: index,
      fill,
      transitionDuration: `${progressTransitionMs / segmentCount.value}ms`,
      transitionDelay: getSegmentTransitionDelay(index),
    };
  });
});
</script>

<template>
  <div class="progress-bar" role="progressbar" :aria-valuenow="normalizedProgress" aria-valuemin="0"
    :aria-valuemax="normalizedMax" :style="{
      '--progress-bar-color': progressColor,
      '--progress-bar-height': props.height,
      '--progress-bar-gap': props.gap,
    }">
    <div v-for="segment in segmentsData" :key="segment.id" class="progress-bar-segment">
      <div class="progress-bar-fill" :style="{
        width: `${segment.fill}%`,
        transitionDuration: `${segment.transitionDuration}, 0.25s`,
        transitionDelay: `${segment.transitionDelay}, 0s`,
      }"></div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  width: 100%;
  min-height: var(--progress-bar-height);
  height: var(--progress-bar-height);
  gap: var(--progress-bar-gap);
}

.progress-bar-segment {
  flex: 1;
  overflow: hidden;
  border-radius: 999px;
  background: hsl(var(--muted));
}

.progress-bar-fill {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: var(--progress-bar-color);
  transition-property: width, background;
  transition-timing-function: ease;
}
</style>
