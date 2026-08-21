<script setup lang="ts">
import { computed } from "vue";
import { IconXOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import Card from "../Card/Card.vue";
import Text from "../Text/Text.vue";
import ModalContent from "./ModalContent.vue";
import ModalFooter from "./ModalFooter.vue";
import ModalHeader from "./ModalHeader.vue";

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
const hasHeader = computed(
  () => props.title || props.description || props.showCloseButton,
);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="modal-wrapper" v-if="props.isOpened">
        <div class="modal-bg"></div>
        <Card
          :class="['modal', props.size]"
          :padding="16"
          :borderRadius="24"
          stretched
          role="dialog"
          aria-modal="true"
        >
          <ModalHeader
            v-if="hasHeader"
            :class="['modal-header', { 'with-close': props.showCloseButton }]"
            :border="!!(props.title || props.description)"
          >
            <div
              v-if="props.title || props.description"
              class="modal-heading modal-title"
            >
              <Text v-if="props.title" typography="title-2">
                {{ props.title }}
              </Text>
              <Text
                v-if="props.description"
                typography="paragraph-1"
                color="secondary"
              >
                {{ props.description }}
              </Text>
            </div>
            <Button
              v-if="props.showCloseButton"
              class="modal-close"
              mode="ghost"
              size="small"
              squared
              aria-label="Закрыть"
              @click="props.onClose"
            >
              <IconXOutline />
            </Button>
          </ModalHeader>

          <ModalContent class="modal-content">
            <slot></slot>
          </ModalContent>

          <ModalFooter v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </ModalFooter>
        </Card>
      </div>
    </Transition>
  </Teleport>
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
  background-color: hsl(var(--background) / 0.8);
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
  z-index: 101;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: flex;
  min-height: 0;
  flex-direction: column;
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

.modal-content {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}

.modal-heading {
  word-break: break-word;
}

.modal-header {
  position: relative;
  flex: 0 0 auto;
}

.modal-header.with-close {
  padding-right: calc(var(--gui-card-padding) + var(--gap-2) + 32px);
}

.modal-close {
  position: absolute;
  top: 0;
  right: var(--gui-card-padding);
}

.modal-footer {
  justify-content: flex-end;
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
</style>
