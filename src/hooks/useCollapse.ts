import { computed, ref, useId } from "vue";

export type CollapseBooleanSource =
  | boolean
  | (() => boolean)
  | { readonly value: boolean };

export type CollapseState = {
  value: boolean;
};

export interface UseCollapseOptions {
  defaultOpened?: boolean;
  disabled?: CollapseBooleanSource;
  id?: string;
  onChange?: (opened: boolean) => void;
  opened?: CollapseState;
}

const resolveBoolean = (source: CollapseBooleanSource | undefined): boolean => {
  if (typeof source === "function") return source();
  if (typeof source === "object") return source.value;
  return source ?? false;
};

export const useCollapse = (options: UseCollapseOptions = {}) => {
  const generatedId = useId();
  const internalOpened = ref(options.defaultOpened ?? false);
  const opened = options.opened ?? internalOpened;
  const baseId = options.id ?? `collapse-${generatedId}`;
  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;
  const disabled = computed(() => resolveBoolean(options.disabled));

  const setOpened = (nextOpened: boolean) => {
    if (opened.value === nextOpened) return;

    opened.value = nextOpened;
    options.onChange?.(nextOpened);
  };

  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const toggle = () => setOpened(!opened.value);

  const triggerProps = {
    id: triggerId,
    "aria-controls": contentId,
    get "aria-expanded"() {
      return opened.value;
    },
    get "aria-disabled"() {
      return disabled.value || undefined;
    },
    onClick: () => {
      if (!disabled.value) toggle();
    },
  };

  const collapseProps = {
    id: contentId,
    labelledBy: triggerId,
    get opened() {
      return opened.value;
    },
    role: "region" as const,
  };

  return {
    close,
    collapseProps,
    open,
    opened,
    setOpened,
    toggle,
    triggerProps,
  };
};
