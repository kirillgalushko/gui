<script setup lang="ts">
import { computed, type CSSProperties, type PropType } from "vue";

defineOptions({
  inheritAttrs: false,
});

export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";

export interface ScrollAreaProps {
  maxHeight?: CSSProperties["maxHeight"] | number;
  orientation?: ScrollAreaOrientation;
  keyboardFocusable?: boolean;
  stableScrollbar?: boolean;
}

const props = defineProps({
  maxHeight: {
    type: [String, Number] as PropType<ScrollAreaProps["maxHeight"]>,
    default: undefined,
  },
  orientation: {
    type: String as PropType<ScrollAreaOrientation>,
    default: "vertical",
  },
  keyboardFocusable: {
    type: Boolean,
    default: true,
  },
  stableScrollbar: {
    type: Boolean,
    default: true,
  },
});

const maxHeight = computed(() =>
  typeof props.maxHeight === "number"
    ? `${props.maxHeight}px`
    : props.maxHeight,
);
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[
      'scroll-area',
      props.orientation,
      { 'stable-scrollbar': props.stableScrollbar },
    ]"
    :style="{ maxHeight }"
    :tabindex="props.keyboardFocusable ? 0 : undefined"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.scroll-area {
  width: 100%;
  min-width: 0;
  overscroll-behavior: contain;
  scrollbar-color: hsl(var(--border)) transparent;
  scrollbar-width: thin;
}

.scroll-area.vertical {
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll-area.horizontal {
  overflow-x: auto;
  overflow-y: hidden;
}

.scroll-area.both {
  overflow: auto;
}

.scroll-area.stable-scrollbar {
  scrollbar-gutter: stable;
}

.scroll-area:focus-visible {
  border-radius: 8px;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.scroll-area::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scroll-area::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-area::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background: hsl(var(--border));
  background-clip: padding-box;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
  background-clip: padding-box;
}
</style>
