import { onScopeDispose, ref, type InjectionKey, type Ref } from "vue";

export const DROPDOWN_SUBMENU_HIDE_DELAY = 120;
export type DropdownSubmenuArea = "trigger" | "content";

export interface DropdownSubmenuContext {
  shown: Ref<boolean>;
  show: () => void;
  hide: () => void;
  scheduleHide: () => void;
  setHovered: (area: DropdownSubmenuArea, hovered: boolean) => void;
  setFocused: (area: DropdownSubmenuArea, focused: boolean) => void;
}

export const dropdownSubmenuContextKey: InjectionKey<DropdownSubmenuContext> =
  Symbol("dropdown-submenu");

export const useDropdownSubmenu = (
  hideDelay = DROPDOWN_SUBMENU_HIDE_DELAY,
): DropdownSubmenuContext => {
  const shown = ref(false);
  const hoveredAreas: Record<DropdownSubmenuArea, boolean> = {
    trigger: false,
    content: false,
  };
  const focusedAreas: Record<DropdownSubmenuArea, boolean> = {
    trigger: false,
    content: false,
  };
  let hideTimer: ReturnType<typeof setTimeout> | undefined;

  const cancelHide = () => {
    if (hideTimer !== undefined) {
      clearTimeout(hideTimer);
      hideTimer = undefined;
    }
  };

  const show = () => {
    cancelHide();
    shown.value = true;
  };

  const hide = () => {
    cancelHide();
    hoveredAreas.trigger = false;
    hoveredAreas.content = false;
    focusedAreas.trigger = false;
    focusedAreas.content = false;
    shown.value = false;
  };

  const hasActiveArea = () =>
    Object.values(hoveredAreas).some(Boolean) ||
    Object.values(focusedAreas).some(Boolean);

  const scheduleHide = () => {
    if (hasActiveArea()) return;

    cancelHide();
    hideTimer = setTimeout(hide, hideDelay);
  };

  const syncVisibility = () => {
    if (hasActiveArea()) {
      show();
      return;
    }

    scheduleHide();
  };

  const setHovered = (area: DropdownSubmenuArea, hovered: boolean) => {
    hoveredAreas[area] = hovered;
    syncVisibility();
  };

  const setFocused = (area: DropdownSubmenuArea, focused: boolean) => {
    focusedAreas[area] = focused;
    syncVisibility();
  };

  onScopeDispose(cancelHide);

  return {
    shown,
    show,
    hide,
    scheduleHide,
    setHovered,
    setFocused,
  };
};
