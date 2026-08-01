<script setup lang="ts">
import { computed, onBeforeUnmount, ref, provide, watch } from "vue";
import { IconGripVerticalOutline } from "@gui/icons";
import type { Padding } from "../../types";

export interface SidebarProps {
  mode?: "default" | "floating";
  padding?: Padding;
  width?: number;
  maxWidth?: string;
  minWidth?: string;
  compactWidth?: number;
  collapseThreshold?: number;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  mode: "default",
  padding: 12,
  minWidth: "200px",
  maxWidth: "100vw",
  width: 300,
  compactWidth: 0,
});
const width = ref<number>(props.width);
const isResizing = ref<boolean>(false);
const canSnapToCompact = (): boolean =>
  props.collapseThreshold !== undefined &&
  Number.isFinite(props.collapseThreshold) &&
  props.collapseThreshold > props.compactWidth;
const getSnapSwitchWidth = (): number =>
  props.compactWidth +
  ((props.collapseThreshold ?? props.compactWidth) - props.compactWidth) / 2;
const shouldInitiallySnapToCompact = (nextWidth: number): boolean =>
  canSnapToCompact() && nextWidth < getSnapSwitchWidth();
const isSnapped = ref<boolean>(shouldInitiallySnapToCompact(width.value));
if (isSnapped.value) {
  width.value = props.compactWidth;
}
const requestedWidth = ref<number>(width.value);
const isSnapAnimating = ref<boolean>(false);
const snapAnimationDirection = ref<"collapse" | "expand" | null>(null);
const targetIsCompact = computed<boolean>(() => {
  if (!canSnapToCompact()) {
    return width.value <= props.compactWidth;
  }
  return isSnapped.value;
});
const presentedIsCompact = ref<boolean>(targetIsCompact.value);
const isContentVisible = ref<boolean>(true);
const isSnapHandoff = ref<boolean>(false);
const sidebarRef = ref<HTMLElement | null>(null);
let snapHandoffFrameId: number | null = null;
let snapAnimationTimer: ReturnType<typeof setTimeout> | null = null;
let contentFadeTimer: ReturnType<typeof setTimeout> | null = null;
const contentFadeDuration = 45;
const contentHiddenDuration = 70;

const clearContentFade = (): void => {
  if (contentFadeTimer !== null) {
    clearTimeout(contentFadeTimer);
    contentFadeTimer = null;
  }
};

watch(
  targetIsCompact,
  (nextIsCompact) => {
    clearContentFade();
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      presentedIsCompact.value = nextIsCompact;
      isContentVisible.value = true;
      return;
    }

    isContentVisible.value = false;
    contentFadeTimer = setTimeout(() => {
      presentedIsCompact.value = nextIsCompact;
      contentFadeTimer = setTimeout(() => {
        isContentVisible.value = true;
        contentFadeTimer = null;
      }, contentHiddenDuration);
    }, contentFadeDuration);
  },
  { flush: "sync" },
);

const finishSnapAnimation = (event?: TransitionEvent): void => {
  if (
    event !== undefined &&
    (event.target !== sidebarRef.value || event.propertyName !== "width")
  ) {
    return;
  }
  if (snapAnimationTimer !== null) {
    clearTimeout(snapAnimationTimer);
    snapAnimationTimer = null;
  }
  const completedDirection = snapAnimationDirection.value;
  isSnapAnimating.value = false;
  snapAnimationDirection.value = null;
  if (completedDirection === "expand" && !isSnapped.value) {
    isSnapHandoff.value = true;
    width.value = requestedWidth.value;
    snapHandoffFrameId = requestAnimationFrame(() => {
      isSnapHandoff.value = false;
      snapHandoffFrameId = null;
    });
  }
};

const scheduleSnapAnimationFallback = (): void => {
  if (snapAnimationTimer !== null) {
    clearTimeout(snapAnimationTimer);
  }
  const duration = snapAnimationDirection.value === "expand" ? 220 : 260;
  snapAnimationTimer = setTimeout(finishSnapAnimation, duration);
};

const startSnapAnimation = (direction: "collapse" | "expand"): void => {
  snapAnimationDirection.value = direction;
  isSnapAnimating.value = true;
  scheduleSnapAnimationFallback();
};

provide("sidebar-width", width);
provide("sidebar-requested-width", requestedWidth);
provide("sidebar-is-resizing", isResizing);
provide("sidebar-is-compact", presentedIsCompact);

const resolveSnapState = (nextWidth: number): boolean => {
  return canSnapToCompact() && nextWidth < getSnapSwitchWidth();
};

const applyRequestedWidth = (nextWidth: number): void => {
  const nextIsSnapped = resolveSnapState(nextWidth);
  requestedWidth.value = nextIsSnapped
    ? props.compactWidth
    : Math.max(nextWidth, props.collapseThreshold ?? nextWidth);
  if (isResizing.value && nextIsSnapped !== isSnapped.value) {
    startSnapAnimation(nextIsSnapped ? "collapse" : "expand");
  }
  isSnapped.value = nextIsSnapped;
  if (isSnapAnimating.value) {
    width.value =
      snapAnimationDirection.value === "expand"
        ? (props.collapseThreshold ?? nextWidth)
        : props.compactWidth;
    return;
  }
  width.value = requestedWidth.value;
};

