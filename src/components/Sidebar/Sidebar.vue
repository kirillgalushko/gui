<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import { IconGripVerticalOutline } from '@gui/icons';
import { Padding } from '../../types';

export interface SidebarProps {
  padding?: Padding;
  width?: number;
  maxWidth?: string;
  minWidth?: string;
  compactWidth?: number;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  padding: 16,
  minWidth: '200px',
  maxWidth: '100vw',
  width: 300,
  compactWidth: 0,
})
const width = ref<number>(props.width);
const isResizing = ref<boolean>(false);
const isCompact = ref<boolean>(false);
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
}

const resizeSidebar = (event: MouseEvent | TouchEvent) => {
  if (isResizing.value && sidebarRef.value) {
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const sidebarOffsetLeft = sidebarRef.value.offsetLeft;
    width.value = clientX - sidebarOffsetLeft;
  }
  if (isResizing.value && event instanceof MouseEvent && event.buttons !== 1) {
    isResizing.value = false
  }
}

const stopResizing = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resizeSidebar);
  document.removeEventListener('mouseup', resizeSidebar);
  document.removeEventListener('touchmove', resizeSidebar);
  document.removeEventListener('touchend', resizeSidebar);
  document.body.classList.remove('prevent-user-select');
}

watch(() => width.value, () => {
  if (width.value < props.compactWidth) {
    isCompact.value = true
  } else {
    isCompact.value = false
  }
})
</script>

<template>
  <div ref="sidebarRef" :class="['sidebar']" :style="{
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
</style>

<style scoped>
.sidebar {
  width: 400px;
  border-right: 1px solid hsl(var(--border));
  height: 100%;
  padding: var(--gap-3);
  box-sizing: border-box;
  position: relative;
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

.resize-handle::after {
  width: 0;
  transition: all 0.2s;
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