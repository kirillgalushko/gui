<script setup lang="ts">
import { Gap, Align } from "../../types";

type JustifyContent = "start" | "center" | "end" | "space-between";

export interface StackProps {
  direction: "row" | "column";
  gap?: Gap;
  fullHeight?: boolean;
  alignItems?: Align;
  justifyContent?: JustifyContent;
  stretched?: boolean;
  wrap?: boolean;
}

const props = defineProps<StackProps>();
</script>

<template>
  <div
    :class="[
      'stack',
      props.direction,
      props.alignItems,
      props.justifyContent ? `justify-${props.justifyContent}` : undefined,
      {
        'with-gap': !!props.gap,
        fullHeight: props.fullHeight,
        stretched: props.stretched,
        wrap: props.wrap,
      },
    ]"
    :style="
      props.gap ? { '--stack-gap-size': `var(--gap-${props.gap})` } : undefined
    "
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.stack {
  display: inline-flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.start {
  align-items: start;
}

.center {
  align-items: center;
}

.end {
  align-items: end;
}

.justify-start {
  justify-content: start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: end;
}

.justify-space-between {
  justify-content: space-between;
}

.fullHeight {
  height: 100%;
}

.stretched {
  width: 100%;
}

.wrap {
  flex-wrap: wrap;
}

.with-gap {
  gap: var(--stack-gap-size);
}
</style>
