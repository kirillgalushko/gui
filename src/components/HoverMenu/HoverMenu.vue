<script setup lang="ts">
import BaseMenu from '../BaseMenu/BaseMenu.vue'
import { useHoverMenu } from './useHoverMenu';

const { targetRef, floatingRef, floatingStyles, isVisible, isSubmenuVisible, showHoverMenu, hideMenu } = useHoverMenu();
</script>

<template>
  <div ref="targetRef" @mouseenter="showHoverMenu" @mouseleave="hideMenu" class="hover-menu-wrapper">
    <slot ref="testRef"></slot>
  </div>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible || isSubmenuVisible" @mouseenter="showHoverMenu" @mouseleave="hideMenu" ref="floatingRef">
        <BaseMenu :style="floatingStyles">
          <slot name="menu"></slot>
        </BaseMenu>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.hover-menu-wrapper {
  position: relative;
  display: inline-flex;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>