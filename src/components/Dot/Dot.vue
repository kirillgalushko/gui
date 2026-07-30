<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "../../types/colors";

export interface DotProps {
  color: Color | "accent";
}

const props = defineProps<DotProps>();

const dotStyle = computed(() => ({
  "--dot-color":
    props.color === "accent"
      ? "hsl(var(--accent))"
      : `var(--color-${props.color}-500)`,
}));
</script>

<template>
  <span class="dot" :style="dotStyle" aria-hidden="true"></span>
</template>

<style scoped>
.dot {
  display: inline-block;
  flex: 0 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--dot-color);
}
</style>
