<script setup lang="ts">
import { Gap } from '../../types';

export interface GapProps {
  direction: 'horizontal' | 'vertical'
  default: Gap
}

const props = defineProps<GapProps>()
</script>

<template>
  <div :class="['gap', props.direction, { [`gap-${props.default}`]: !!props.default }]"></div>
</template>

<style scoped>
.gap {
  display: inline-block;
}

.horizontal {
  height: 0;
  width: var(--gap-size);

}

.vertical {
  width: 0;
  height: var(--gap-size);
  display: block;
}

.gap-1 {
  --gap-size: var(--gap-1);
}

.gap-2 {
  --gap-size: var(--gap-2);
}

.gap-3 {
  --gap-size: var(--gap-3);
}

.gap-4 {
  --gap-size: var(--gap-4);
}

.gap-5 {
  --gap-size: var(--gap-5);
}

.gap-6 {
  --gap-size: var(--gap-6);
}
</style>