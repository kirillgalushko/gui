<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue';
import Action from '../Action/Action.vue';
import Icon from '../Icon/Icon.vue';
import Text from '../Text/Text.vue'

interface ModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
}

const props = defineProps<ModalProps>()
const instance = getCurrentInstance();
const gridTemplateAreas = computed(() => {
  const footer = instance?.slots.footer ? '"footer footer"' : ''
  if (props.title) {
    return `
      "title close"
      "content content"
      ${footer}
    `
  }
  return `
     "content close"
      ${footer}
  `
})
</script>

<template>
  <div v-if="props.isOpened">
    <div class="modal-bg"></div>
    <div class="modal">
      <div :style="{ gridTemplateAreas }"
        :class="['modal-layout', { 'with-title': !!props.title, 'with-close': !!props.showCloseButton }]">
        <div v-if="props.title" class="modal-title">
          <Text typography="title-3-semibold">{{ props.title }}</Text>
        </div>
        <div v-if="props.showCloseButton" class="modal-close">
          <Action @click="props.onClose">
            <Icon name="x" />
          </Action>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  animation-name: enter;
  animation-duration: .15s;
}

.modal {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 16px;
  z-index: 101;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: 1px solid hsl(var(--border));
  display: flex;
  max-height: 70vh;
  background-color: hsl(var(--background));
  animation-name: enter, up;
  animation-duration: .3s;
  animation-delay: .1s;
  animation-fill-mode: both;
}

@keyframes enter {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes up {
  0% {
    top: 52%;
  }

  100% {
    top: 50%
  }
}

.modal-layout {
  overflow: hidden;
  display: grid;
  grid-template-areas: "content close" "footer footer";
  grid-template-columns: 100% 0px;
  row-gap: 12px;
}

.modal-layout.with-close {
  grid-template-columns: calc(100% - 40px) 40px;
}

.modal-content {
  grid-area: content;
  overflow-y: auto;
}

.modal-title {
  grid-area: title;
  align-self: center;
  padding-right: 12px;
  word-break: break-word;
}

.modal-close {
  grid-area: close;
  align-self: start;
  justify-self: end;
  display: flex;
  align-items: center;
  height: 32px;
}

.modal-footer {
  grid-area: footer;
  display: flex;
  gap: 12px;
  justify-content: end;
}
</style>