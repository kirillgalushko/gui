<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import Button from "../Button/Button.vue";
import Gap from "../Gap/Gap.vue";
import { IconXOutline } from "@gui/icons";
import Text from "../Text/Text.vue";

type ModalSize = "small" | "medium" | "large" | "full";

export interface ModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  size?: ModalSize;
}

const props = withDefaults(defineProps<ModalProps>(), {
  size: "medium",
});
const instance = getCurrentInstance();
const gridTemplateAreas = computed(() => {
  const footer = instance?.slots.footer ? '"footer footer"' : "";
  if (props.title || props.description) {
    return `
      "title close"
      "content content"
      ${footer}
    `;
  }
  return `
     "content close"
      ${footer}
  `;
});
</script>

<template>
  <Transition name="fade">
    <div class="modal-wrapper" v-if="props.isOpened">
      <div class="modal-bg"></div>
      <div :class="['modal', props.size]" role="dialog">
        <div
          :style="{ gridTemplateAreas }"
          :class="[
            'modal-layout',
            {
              'with-title': !!(props.title || props.description),
              'with-close': !!props.showCloseButton,
            },
          ]"
        >
          <div v-if="props.title || props.description" class="modal-title">
            <Text v-if="props.title" typography="title-3">
              {{ props.title }}
            </Text>
            <Gap v-if="props.title && props.description" :size="1" />
            <Text
              v-if="props.description"
              typography="paragraph-1"
              color="secondary"
            >
              {{ props.description }}
            </Text>
          </div>
          <div v-if="props.showCloseButton" class="modal-close">
            <Button
              mode="ghost"
              size="small"
              squared
              aria-label="Закрыть"
              @click="props.onClose"
            >
              <IconXOutline />
            </Button>
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
  </Transition>
</template>

<style scoped>
.modal-wrapper {
  z-index: 100;
  position: fixed;
}

.modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  animation-name: enter;
  animation-duration: 0.2s;
}

@keyframes enter {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.modal {
  --modal-size: 400px;

  box-sizing: border-box;
  width: min(var(--modal-size), calc(100vw - var(--gap-4)));
  max-width: calc(100vw - var(--gap-4));
  max-height: calc(100vh - var(--gap-4));
  max-height: calc(100dvh - var(--gap-4));
  padding: var(--gap-6);
  border-radius: 24px;
  z-index: 101;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: 1px solid hsl(var(--border));
  display: flex;
  background-color: hsl(var(--background));
}

.small {
  --modal-size: 320px;
}

.medium {
  --modal-size: 400px;
}

.large {
  --modal-size: 640px;
}

.full {
  --modal-size: calc(100vw - var(--gap-4));
}

.modal-layout {
  display: grid;
  grid-template-areas: "content close" "footer footer";
  grid-template-columns: 100% 0px;
  row-gap: 12px;
  width: 100%;
  min-height: 0;
  max-height: inherit;
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
  justify-content: flex-end;
  height: 32px;
}

.modal-footer {
  grid-area: footer;
  display: flex;
  gap: 12px;
  justify-content: end;
}

.fade-enter-active,
.fade-leave-active,
.fade-enter-active .modal,
.fade-leave-active .modal {
  transition: all 0.2s ease-in-out;
}

.fade-enter-active .modal-bg,
.fade-leave-active .modal-bg {
  transition: backdrop-filter 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .modal-bg,
.fade-leave-to .modal-bg {
  backdrop-filter: blur(0px);
}

.fade-enter-from .modal,
.fade-leave-to .modal {
  top: 52%;
}

.fade-enter-to .modal,
.fade-leave-from .modal {
  top: 50%;
}

@media (max-width: 560px) {
  .modal {
    padding: var(--gap-5);
  }
}
</style>
