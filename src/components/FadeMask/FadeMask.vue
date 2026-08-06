<script setup lang="ts">
import { toRef } from "vue";
import {
  useFadeMask,
  type FadeMaskDirection,
  type FadeMaskEasing,
} from "./useFadeMask";

export interface FadeMaskProps {
  aspectRatio?: string;
  direction?: FadeMaskDirection;
  disabled?: boolean;
  easing?: FadeMaskEasing;
  end?: number;
  inline?: boolean;
  overflow?: boolean;
  start?: number;
}

const props = withDefaults(defineProps<FadeMaskProps>(), {
  direction: "bottom",
  disabled: false,
  easing: "smooth",
  end: 90,
  inline: false,
  overflow: true,
  start: 40,
});

const { style } = useFadeMask({
  aspectRatio: toRef(props, "aspectRatio"),
  direction: toRef(props, "direction"),
  disabled: toRef(props, "disabled"),
  easing: toRef(props, "easing"),
  end: toRef(props, "end"),
  start: toRef(props, "start"),
});
</script>

<template>
  <div
    :class="[
      'FadeMask',
      {
        'FadeMask--inline': props.inline,
        'FadeMask--overflow-hidden': props.overflow,
      },
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<style scoped>
.FadeMask {
  display: block;
  min-width: 0;
  width: 100%;
}

.FadeMask--inline {
  display: inline-block;
  width: auto;
}

.FadeMask--overflow-hidden {
  overflow: hidden;
}
</style>
