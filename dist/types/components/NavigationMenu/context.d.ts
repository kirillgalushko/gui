import type { ComputedRef, InjectionKey, Ref } from "vue";
export type NavigationMenuOrientation = "horizontal" | "vertical";
export interface NavigationMenuContext {
    cancelScheduledChange: () => void;
    close: () => void;
    isMobile: ComputedRef<boolean>;
    open: (value: string) => void;
    openOnHover: ComputedRef<boolean>;
    orientation: ComputedRef<NavigationMenuOrientation>;
    registerTrigger: (value: string, element: HTMLElement | null) => void;
    scheduleClose: () => void;
    scheduleOpen: (value: string) => void;
    toggle: (value: string) => void;
    value: ComputedRef<string>;
}
export interface NavigationMenuItemContext {
    contentId: string;
    disabled: ComputedRef<boolean>;
    isOpen: ComputedRef<boolean>;
    triggerId: string;
    triggerRef: Ref<HTMLElement | null>;
    value: string;
}
export declare const navigationMenuContextKey: InjectionKey<NavigationMenuContext>;
export declare const navigationMenuItemContextKey: InjectionKey<NavigationMenuItemContext>;
