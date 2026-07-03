<script setup lang="ts">
import { computed } from 'vue';
import Button from '../Button/Button.vue';
import Gap from '../Gap/Gap.vue';
import Text from '../Text/Text.vue';
import { IconXOutline } from '@gui/icons';
import { useSheet } from './useSheet';

type SheetSide = 'top' | 'right' | 'bottom' | 'left';
type SheetSize = 'auto' | 'small' | 'medium' | 'large' | 'full';

export interface SheetProps {
  isOpened?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  side?: SheetSide;
  size?: SheetSize;
  rounded?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<SheetProps>(), {
  showCloseButton: true,
  side: 'right',
  rounded: true,
  closeOnOverlayClick: true,
  closeOnEscape: true,
});

const { close, sheetRef } = useSheet(props);
const sheetSize = computed<SheetSize>(() => props.size ?? (props.side === 'top' || props.side === 'bottom' ? 'auto' : 'medium'));

const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    close();
  }
};
</script>

<template>
  <Transition :name="`sheet-${props.side}`">
    <div v-if="props.isOpened" class="sheet-wrapper">
      <div class="sheet-overlay" aria-hidden="true" @click="handleOverlayClick"></div>
      <section
        ref="sheetRef"
        :class="['sheet', props.side, sheetSize, { rounded: props.rounded }]"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        @click.stop
      >
        <div class="sheet-layout">
          <div v-if="props.title || props.description || props.showCloseButton" class="sheet-header">
            <div v-if="props.title || props.description" class="sheet-heading">
              <Text v-if="props.title" Element="h2" typography="title-2" class="sheet-title">
                {{ props.title }}
              </Text>
              <Gap v-if="props.title && props.description" :size="2" />
              <Text v-if="props.description" typography="paragraph-1" color="secondary" class="sheet-description">
                {{ props.description }}
              </Text>
            </div>
            <Button v-if="props.showCloseButton" class="sheet-close" mode="ghost" size="small" squared type="button"
              aria-label="Закрыть" @click="close">
              <IconXOutline />
            </Button>
          </div>

          <div class="sheet-content">
            <slot></slot>
          </div>

          <div v-if="$slots.footer" class="sheet-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </section>
    </div>
  </Transition>
</template>

<style scoped>
.sheet-wrapper {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.sheet-overlay {
  position: fixed;
  inset: 0;
  background-color: hsl(var(--background) / 0.8);
}

.sheet {
  --sheet-radius: 24px;

  position: fixed;
  z-index: 101;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  border-color: hsl(var(--border));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  box-shadow: 0 20px 25px -5px hsl(var(--background) / 0.8), 0 8px 10px -6px hsl(var(--background) / 0.8);
  outline: none;
}

.sheet-layout {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: inherit;
  padding: var(--gap-6);
}

.sheet-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--gap-4);
  align-items: start;
}

.sheet-heading {
  min-width: 0;
}

.sheet-title,
.sheet-description {
  margin: 0;
}

.sheet-content {
  min-height: 0;
  overflow-y: auto;
  padding: var(--gap-4) 0;
}

.sheet-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-2);
}

.right,
.left {
  top: 0;
  bottom: 0;
  width: var(--sheet-size);
  max-width: 100vw;
  border-left-width: 1px;
  border-left-style: solid;
}

.right {
  right: 0;
}

.right.rounded {
  border-top-left-radius: var(--sheet-radius);
  border-bottom-left-radius: var(--sheet-radius);
}

.left {
  left: 0;
  border-left-width: 0;
  border-right-width: 1px;
  border-right-style: solid;
}

.left.rounded {
  border-top-right-radius: var(--sheet-radius);
  border-bottom-right-radius: var(--sheet-radius);
}

.top,
.bottom {
  left: 0;
  right: 0;
  height: auto;
  max-height: calc(100vh - var(--gap-4));
  max-height: calc(100dvh - var(--gap-4));
  border-top-width: 1px;
  border-top-style: solid;
}

.top .sheet-layout,
.bottom .sheet-layout {
  height: auto;
}

.top.full,
.bottom.full {
  height: calc(100vh - var(--gap-4));
  height: calc(100dvh - var(--gap-4));
}

.top.small,
.top.medium,
.top.large,
.bottom.small,
.bottom.medium,
.bottom.large {
  height: var(--sheet-size);
}

.top.full .sheet-layout,
.bottom.full .sheet-layout {
  height: 100%;
}

.top.small .sheet-layout,
.top.medium .sheet-layout,
.top.large .sheet-layout,
.bottom.small .sheet-layout,
.bottom.medium .sheet-layout,
.bottom.large .sheet-layout {
  height: 100%;
}

.top {
  top: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.top.rounded {
  border-bottom-left-radius: var(--sheet-radius);
  border-bottom-right-radius: var(--sheet-radius);
}

.bottom {
  bottom: 0;
}

.bottom.rounded {
  border-top-left-radius: var(--sheet-radius);
  border-top-right-radius: var(--sheet-radius);
}

.small {
  --sheet-size: 320px;
}

.medium {
  --sheet-size: 448px;
}

.large {
  --sheet-size: 640px;
}

.right.full,
.left.full {
  --sheet-size: 100%;
}

.top.full,
.bottom.full,
.auto {
  --sheet-size: auto;
}

.sheet-right-enter-active,
.sheet-right-leave-active,
.sheet-left-enter-active,
.sheet-left-leave-active,
.sheet-top-enter-active,
.sheet-top-leave-active,
.sheet-bottom-enter-active,
.sheet-bottom-leave-active {
  transition: opacity 0.2s ease;
}

.sheet-right-enter-active .sheet,
.sheet-right-leave-active .sheet,
.sheet-left-enter-active .sheet,
.sheet-left-leave-active .sheet,
.sheet-top-enter-active .sheet,
.sheet-top-leave-active .sheet,
.sheet-bottom-enter-active .sheet,
.sheet-bottom-leave-active .sheet {
  transition: transform 0.2s ease;
}

.sheet-right-enter-from,
.sheet-right-leave-to,
.sheet-left-enter-from,
.sheet-left-leave-to,
.sheet-top-enter-from,
.sheet-top-leave-to,
.sheet-bottom-enter-from,
.sheet-bottom-leave-to {
  opacity: 0;
}

.sheet-right-enter-from .sheet,
.sheet-right-leave-to .sheet {
  transform: translateX(100%);
}

.sheet-left-enter-from .sheet,
.sheet-left-leave-to .sheet {
  transform: translateX(-100%);
}

.sheet-top-enter-from .sheet,
.sheet-top-leave-to .sheet {
  transform: translateY(-100%);
}

.sheet-bottom-enter-from .sheet,
.sheet-bottom-leave-to .sheet {
  transform: translateY(100%);
}

@media (max-width: 560px) {
  .sheet-layout {
    padding: var(--gap-5);
  }

  .right,
  .left {
    max-width: calc(100vw - var(--gap-4));
  }

  .top,
  .bottom {
    max-height: calc(100vh - var(--gap-4));
    max-height: calc(100dvh - var(--gap-4));
  }

  .sheet-footer {
    flex-direction: column-reverse;
  }
}
</style>
