<script setup lang="ts">
import { inject, ref } from "vue";
import type { Ref } from "vue";
import Tooltip from "../Tooltip/Tooltip.vue";
import { useResize } from "../../hooks/useResize";

export interface SidebarItemProps {
  selected?: boolean;
}

const props = defineProps<SidebarItemProps>();
const centerElement = ref<HTMLDivElement | null>(null);
const buttonElement = ref<HTMLButtonElement | null>(null);
const isEllipsis = ref<boolean>(false);
const isCompact = inject<Ref<boolean>>("sidebar-is-compact");

const checkEllipsis = () => {
  if (centerElement.value) {
    const { scrollWidth, clientWidth } = centerElement.value;
    isEllipsis.value = scrollWidth > clientWidth;
  }
};

useResize(buttonElement, checkEllipsis);
</script>

<template>
  <Tooltip :delay="0" :disabled="!(isEllipsis || isCompact)" placement="right">
    <button
      ref="buttonElement"
      :class="['SidebarItem', { selected: props.selected, compact: isCompact }]"
    >
      <div v-if="$slots.left && !isCompact" class="left">
        <slot name="left"></slot>
      </div>
      <div v-if="!isCompact" ref="centerElement" class="center">
        <slot></slot>
      </div>
      <div v-if="$slots.right && !isCompact" class="right">
        <slot name="right"></slot>
      </div>

      <template v-if="isCompact">
        <div class="compact-content">
          <slot name="compact">
            <slot name="left"></slot>
          </slot>
          <span v-if="$slots['compact-indicator']" class="compact-indicator">
            <slot name="compact-indicator"></slot>
          </span>
        </div>
      </template>
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
  height: var(--gap-9);
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: flex;
  gap: var(--gap-2);
  align-items: center;
  transition:
    color 0.15s,
    background-color 0.15s,
    scale 0.15s;
}

.compact {
  justify-content: center;
  font-size: 16px;
}

.compact-content {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.compact-indicator {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  transform: translate(50%, -50%);
}

.SidebarItem:active {
  scale: 0.98;
}

.SidebarItem:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.selected {
  color: hsl(var(--contrast-foreground));
  background-color: color-mix(in oklab, hsl(var(--input)) 80%, transparent);
}

.SidebarItem:hover {
  color: hsl(var(--contrast-foreground));
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
