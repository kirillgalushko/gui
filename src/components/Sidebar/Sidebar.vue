<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue';
import { Padding } from '../../types';

interface SidebarProps {
  padding?: Padding;
}

const props = withDefaults(defineProps<SidebarProps>(), { padding: 16 })
const width = ref<number>(400);
const isResizing = ref<boolean>(false);
const sidebarRef = ref<HTMLElement | null>(null);

const startResizing = () => {
  isResizing.value = true;
  document.addEventListener('mousemove', resizeSidebar);
  document.addEventListener('mouseup', stopResizing);
  document.body.style.userSelect = 'none';
}

const resizeSidebar = (event: MouseEvent) => {
  if (isResizing.value && event.clientX > 0 && sidebarRef.value) {
    const sidebarOffsetLeft = sidebarRef.value.offsetLeft;
    width.value = event.clientX - sidebarOffsetLeft
  }
  if (isResizing.value && event.buttons !== 1) {
    isResizing.value = false
  }
}

const stopResizing = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resizeSidebar);
  document.removeEventListener('mouseup', resizeSidebar);
  document.body.style.userSelect = '';
}

</script>

<template>
  <div ref="sidebarRef" :class="['sidebar']" :style="{ width: `${width}px`, padding: `${props.padding}px`, }">
    <div class="resize-handle" @mousedown="startResizing">
      <Icon name="circled-menu" />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.sidebar {
  width: 400px;
  border-right: 1px solid hsl(var(--border));
  height: 100%;
  padding: var(--gap-3);
  box-sizing: border-box;
  position: relative;
  min-width: 200px;
  max-width: 100vw;
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