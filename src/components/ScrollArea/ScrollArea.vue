<script setup lang="ts">
import { computed, ref, toRef, type CSSProperties, type PropType } from "vue";
import { useScrollFade } from "./useScrollFade";

defineOptions({
  inheritAttrs: false,
});

export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";

export interface ScrollAreaProps {
  maxHeight?: CSSProperties["maxHeight"] | number;
  orientation?: ScrollAreaOrientation;
  keyboardFocusable?: boolean;
  stableScrollbar?: boolean;
  fade?: boolean;
  fadeSize?: CSSProperties["width"] | number;
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
  fade: {
    type: Boolean,
    default: false,
  },
  fadeSize: {
    type: [String, Number] as PropType<ScrollAreaProps["fadeSize"]>,
    default: undefined,
  },
});

const scrollAreaRef = ref<HTMLElement | null>(null);

const maxHeight = computed(() =>
  typeof props.maxHeight === "number"
    ? `${props.maxHeight}px`
    : props.maxHeight,
);

const fadeSize = computed(() =>
  typeof props.fadeSize === "number" ? `${props.fadeSize}px` : props.fadeSize,
);

useScrollFade(scrollAreaRef, toRef(props, "fade"));
</script>

<template>
  <div
    ref="scrollAreaRef"
    v-bind="$attrs"
    :class="[
      'scroll-area',
      props.orientation,
      {
        'stable-scrollbar': props.stableScrollbar,
        'scroll-fade': props.fade,
      },
    ]"
    :style="{
      maxHeight,
      '--scroll-fade-size': fadeSize,
    }"
    :tabindex="props.keyboardFocusable ? 0 : undefined"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@property --scroll-fade-top {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}

@property --scroll-fade-end {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}

@property --scroll-fade-bottom {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}

@property --scroll-fade-start {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}

@keyframes scroll-fade-reveal-top {
  from {
    --scroll-fade-top: 0px;
  }
  to {
    --scroll-fade-top: var(--scroll-fade-edge-size);
  }
}

@keyframes scroll-fade-reveal-end {
  from {
    --scroll-fade-end: var(--scroll-fade-edge-size);
  }
  to {
    --scroll-fade-end: 0px;
  }
}

@keyframes scroll-fade-reveal-bottom {
  from {
    --scroll-fade-bottom: var(--scroll-fade-edge-size);
  }
  to {
    --scroll-fade-bottom: 0px;
  }
}

@keyframes scroll-fade-reveal-start {
  from {
    --scroll-fade-start: 0px;
  }
  to {
    --scroll-fade-start: var(--scroll-fade-edge-size);
  }
}

.scroll-area {
  --scroll-fade-edge-size: var(--scroll-fade-size, min(12%, 40px));
  --scroll-fade-reveal-distance: 96px;
  --scroll-fade-block-mask: linear-gradient(
    to bottom,
    transparent 0,
    #000 var(--scroll-fade-top, 0px),
    #000 calc(100% - var(--scroll-fade-bottom, 0px)),
    transparent 100%
  );
  --scroll-fade-inline-mask: linear-gradient(
    to right,
    transparent 0,
    #000 var(--scroll-fade-start, 0px),
    #000 calc(100% - var(--scroll-fade-end, 0px)),
    transparent 100%
  );
  width: 100%;
  min-width: 0;
  overscroll-behavior: contain;
  scrollbar-color: hsl(var(--border)) transparent;
  scrollbar-width: thin;
}

.scroll-area:dir(rtl) {
  --scroll-fade-inline-mask: linear-gradient(
    to left,
    transparent 0,
    #000 var(--scroll-fade-start, 0px),
    #000 calc(100% - var(--scroll-fade-end, 0px)),
    transparent 100%
  );
}

.scroll-area.scroll-fade.vertical {
  -webkit-mask-image: var(--scroll-fade-block-mask);
  mask-image: var(--scroll-fade-block-mask);
}

.scroll-area.scroll-fade.horizontal {
  -webkit-mask-image: var(--scroll-fade-inline-mask);
  mask-image: var(--scroll-fade-inline-mask);
}

.scroll-area.scroll-fade.both {
  -webkit-mask-image:
    var(--scroll-fade-block-mask), var(--scroll-fade-inline-mask);
  mask-image: var(--scroll-fade-block-mask), var(--scroll-fade-inline-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

.scroll-area.scroll-fade {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.scroll-area.scroll-fade[data-scroll-fade-top] {
  --scroll-fade-top: var(--scroll-fade-edge-size);
}

.scroll-area.scroll-fade[data-scroll-fade-bottom] {
  --scroll-fade-bottom: var(--scroll-fade-edge-size);
}

.scroll-area.scroll-fade[data-scroll-fade-start] {
  --scroll-fade-start: var(--scroll-fade-edge-size);
}

.scroll-area.scroll-fade[data-scroll-fade-end] {
  --scroll-fade-end: var(--scroll-fade-edge-size);
}

@supports (animation-timeline: scroll()) {
  .scroll-area.scroll-fade.vertical {
    animation:
      scroll-fade-reveal-top 1ms ease-in-out,
      scroll-fade-reveal-bottom 1ms ease-in-out;
    animation-timeline: scroll(self y), scroll(self y);
    animation-range:
      0 var(--scroll-fade-reveal-distance),
      calc(100% - var(--scroll-fade-reveal-distance)) 100%;
    animation-fill-mode: both;
  }

  .scroll-area.scroll-fade.horizontal {
    animation:
      scroll-fade-reveal-start 1ms ease-in-out,
      scroll-fade-reveal-end 1ms ease-in-out;
    animation-timeline: scroll(self inline), scroll(self inline);
    animation-range:
      0 var(--scroll-fade-reveal-distance),
      calc(100% - var(--scroll-fade-reveal-distance)) 100%;
    animation-fill-mode: both;
  }

  .scroll-area.scroll-fade.both {
    animation:
      scroll-fade-reveal-top 1ms ease-in-out,
      scroll-fade-reveal-bottom 1ms ease-in-out,
      scroll-fade-reveal-start 1ms ease-in-out,
      scroll-fade-reveal-end 1ms ease-in-out;
    animation-timeline:
      scroll(self y), scroll(self y), scroll(self inline), scroll(self inline);
    animation-range:
      0 var(--scroll-fade-reveal-distance),
      calc(100% - var(--scroll-fade-reveal-distance)) 100%,
      0 var(--scroll-fade-reveal-distance),
      calc(100% - var(--scroll-fade-reveal-distance)) 100%;
    animation-fill-mode: both;
  }
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
