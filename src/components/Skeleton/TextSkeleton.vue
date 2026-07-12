<script setup lang="ts">
import { computed } from "vue";
import Skeleton from "./Skeleton.vue";
import { useSkeletonLoading } from "./context";
import type { Typography } from "../Text/types";

export interface TextSkeletonProps {
  loading?: boolean;
  lines?: number;
  width?: string | string[];
  lastLineWidth?: string;
  typography?: Typography;
}

const props = withDefaults(defineProps<TextSkeletonProps>(), {
  lines: 1,
  width: "100%",
  lastLineWidth: "75%",
  typography: "paragraph-1",
});

const isLoading = useSkeletonLoading(() => props.loading);

const typographyHeights: Record<Typography, string> = {
  "title-1": "18px",
  "title-2": "24px",
  "title-3": "28px",
  "title-4": "32px",
  "title-5": "36px",
  "title-6": "40px",
  "title-7": "48px",
  "title-8": "64px",
  "title-9": "96px",
  "title-10": "132px",
  "subtitle-1": "20px",
  "subtitle-2": "16px",
  "subtitle-3": "22px",
  "subtitle-4": "36px",
  "paragraph-1": "24px",
  "paragraph-2": "24px",
  "label-1": "14px",
  "label-2": "16px",
  "label-3": "18px",
  inherit: "1em",
};

const lineIndexes = computed(() =>
  Array.from({ length: props.lines }, (_, index) => index),
);
const lineHeight = computed(() => typographyHeights[props.typography]);

function getLineWidth(index: number) {
  if (Array.isArray(props.width)) {
    return props.width[index] ?? props.width[props.width.length - 1] ?? "100%";
  }

  if (props.lines > 1 && index === props.lines - 1) {
    return props.lastLineWidth;
  }

  return props.width;
}
</script>

<template>
  <div v-if="isLoading" class="text-skeleton" aria-hidden="true">
    <Skeleton
      v-for="index in lineIndexes"
      :key="index"
      :loading="true"
      :width="getLineWidth(index)"
      :height="lineHeight"
      radius="6px"
    />
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.text-skeleton {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: var(--gap-2);
}
</style>
