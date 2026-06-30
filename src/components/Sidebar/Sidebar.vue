<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import { IconGripVerticalOutline } from '@gui/icons';
import { Padding } from '../../types';

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
provide('sidebar-width', width);
provide('sidebar-is-resizing', isResizing);
provide('sidebar-is-compact', isCompact);

const startResizing = () => {
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
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
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
  isCompact.value = width.value < props.compactWidth
}, { immediate: true })

watch(() => props.width, (nextWidth) => {
  if (Number.isFinite(nextWidth)) {
    width.value = nextWidth
  }
})
</script>

<template>
  <div ref="sidebarRef" :class="['sidebar', `sidebar--${props.mode}`]" :style="{
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
  background: hsl(var(--background));
  height: 100%;
  padding: var(--gap-3);
  box-sizing: border-box;
  position: relative;
}

.sidebar--floating {
  height: calc(100% - 16px);
  margin: 8px 0 8px 8px;
  border: 1px solid hsl(var(--border));
  border-radius: 10px;
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

.resize-handle::after {
  width: 0;
  transition: all 0.2s;
  border-radius: 999px;
}

.resize-handle:hover::after {
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
  border-radius: 4px;
}

.resize-handle:hover svg {
  opacity: 1;
}
</style>
