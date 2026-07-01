<script setup lang="ts">
import { computed } from 'vue';
import type { Gap } from '../../types';

export interface GapProps {
  direction?: 'horizontal' | 'vertical';
  size?: Gap;
  default?: Gap;
}

const props = defineProps<GapProps>()
const direction = computed(() => props.direction ?? 'vertical')
const gap = computed(() => props.size ?? props.default ?? 1)
</script>

<template>
  <div
    aria-hidden="true"
    :class="['gap', direction]"
    :style="{ '--gap-size': `var(--gap-${gap})` }"
  ></div>
</template>

<style scoped>
.gap {
  display: inline-block;
  flex-shrink: 0;
}

.horizontal {
  width: var(--gap-size);
}

.vertical {
  width: 100%;
  height: var(--gap-size);
  display: block;
}
</style>
