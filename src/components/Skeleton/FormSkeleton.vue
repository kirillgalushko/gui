<script setup lang="ts">
import { computed } from "vue";
import Skeleton from "./Skeleton.vue";
import ButtonSkeleton from "./ButtonSkeleton.vue";
import { useSkeletonLoading } from "./context";

export interface FormSkeletonProps {
  loading?: boolean;
  fields?: number;
  button?: boolean;
}

const props = withDefaults(defineProps<FormSkeletonProps>(), {
  fields: 3,
  button: true,
});

const isLoading = useSkeletonLoading(() => props.loading);
const fieldIndexes = computed(() =>
  Array.from({ length: props.fields }, (_, index) => index),
);
</script>

<template>
  <div v-if="isLoading" class="form-skeleton" aria-hidden="true">
    <div v-for="index in fieldIndexes" :key="index" class="form-skeleton-field">
      <Skeleton width="96px" height="16px" radius="6px" />
      <Skeleton height="40px" radius="10px" />
    </div>
    <ButtonSkeleton v-if="props.button" width="128px" />
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.form-skeleton {
  display: grid;
  width: 100%;
  gap: var(--gap-4);
}

.form-skeleton-field {
  display: grid;
  gap: var(--gap-2);
  min-width: 0;
}
</style>
