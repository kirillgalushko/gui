import { type InjectionKey, type Ref } from "vue";
export declare const DROPDOWN_SUBMENU_HIDE_DELAY = 120;
export type DropdownSubmenuArea = "trigger" | "content";
export interface DropdownSubmenuContext {
    shown: Ref<boolean>;
    show: () => void;
    hide: () => void;
    scheduleHide: () => void;
    setHovered: (area: DropdownSubmenuArea, hovered: boolean) => void;
    setFocused: (area: DropdownSubmenuArea, focused: boolean) => void;
}
export declare const dropdownSubmenuContextKey: InjectionKey<DropdownSubmenuContext>;
export declare const useDropdownSubmenu: (hideDelay?: number) => DropdownSubmenuContext;
