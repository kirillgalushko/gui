<script setup lang="ts">
import { computed } from 'vue';
import Skeleton from './Skeleton.vue';

export type ButtonSkeletonSize = 'extra-small' | 'small' | 'medium' | 'large';

export interface ButtonSkeletonProps {
  loading?: boolean;
  size?: ButtonSkeletonSize;
  width?: string;
  stretched?: boolean;
  squared?: boolean;
  rounded?: boolean;
}

const props = withDefaults(defineProps<ButtonSkeletonProps>(), {
  size: 'large',
  width: '96px',
});

const buttonSizes: Record<ButtonSkeletonSize, { height: string; radius: string }> = {
  'extra-small': { height: '24px', radius: '8px' },
  small: { height: '32px', radius: '8px' },
  medium: { height: '36px', radius: '10px' },
  large: { height: '40px', radius: '10px' },
};

const skeletonWidth = computed(() => {
  if (props.stretched) {
    return '100%';
  }

  if (props.squared) {
    return buttonSizes[props.size].height;
  }

  return props.width;
});

const skeletonRadius = computed(() => (props.rounded ? '999px' : buttonSizes[props.size].radius));
</script>

<template>
  <Skeleton
    :loading="props.loading"
    :width="skeletonWidth"
    :height="buttonSizes[props.size].height"
    :radius="skeletonRadius"
  >
    <slot></slot>
  </Skeleton>
</template>
