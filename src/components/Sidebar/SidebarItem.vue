<script setup lang="ts">
import { inject, ref, Ref } from 'vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import { useResize } from '../../hooks/useResize';

export interface SidebarItemProps {
  selected?: boolean;
}

const props = defineProps<SidebarItemProps>()
const centerElement = ref<HTMLDivElement | null>(null);
const buttonElement = ref<HTMLButtonElement | null>(null);
const isEllipsis = ref<boolean>(false);
const isCompact = inject<Ref<boolean>>('sidebar-is-compact');

const checkEllipsis = () => {
  if (centerElement.value) {
    const { scrollWidth, clientWidth } = centerElement.value;
    isEllipsis.value = scrollWidth > clientWidth;
  }
};

useResize(buttonElement, checkEllipsis)
</script>

<template>
  <Tooltip :disabled="!(isEllipsis || isCompact)" placement="right">
    <button ref="buttonElement" :class="['SidebarItem', { selected: props.selected, compact: isCompact }]">
      <div v-if="$slots.left && !isCompact" class="left">
        <slot name="left"></slot>
      </div>
      <div v-if="!isCompact" ref="centerElement" class="center">
        <slot></slot>
      </div>
      <div v-if="$slots.right && !isCompact" class="right">
        <slot name="right"></slot>
      </div>

      <slot name="compact">
        <slot v-if="isCompact" name="left"></slot>
      </slot>
    </button>

    <template #popper>
      <slot name="tooltip">
        <slot></slot>
      </slot>
    </template>
  </Tooltip>
</template>

<style scoped>
.SidebarItem {
  font-family: var(--font-family);
  font-size: 14px;
  background-color: transparent;
  padding: 10px 12px;
  border-radius: 8px;
  color: hsl(var(--muted-foreground));
  width: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  gap: var(--gap-2);
  align-items: center;
  transition: all 0.15s;
}

.compact {
  justify-content: center;
  font-size: 16px;
}

.selected {
  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--accent));
}

.SidebarItem:hover {
  color: hsl(var(--accent-foreground));
}

.center {
  width: 100%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.left,
.right {
  font-size: 16px;
  display: inline-flex;
}
</style>