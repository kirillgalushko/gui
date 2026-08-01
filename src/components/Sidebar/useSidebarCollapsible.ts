import { computed, ref, toValue, type MaybeRefOrGetter } from "vue";

export interface UseSidebarCollapsibleOptions {
  defaultOpened?: MaybeRefOrGetter<boolean>;
  disabled?: MaybeRefOrGetter<boolean>;
  modelValue?: MaybeRefOrGetter<boolean | undefined>;
  onChange?: (opened: boolean) => void;
}

export const useSidebarCollapsible = (
  options: UseSidebarCollapsibleOptions = {},
) => {
  const internalOpened = ref(toValue(options.defaultOpened ?? false));
  const opened = computed(
    () => toValue(options.modelValue) ?? internalOpened.value,
  );

  const toggle = (): void => {
    if (toValue(options.disabled ?? false)) return;

    const nextOpened = !opened.value;
    if (toValue(options.modelValue) === undefined) {
      internalOpened.value = nextOpened;
    }
    options.onChange?.(nextOpened);
  };

  return { opened, toggle };
};
