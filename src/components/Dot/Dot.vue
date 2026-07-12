<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "../../types/colors";

export interface DotProps {
  color: Color;
}

const props = defineProps<DotProps>();

const dotStyle = computed(() => ({
  "--dot-color": `var(--color-${props.color}-500)`,
}));
</script>

<template>
  <span class="dot" :style="dotStyle" aria-hidden="true"></span>
</template>

<style scoped>
.dot {
  display: inline-block;
  flex: 0 0 auto;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--dot-color);
}
</style>
