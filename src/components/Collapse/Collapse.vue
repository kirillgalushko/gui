<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

export interface CollapseProps {
  duration?: number;
  labelledBy?: string;
  opened: boolean;
}

const props = withDefaults(defineProps<CollapseProps>(), {
  duration: 240,
  labelledBy: undefined,
});

defineSlots<{
  default(): unknown;
}>();

const transitionStyle = computed(
  () =>
    ({
      "--collapse-duration": `${Math.max(0, props.duration)}ms`,
    }) as CSSProperties,
);
</script>

<template>
  <div
    class="collapse"
    :data-state="props.opened ? 'open' : 'closed'"
    :aria-hidden="!props.opened"
    :aria-labelledby="props.labelledBy"
    :inert="props.opened ? undefined : true"
    :style="transitionStyle"
  >
    <div class="collapse-clip">
      <div class="collapse-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapse {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition:
    grid-template-rows var(--collapse-duration) ease,
    visibility 0s linear var(--collapse-duration);
}

.collapse[data-state="open"] {
  grid-template-rows: 1fr;
  visibility: visible;
  transition:
    grid-template-rows var(--collapse-duration) ease,
    visibility 0s linear;
}

.collapse-clip {
  min-height: 0;
  overflow: hidden;
}

.collapse-content {
  opacity: 0;
  transform: translateY(-8px);
  transition:
    opacity calc(var(--collapse-duration) * 0.75) ease,
    transform var(--collapse-duration) ease;
}

.collapse[data-state="open"] .collapse-content {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .collapse,
  .collapse-content {
    transition: none;
  }
}
</style>
