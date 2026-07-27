<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "../../types/colors";

export interface ItemMediaProps {
  color?: Color;
}

const props = defineProps<ItemMediaProps>();
const mediaStyle = computed(() =>
  props.color === undefined
    ? undefined
    : { "--item-media-color": `var(--color-${props.color}-500)` },
);
</script>

<template>
  <div class="item-media" :style="mediaStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.item-media {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--item-media-color, hsl(var(--muted-foreground)));
  font-size: 18px;
}
</style>
