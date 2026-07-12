<script setup lang="ts">
import { computed } from "vue";
import Skeleton from "./Skeleton.vue";
import AvatarSkeleton from "./AvatarSkeleton.vue";
import TextSkeleton from "./TextSkeleton.vue";
import { useSkeletonLoading } from "./context";
import type { BorderRadius, Padding } from "../../types";

export interface CardSkeletonProps {
  loading?: boolean;
  width?: string;
  padding?: Padding;
  borderRadius?: BorderRadius;
  withAvatar?: boolean;
}

const props = withDefaults(defineProps<CardSkeletonProps>(), {
  width: "320px",
  padding: 8,
  borderRadius: 16,
  withAvatar: true,
});

const isLoading = useSkeletonLoading(() => props.loading);

const styles = computed(() => ({
  width: props.width,
  padding: `${props.padding}px`,
  borderRadius: `${props.borderRadius}px`,
}));
</script>

<template>
  <div
    v-if="isLoading"
    class="card-skeleton"
    :style="styles"
    aria-hidden="true"
  >
    <div class="card-skeleton-header">
      <AvatarSkeleton v-if="props.withAvatar" />
      <TextSkeleton :lines="2" :width="['60%', '42%']" typography="label-2" />
    </div>
    <Skeleton height="120px" radius="12px" />
    <TextSkeleton :lines="3" last-line-width="64%" />
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.card-skeleton {
  display: inline-flex;
  max-width: 100%;
  flex-direction: column;
  gap: var(--gap-3);
  box-sizing: border-box;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
}

.card-skeleton-header {
  display: flex;
  align-items: center;
  gap: var(--gap-3);
  min-width: 0;
}
</style>