const startResizing = () => {
  if (sidebarRef.value) {
    width.value = isSnapped.value
      ? props.compactWidth
      : sidebarRef.value.getBoundingClientRect().width;
  }

  isResizing.value = true;
  document.addEventListener("mousemove", resizeSidebar);
  document.addEventListener("mouseup", stopResizing);
  document.addEventListener("touchmove", resizeSidebar);
  document.addEventListener("touchend", stopResizing);
  document.body.classList.add("prevent-user-select");
  document.body.classList.add("sidebar-is-resizing");
};

const resizeSidebar = (event: MouseEvent | TouchEvent) => {
  if (isResizing.value && sidebarRef.value) {
    const touch = event instanceof TouchEvent ? event.touches[0] : undefined;
    const clientX =
      event instanceof MouseEvent ? event.clientX : touch?.clientX;

    if (clientX === undefined) {
      return;
    }

    const sidebarOffsetLeft = sidebarRef.value.offsetLeft;
    applyRequestedWidth(clientX - sidebarOffsetLeft);
  }
  if (isResizing.value && event instanceof MouseEvent && event.buttons !== 1) {
    stopResizing();
  }
};

const stopResizing = () => {
  isResizing.value = false;
  document.removeEventListener("mousemove", resizeSidebar);
  document.removeEventListener("mouseup", stopResizing);
  document.removeEventListener("touchmove", resizeSidebar);
  document.removeEventListener("touchend", stopResizing);
  document.body.classList.remove("prevent-user-select");
  document.body.classList.remove("sidebar-is-resizing");
};

watch(
  () => props.width,
  (nextWidth) => {
    if (Number.isFinite(nextWidth)) {
      applyRequestedWidth(nextWidth);
    }
  },
);

watch(
  () => props.compactWidth,
  () => {
    if (isSnapped.value) {
      width.value = props.compactWidth;
    }
  },
);

onBeforeUnmount(() => {
  clearContentFade();
  if (snapAnimationTimer !== null) {
    clearTimeout(snapAnimationTimer);
  }
  if (snapHandoffFrameId !== null) {
    cancelAnimationFrame(snapHandoffFrameId);
  }
});
</script>

<template>
  <div
    ref="sidebarRef"
    :class="[
      'sidebar',
      `sidebar--${props.mode}`,
      {
        'sidebar--resizing': isResizing,
        'sidebar--snapped': isSnapped,
        'sidebar--snap-animating': isSnapAnimating,
        'sidebar--snap-expanding':
          isSnapAnimating && snapAnimationDirection === 'expand',
        'sidebar--snap-handoff': isSnapHandoff,
      },
    ]"
    :style="{
      width: `${width}px`,
      padding: `${props.padding}px`,
      maxWidth: props.maxWidth,
      minWidth: props.minWidth,
      '--sidebar-padding': `${props.padding}px`,
    }"
    @transitionend="finishSnapAnimation"
  >
    <div
      class="resize-handle"
      @mousedown="startResizing"
      @touchstart="startResizing"
    >
      <IconGripVerticalOutline />
    </div>
    <div
      :class="[
        'sidebar__content',
        { 'sidebar__content--visible': isContentVisible },
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style>
.prevent-user-select * {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sidebar-is-resizing,
.sidebar-is-resizing * {
  cursor: ew-resize !important;
}
</style>

<style scoped>
.sidebar {
  width: 400px;
  border-right: 1px solid hsl(var(--border));
  background: hsl(var(--sidebar));
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  position: relative;
  transition: width 0.22s ease;
  will-change: width;
}

.sidebar--resizing {
  transition: none;
}

.sidebar--snap-animating {
  transition: width 0.24s ease;
}

.sidebar--snap-expanding {
  transition-duration: 0.2s;
}

.sidebar--snap-handoff {
  transition: none;
}

.sidebar__content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.125s ease;
}

.sidebar__content--visible {
  opacity: 1;
  pointer-events: auto;
}

.sidebar--floating {
  height: calc(100% - 16px);
  margin: 8px 0 8px 8px;
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  background: hsl(var(--sidebar));
}

.resize-handle {
  width: 8px;
  cursor: ew-resize;
  position: absolute;
  top: 0;
  right: -4px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.sidebar--floating .resize-handle {
  top: 8px;
  height: calc(100% - 16px);
}

.resize-handle:hover::after,
.sidebar--resizing .resize-handle::after {
  content: "";
  width: 2px;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  z-index: -1;
  margin-left: -1px;
}

.sidebar--resizing .resize-handle::after,
.resize-handle::after {
  width: 0;
  transition: all 0.2s;
  border-radius: 999px;
}

.sidebar--floating .resize-handle:hover::after {
  width: 0px;
  margin-left: -0.5px;
}

.resize-handle svg {
  width: 12px;
  height: 12px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s;
  background: hsl(var(--input));
  border: 1px solid hsl(var(--border));
  padding: 4px 1px;
  border-radius: 6px;
}

.resize-handle:hover svg,
.sidebar--resizing .resize-handle svg {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .sidebar,
  .sidebar__content {
    transition: none;
  }
}
</style>
