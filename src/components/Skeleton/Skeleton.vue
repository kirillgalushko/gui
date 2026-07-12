<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useSkeletonLoading } from "./context";

export interface SkeletonProps {
  Element?: "div" | "span";
  loading?: boolean;
  animated?: boolean;
  width?: string;
  height?: string;
  radius?: string;
  circle?: boolean;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  Element: "div",
  animated: true,
  width: "100%",
  height: "20px",
  radius: "8px",
});

const slots = useSlots();
const isLoading = useSkeletonLoading(() => props.loading);

const styles = computed(() => ({
  "--skeleton-width": props.width,
  "--skeleton-height": props.height,
  "--skeleton-radius": props.circle ? "999px" : props.radius,
}));
</script>

<template>
  <component
    v-if="isLoading"
    v-bind="$attrs"
    :is="props.Element"
    :class="['skeleton', { animated: props.animated }]"
    :style="styles"
    aria-hidden="true"
  />
  <slot v-else-if="slots.default"></slot>
</template>

<style scoped>
.skeleton {
  display: block;
  width: var(--skeleton-width);
  height: var(--skeleton-height);
  min-width: 0;
  border-radius: var(--skeleton-radius);
  background-color: hsl(var(--skeleton));
  flex-shrink: 0;
  box-sizing: border-box;
}

.skeleton.animated {
  background-image: linear-gradient(
    110deg,
    hsl(var(--skeleton)) 0%,
    hsl(var(--skeleton)) 32%,
    color-mix(
        in oklab,
        hsl(var(--skeleton-highlight)) 36%,
        hsl(var(--skeleton))
      )
      50%,
    hsl(var(--skeleton)) 68%,
    hsl(var(--skeleton)) 100%
  );
  background-size: 300% 100%;
  animation: skeleton-shimmer 2s linear infinite;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 150% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton.animated {
    animation: none;
  }
}
</style>
