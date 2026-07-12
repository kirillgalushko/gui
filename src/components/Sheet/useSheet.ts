import { onBeforeUnmount, onMounted, ref, watch } from "vue";

export interface UseSheetOptions {
  isOpened?: boolean;
  showOverlay?: boolean;
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
  onClose?: () => void;
}

export const useSheet = (options: UseSheetOptions) => {
  const previouslyFocusedElement = ref<HTMLElement | null>(null);
  const previousBodyOverflow = ref("");
  const hasBodyOverflowSnapshot = ref(false);
  const sheetRef = ref<HTMLElement | null>(null);

  const close = () => {
    options.onClose?.();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && options.closeOnEscape && options.isOpened) {
      close();
    }
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (
      !options.isOpened ||
      options.showOverlay ||
      !options.closeOnOverlayClick
    ) {
      return;
    }

    const target = event.target;

    if (!(target instanceof Node) || sheetRef.value?.contains(target)) {
      return;
    }

    if (target instanceof Element && target.closest(".v-popper__popper")) {
      return;
    }

    close();
  };

  const handleOpenChange = (isOpened?: boolean) => {
    if (typeof document === "undefined") {
      return;
    }

    if (isOpened) {
      previouslyFocusedElement.value =
        document.activeElement as HTMLElement | null;

      if (options.showOverlay) {
        previousBodyOverflow.value = document.body.style.overflow;
        hasBodyOverflowSnapshot.value = true;
        document.body.style.overflow = "hidden";
      }

      requestAnimationFrame(() => {
        sheetRef.value?.focus();
      });

      return;
    }

    if (hasBodyOverflowSnapshot.value) {
      document.body.style.overflow = previousBodyOverflow.value;
      hasBodyOverflowSnapshot.value = false;
    }

    previouslyFocusedElement.value?.focus?.();
  };

  watch(() => options.isOpened, handleOpenChange);

  onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handlePointerDown);
    handleOpenChange(options.isOpened);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("pointerdown", handlePointerDown);

    if (hasBodyOverflowSnapshot.value) {
      document.body.style.overflow = previousBodyOverflow.value;
    }
  });

  return {
    close,
    sheetRef,
  };
};
