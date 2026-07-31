import {
  onBeforeUnmount,
  onMounted,
  ref,
  toValue,
  watch,
  type MaybeRefOrGetter,
} from "vue";
import { useFloating, flip, shift } from "@floating-ui/vue";

export interface UseContextMenuOptions {
  enabled?: MaybeRefOrGetter<boolean>;
}

let hideActiveContextMenu: (() => void) | null = null;

const isEventTargetWithinRef = (
  target: Node | null,
  refNode: HTMLElement | null,
): boolean => {
  while (target) {
    if (target === refNode) return true;
    target = (target as HTMLElement).parentNode;
  }
  return false;
};

const resolveTargetElement = (value: unknown): HTMLElement | null => {
  if (value instanceof HTMLElement) return value;

  const element = (value as { $el?: unknown } | null)?.$el;
  return element instanceof HTMLElement ? element : null;
};

export const useContextMenu = (options: UseContextMenuOptions = {}) => {
  const isContextMenuVisible = ref(false);
  const position = ref({ x: 0, y: 0 });
  const targetRef = ref<HTMLElement | null>(null);
  const positionRef = ref<HTMLElement | null>(null);
  const floatingRef = ref(null);
  const middleware = ref([flip(), shift()]);
  const { floatingStyles, update } = useFloating(positionRef, floatingRef, {
    placement: "right-start",
    strategy: "fixed",
    middleware,
  });

  let isMounted = false;
  let boundTarget: HTMLElement | null = null;

  const isEnabled = () => toValue(options.enabled ?? true);

  const hideContextMenu = () => {
    isContextMenuVisible.value = false;

    if (hideActiveContextMenu === hideContextMenu) {
      hideActiveContextMenu = null;
    }
  };

  const showContextMenu = (event: MouseEvent) => {
    if (!isEnabled()) return;

    event.preventDefault();
    hideActiveContextMenu?.();
    hideActiveContextMenu = hideContextMenu;
    position.value = { x: event.clientX, y: event.clientY };
    isContextMenuVisible.value = true;
    update();
  };

  const bindTarget = (target: HTMLElement | null) => {
    if (boundTarget === target) return;

    boundTarget?.removeEventListener("contextmenu", showContextMenu);
    boundTarget = target;

    if (isMounted) {
      boundTarget?.addEventListener("contextmenu", showContextMenu);
    }
  };

  const setTargetRef = (value: unknown) => {
    targetRef.value = resolveTargetElement(value);
  };

  const handleDocumentContextMenu = (event: MouseEvent) => {
    if (
      targetRef.value &&
      !isEventTargetWithinRef(event.target as Node, targetRef.value)
    ) {
      isContextMenuVisible.value = false;
    }
  };

  onMounted(() => {
    isMounted = true;
    boundTarget?.addEventListener("contextmenu", showContextMenu);
    document.addEventListener("click", hideContextMenu);
    document.addEventListener("contextmenu", handleDocumentContextMenu);
  });

  onBeforeUnmount(() => {
    isMounted = false;
    bindTarget(null);
    document.removeEventListener("click", hideContextMenu);
    document.removeEventListener("contextmenu", handleDocumentContextMenu);
    hideContextMenu();
  });

  watch(targetRef, (target) => {
    bindTarget(target);
    if (!target) hideContextMenu();
  });
  watch(isEnabled, (enabled) => {
    if (!enabled) hideContextMenu();
  });

  return {
    contextMenuData: {
      floatingStyles,
      floatingRef,
      position,
      positionRef,
      isContextMenuVisible,
    },
    targetRef,
    setTargetRef,
  };
};
