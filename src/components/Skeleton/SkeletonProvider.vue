<script setup lang="ts">
import { provideSkeletonLoading } from "./context";

export interface SkeletonProviderProps {
  loading?: boolean;
}

const props = withDefaults(defineProps<SkeletonProviderProps>(), {
  loading: true,
});

const loading = provideSkeletonLoading(() => props.loading);
</script>

<template>
  <slot :loading="loading"></slot>
</template>
