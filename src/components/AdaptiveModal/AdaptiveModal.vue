<script setup lang="ts">
import { computed } from "vue";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import Modal from "../Modal/Modal.vue";
import type { ModalProps } from "../Modal/Modal.vue";
import Sheet from "../Sheet/Sheet.vue";
import type { SheetProps } from "../Sheet/Sheet.vue";

type CommonOverlayProp =
  | "isOpened"
  | "onClose"
  | "showCloseButton"
  | "title"
  | "description";
type AdaptiveSheetProp = CommonOverlayProp | "side";

export interface AdaptiveModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  modalProps?: Partial<Omit<ModalProps, CommonOverlayProp>>;
  sheetProps?: Partial<Omit<SheetProps, AdaptiveSheetProp>>;
}

const props = withDefaults(defineProps<AdaptiveModalProps>(), {
  showCloseButton: false,
});

const viewport = useViewportBreakpoint();
const isMobile = computed(() => viewport.isMobile);
</script>

<template>
  <Sheet
    v-if="isMobile"
    v-bind="props.sheetProps"
    :isOpened="props.isOpened"
    :onClose="props.onClose"
    :showCloseButton="props.showCloseButton"
    :title="props.title"
    :description="props.description"
    side="bottom"
  >
    <slot></slot>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </Sheet>

  <Modal
    v-else
    v-bind="props.modalProps"
    :isOpened="props.isOpened"
    :onClose="props.onClose"
    :showCloseButton="props.showCloseButton"
    :title="props.title"
    :description="props.description"
  >
    <slot></slot>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </Modal>
</template>
