<script setup lang="ts">
import { computed, useSlots, type ComponentPublicInstance } from "vue";
import { IconXOutline } from "@gui/icons";
import Button from "../Button/Button.vue";
import Card from "../Card/Card.vue";
import Gap from "../Gap/Gap.vue";
import Text from "../Text/Text.vue";
import SheetContent from "./SheetContent.vue";
import SheetFooter from "./SheetFooter.vue";
import SheetHeader from "./SheetHeader.vue";
import { useSheet } from "./useSheet";

type SheetSide = "top" | "right" | "bottom" | "left";
type SheetSize = "auto" | "extra-small" | "small" | "medium" | "large" | "full";
type SheetMode = "default" | "floating";

export interface SheetProps {
  isOpened?: boolean;
  onClose?: () => void;
  contentStretched?: boolean;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  side?: SheetSide;
  size?: SheetSize;
  mode?: SheetMode;
  rounded?: boolean;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<SheetProps>(), {
  showCloseButton: true,
  side: "right",
  mode: "floating",
  rounded: true,
  showOverlay: true,
  closeOnOverlayClick: true,
  closeOnEscape: true,
});

const { close, sheetRef } = useSheet(props);
const slots = useSlots();
const sheetSize = computed<SheetSize>(
  () =>
    props.size ??
    (props.side === "top" || props.side === "bottom" ? "auto" : "medium"),
);
const cardBorderRadius = computed(() =>
  props.mode === "floating" && props.rounded ? 24 : 0,
);
const hasHeader = computed(
  () =>
    slots.header ||
    props.title ||
    props.description ||
    props.showCloseButton ||
    slots.actions,
);

type CardInstance = ComponentPublicInstance & {
  element?: HTMLElement | null;
};

const setSheetRef = (card: Element | ComponentPublicInstance | null) => {
  sheetRef.value =
    card instanceof HTMLElement
      ? card
      : ((card as CardInstance | null)?.element ?? null);
};

const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    close();
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition :name="`sheet-${props.side}`">
      <div v-if="props.isOpened" class="sheet-wrapper">
        <div
          v-if="props.showOverlay"
          class="sheet-overlay"
          aria-hidden="true"
          @click="handleOverlayClick"
        ></div>
        <Card
          :ref="setSheetRef"
          Element="section"
          :class="['sheet', props.side, sheetSize, props.mode]"
          :border-radius="cardBorderRadius"
          :padding="16"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          :stretched="props.side === 'left' || props.side === 'right'"
          full-height
          @click.stop
        >
          <SheetHeader v-if="hasHeader" class="sheet-header" border>
            <div
              v-if="$slots.header || props.title || props.description"
              class="sheet-heading"
            >
              <slot v-if="$slots.header" name="header"></slot>
              <Text
                v-else-if="props.title"
                Element="h2"
                typography="title-2"
                class="sheet-title"
              >
                {{ props.title }}
              </Text>
              <Gap
                v-if="!$slots.header && props.title && props.description"
                :size="2"
              />
              <Text
                v-if="!$slots.header && props.description"
                typography="paragraph-1"
                color="secondary"
                class="sheet-description"
              >
                {{ props.description }}
              </Text>
            </div>
            <div
              v-if="$slots.actions || props.showCloseButton"
              class="sheet-actions"
            >
              <slot name="actions"></slot>
              <Button
                v-if="props.showCloseButton"
                mode="ghost"
                size="small"
                squared
                type="button"
                aria-label="Закрыть"
                @click="close"
              >
                <IconXOutline />
              </Button>
            </div>
          </SheetHeader>

          <SheetContent
            :class="[
              'sheet-content',
              { 'sheet-content--stretched': props.contentStretched },
            ]"
          >
            <slot></slot>
          </SheetContent>

          <SheetFooter v-if="$slots.footer" class="sheet-footer">
            <slot name="footer"></slot>
          </SheetFooter>
        </Card>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sheet-wrapper {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
}

.sheet-overlay {
  position: fixed;
  inset: 0;
  background-color: hsl(var(--background) / 0.8);
  pointer-events: auto;
  backdrop-filter: blur(4px);
}

.sheet {
  --sheet-inset: var(--gap-2);

  position: fixed;
  z-index: 101;
  display: flex;
  min-height: 0;
  max-height: inherit;
  flex-direction: column;
  overflow: hidden;
  outline: none;
  pointer-events: auto;
}

.sheet-header {
  position: relative;
  display: grid;
  flex: 0 0 auto;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--gap-4);
  align-items: start;
}

.sheet-heading {
  min-width: 0;
}

.sheet-title {
  line-height: 32px;
}

.sheet-title,
.sheet-description {
  margin: 0;
}

.sheet-content {
  display: flex;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  overflow-y: auto;
}

.sheet-content.sheet-content--stretched {
  overflow: hidden;
}

.sheet-content.sheet-content--stretched > :deep(*) {
  min-height: 0;
  flex: 1;
}

.sheet-footer {
  flex: 0 0 auto;
  justify-content: flex-end;
}

.sheet-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-1);
}

.right,
.left {
  top: 0;
  bottom: 0;
  width: var(--sheet-size);
  max-width: 100vw;
}

.right {
  right: 0;
}

.left {
  left: 0;
}

.top,
.bottom {
  left: 0;
  right: 0;
  height: auto;
  max-height: calc(100vh - var(--gap-4));
  max-height: calc(100dvh - var(--gap-4));
}

.top.full,
.bottom.full {
  height: calc(100vh - var(--gap-4));
  height: calc(100dvh - var(--gap-4));
}

.top.extra-small,
.top.small,
.top.medium,
.top.large,
.bottom.extra-small,
.bottom.small,
.bottom.medium,
.bottom.large {
  height: var(--sheet-size);
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.right.floating,
.left.floating {
  top: var(--sheet-inset);
  bottom: var(--sheet-inset);
  max-width: calc(100vw - var(--sheet-inset) - var(--sheet-inset));
}

.right.floating {
  right: var(--sheet-inset);
}

.left.floating {
  left: var(--sheet-inset);
}

.top.floating,
.bottom.floating {
  left: var(--sheet-inset);
  right: var(--sheet-inset);
  max-height: calc(100vh - var(--sheet-inset) - var(--sheet-inset));
  max-height: calc(100dvh - var(--sheet-inset) - var(--sheet-inset));
}

.top.floating {
  top: var(--sheet-inset);
}

.bottom.floating {
  bottom: var(--sheet-inset);
}

.extra-small {
  --sheet-size: 320px;
}

.small {
  --sheet-size: 380px;
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

.sheet-right-enter-active .sheet-overlay,
.sheet-right-leave-active .sheet-overlay,
.sheet-left-enter-active .sheet-overlay,
.sheet-left-leave-active .sheet-overlay,
.sheet-top-enter-active .sheet-overlay,
.sheet-top-leave-active .sheet-overlay,
.sheet-bottom-enter-active .sheet-overlay,
.sheet-bottom-leave-active .sheet-overlay {
  transition: backdrop-filter 0.2s ease;
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

.sheet-right-enter-from .sheet-overlay,
.sheet-right-leave-to .sheet-overlay,
.sheet-left-enter-from .sheet-overlay,
.sheet-left-leave-to .sheet-overlay,
.sheet-top-enter-from .sheet-overlay,
.sheet-top-leave-to .sheet-overlay,
.sheet-bottom-enter-from .sheet-overlay,
.sheet-bottom-leave-to .sheet-overlay {
  backdrop-filter: blur(0px);
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
