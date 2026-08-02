<script setup lang="ts">
import { computed } from "vue";
import type { Color } from "../../types/colors";

export type IconContainerMode = "circle" | "square";
export type IconContainerColor = Color;

export interface IconContainerProps {
  size?: string;
  mode?: IconContainerMode;
  color?: IconContainerColor;
}

const props = withDefaults(defineProps<IconContainerProps>(), {
  size: "40px",
  mode: "square",
});

const styles = computed(() => {
  const color =
    props.color === undefined ? undefined : `var(--color-${props.color}-500)`;

  return {
    "--icon-container-size": props.size,
    "--icon-container-background":
      color === undefined
        ? "hsl(var(--secondary))"
        : `color-mix(in oklab, ${color} 20%, transparent)`,
    "--icon-container-color": color ?? "hsl(var(--secondary-foreground))",
  };
});
</script>

<template>
  <span v-bind="$attrs" :class="['IconContainer', props.mode]" :style="styles">
    <slot />
  </span>
</template>

<style scoped>
.IconContainer {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: var(--icon-container-size);
  height: var(--icon-container-size);
  background-color: var(--icon-container-background);
  color: var(--icon-container-color);
  font-size: calc(var(--icon-container-size) / 2);
  line-height: 1;
}

.IconContainer.square {
  border-radius: calc(var(--icon-container-size) / 4);
}

.IconContainer.circle {
  border-radius: 50%;
}

.IconContainer :deep(svg) {
  display: block;
  width: 1em;
  height: 1em;
}
</style>
