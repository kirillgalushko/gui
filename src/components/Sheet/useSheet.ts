import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

export interface UseSheetOptions {
  isOpened?: boolean;
  closeOnEscape: boolean;
  onClose?: () => void;
}

export const useSheet = (options: UseSheetOptions) => {
  const previouslyFocusedElement = ref<HTMLElement | null>(null);
  const previousBodyOverflow = ref('');
  const hasBodyOverflowSnapshot = ref(false);
  const sheetRef = ref<HTMLElement | null>(null);

  const close = () => {
    options.onClose?.();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && options.closeOnEscape && options.isOpened) {
      close();
    }
  };

  const handleOpenChange = (isOpened?: boolean) => {
    if (typeof document === 'undefined') {
      return;
    }

    if (isOpened) {
      previouslyFocusedElement.value = document.activeElement as HTMLElement | null;
      previousBodyOverflow.value = document.body.style.overflow;
      hasBodyOverflowSnapshot.value = true;
      document.body.style.overflow = 'hidden';

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
    document.addEventListener('keydown', handleKeydown);
    handleOpenChange(options.isOpened);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown);

    if (hasBodyOverflowSnapshot.value) {
      document.body.style.overflow = previousBodyOverflow.value;
    }
  });

  return {
    close,
    sheetRef,
  };
};
