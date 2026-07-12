<script setup lang="ts">
import { onBeforeUnmount, ref, provide, watch } from 'vue'
import { IconGripVerticalOutline } from '@gui/icons';
import type { Padding } from '../../types';

export interface SidebarProps {
  mode?: 'default' | 'floating';
  padding?: Padding;
  width?: number;
  maxWidth?: string;
  minWidth?: string;
  compactWidth?: number;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  mode: 'default',
  padding: 16,
  minWidth: '200px',
  maxWidth: '100vw',
  width: 300,
  compactWidth: 0,
})
const width = ref<number>(props.width);
const isResizing = ref<boolean>(false);
const isCompact = ref<boolean>(width.value < props.compactWidth);
const sidebarRef = ref<HTMLElement | null>(null);
let animationFrameId: number | null = null;

provide('sidebar-width', width);
provide('sidebar-is-resizing', isResizing);
provide('sidebar-is-compact', isCompact);

const getRenderedWidth = (): number => {
  return sidebarRef.value?.getBoundingClientRect().width ?? width.value;
}

const updateCompactState = (nextWidth: number = getRenderedWidth()): void => {
  isCompact.value = nextWidth < props.compactWidth;
}

const stopTrackingRenderedWidth = (): void => {
  if (animationFrameId === null) {
    return;
  }

  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
}

const trackRenderedWidth = (): void => {
  updateCompactState();

  if (!sidebarRef.value || isResizing.value) {
    animationFrameId = null;
    return;
  }

  if (Math.abs(getRenderedWidth() - width.value) <= 0.5) {
    updateCompactState(width.value);
    animationFrameId = null;
    return;
  }

  animationFrameId = requestAnimationFrame(trackRenderedWidth);
}

const startTrackingRenderedWidth = (): void => {
  stopTrackingRenderedWidth();
  animationFrameId = requestAnimationFrame(trackRenderedWidth);
}

const startResizing = () => {
  stopTrackingRenderedWidth();

  if (sidebarRef.value) {
    width.value = sidebarRef.value.getBoundingClientRect().width;
  }

  isResizing.value = true;
  document.addEventListener('mousemove', resizeSidebar);
  document.addEventListener('mouseup', stopResizing);
  document.addEventListener('touchmove', resizeSidebar);
  document.addEventListener('touchend', stopResizing);
  document.body.classList.add('prevent-user-select');
  document.body.classList.add('sidebar-is-resizing');
}

const resizeSidebar = (event: MouseEvent | TouchEvent) => {
  if (isResizing.value && sidebarRef.value) {
    const touch = event instanceof TouchEvent ? event.touches[0] : undefined;
    const clientX = event instanceof MouseEvent ? event.clientX : touch?.clientX;

    if (clientX === undefined) {
      return;
    }

    const sidebarOffsetLeft = sidebarRef.value.offsetLeft;
    width.value = clientX - sidebarOffsetLeft;
  }
  if (isResizing.value && event instanceof MouseEvent && event.buttons !== 1) {
    stopResizing()
  }
}

const stopResizing = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resizeSidebar);
  document.removeEventListener('mouseup', stopResizing);
  document.removeEventListener('touchmove', resizeSidebar);
  document.removeEventListener('touchend', stopResizing);
  document.body.classList.remove('prevent-user-select');
  document.body.classList.remove('sidebar-is-resizing');
}

watch([width, () => props.compactWidth], () => {
  if (isResizing.value) {
    updateCompactState(width.value);
    return;
  }

  startTrackingRenderedWidth();
}, { immediate: true })

watch(() => props.width, (nextWidth) => {
  if (Number.isFinite(nextWidth)) {
    width.value = nextWidth
  }
})

onBeforeUnmount(stopTrackingRenderedWidth)
</script>

<template>
  <div ref="sidebarRef" :class="['sidebar', `sidebar--${props.mode}`, { 'sidebar--resizing': isResizing }]" :style="{
    width: `${width}px`, padding: `${props.padding}px`,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
  }">
    <div class="resize-handle" @mousedown="startResizing" @touchstart="startResizing">
      <IconGripVerticalOutline />
    </div>
    <slot></slot>
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
  padding: var(--gap-3);
  box-sizing: border-box;
  position: relative;
  transition: width 0.18s ease;
  will-change: width;
}

.sidebar--resizing {
  transition: none;
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
  background-color: hsl(var(--border));
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
  background: hsl(var(--border));
  padding: 4px 1px;
  border-radius: 6px;
}

.resize-handle:hover svg,
.sidebar--resizing .resize-handle svg {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .sidebar {
    transition: none;
  }
}
</style>
