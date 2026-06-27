<script setup lang="ts">
import { computed } from 'vue';

export interface ProgressBarProps {
  progress?: number;
  color?: string;
  segments?: number;
  height?: string;
  gap?: string;
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  progress: 0,
  color: 'accent',
  segments: 1,
  height: '8px',
  gap: 'var(--gap-1)',
});

const normalizedProgress = computed(() => Math.min(100, Math.max(0, props.progress)));
const segmentCount = computed(() => Math.max(1, Math.floor(props.segments)));

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

  return `hsl(var(--progress-${props.color}, var(--${props.color})))`;
});

const segmentsData = computed(() => {
  const segmentSize = 100 / segmentCount.value;

  return Array.from({ length: segmentCount.value }, (_, index) => {
    const start = index * segmentSize;
    const fill = Math.min(100, Math.max(0, ((normalizedProgress.value - start) / segmentSize) * 100));

    return {
      id: index,
      fill,
    };
  });
});
</script>

<template>
  <div
    class="progress-bar"
    role="progressbar"
    :aria-valuenow="normalizedProgress"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="{
      '--progress-bar-color': progressColor,
      '--progress-bar-height': props.height,
      '--progress-bar-gap': props.gap,
    }"
  >
    <div v-for="segment in segmentsData" :key="segment.id" class="progress-bar-segment">
      <div class="progress-bar-fill" :style="{ width: `${segment.fill}%` }"></div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  width: 100%;
  height: var(--progress-bar-height);
  gap: var(--progress-bar-gap);
}

.progress-bar-segment {
  flex: 1;
  overflow: hidden;
  border-radius: 999px;
  background: hsl(var(--muted));
  box-shadow: inset 0 0 0 1px hsl(var(--border) / 0.5);
}

.progress-bar-fill {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background:
    linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.18), transparent),
    var(--progress-bar-color);
  background-size: 160% 100%, auto;
  box-shadow: 0 0 12px color-mix(in srgb, var(--progress-bar-color) 45%, transparent);
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, box-shadow 0.25s ease;
  animation: progress-shimmer 1.8s ease-in-out infinite;
}

@keyframes progress-shimmer {
  0% {
    background-position: 160% 0, 0 0;
  }

  100% {
    background-position: -160% 0, 0 0;
  }
}
</style>
