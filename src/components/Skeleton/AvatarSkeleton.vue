<script setup lang="ts">
import Skeleton from "./Skeleton.vue";

export interface AvatarSkeletonProps {
  loading?: boolean;
  size?: string;
  shape?: "square" | "circle";
}

const props = withDefaults(defineProps<AvatarSkeletonProps>(), {
  size: "40px",
  shape: "circle",
});
</script>

<template>
  <Skeleton
    :loading="props.loading"
    :width="props.size"
    :height="props.size"
    :radius="props.shape === 'square' ? `calc(${props.size} / 4)` : '999px'"
  >
    <slot></slot>
  </Skeleton>
</template>
