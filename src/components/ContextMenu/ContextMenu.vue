<script setup lang="ts">
import BaseMenu from '../BaseMenu/BaseMenu.vue';
import { computed, Teleport } from 'vue';
import { useContextMenu } from './useContextMenu';

interface ContextMenuProps {
  data: ReturnType<typeof useContextMenu>['contextMenuData']
}

const props = defineProps<ContextMenuProps>()
const positionerStyles = computed(() => ({
  position: 'fixed' as const,
  left: `${props.data.position.value.x}px`,
  top: `${props.data.position.value.y}px`,
}))
const floatStyles = computed(() => ({
  ...props.data.floatingStyles.value
}))
</script>

<template>
  <div :ref="props.data.positionRef" :style="positionerStyles"></div>
  <Teleport to="body">
    <Transition name="fade">
      <BaseMenu v-if="props.data.isContextMenuVisible.value" :ref="props.data.floatingRef" :style="floatStyles">
        <slot></slot>
      </BaseMenu>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>