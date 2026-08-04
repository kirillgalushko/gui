import { computed, onBeforeUnmount, ref, type ComputedRef } from "vue";

export interface UseNavigationMenuOptions {
  closeDelayDuration?: number;
  defaultValue?: string;
  delayDuration?: number;
  modelValue?: () => string | undefined;
  onValueChange?: (value: string) => void;
}

export interface UseNavigationMenuResult {
  cancelScheduledChange: () => void;
  close: () => void;
  open: (value: string) => void;
  scheduleClose: () => void;
  scheduleOpen: (value: string) => void;
  toggle: (value: string) => void;
  value: ComputedRef<string>;
}

export const useNavigationMenu = (
  options: UseNavigationMenuOptions,
): UseNavigationMenuResult => {
  const uncontrolledValue = ref(options.defaultValue ?? "");
  const value = computed(
    () => options.modelValue?.() ?? uncontrolledValue.value,
  );
  let timer: ReturnType<typeof setTimeout> | undefined;

  const cancelScheduledChange = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  const setValue = (nextValue: string) => {
    cancelScheduledChange();

    if (options.modelValue?.() === undefined) {
      uncontrolledValue.value = nextValue;
    }

    options.onValueChange?.(nextValue);
  };

  const open = (nextValue: string) => setValue(nextValue);
  const close = () => setValue("");
  const toggle = (nextValue: string) =>
    value.value === nextValue ? close() : open(nextValue);

  const schedule = (callback: () => void, duration: number) => {
    cancelScheduledChange();
    timer = setTimeout(callback, duration);
  };

  const scheduleOpen = (nextValue: string) =>
    schedule(() => open(nextValue), options.delayDuration ?? 120);
  const scheduleClose = () =>
    schedule(close, options.closeDelayDuration ?? 180);

  onBeforeUnmount(cancelScheduledChange);

  return {
    cancelScheduledChange,
    close,
    open,
    scheduleClose,
    scheduleOpen,
    toggle,
    value,
  };
};
