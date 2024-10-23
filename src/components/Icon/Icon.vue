<script setup lang="ts">
import { computed } from 'vue';

export interface IconProps {
  name: string;
  className?: string;
  style?: string;
  variant?: 'filled' | 'outline';
}

const props = withDefaults(defineProps<IconProps>(), { variant: 'outline' });

const iconHref = computed(() => `#icon-${props.variant}-${props.name}`);
</script>

<template>
  <svg :class="className" :style="style" aria-hidden="true" focusable="false">
    <use :href="iconHref"></use>
  </svg>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
