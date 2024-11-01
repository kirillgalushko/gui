export declare const useHoverMenu: () => {
    floatingStyles: Readonly<import("vue").Ref<{
        position: import("@floating-ui/utils").Strategy;
        top: string;
        left: string;
        transform?: string;
        willChange?: string;
    }, {
        position: import("@floating-ui/utils").Strategy;
        top: string;
        left: string;
        transform?: string;
        willChange?: string;
    }>>;
    floatingRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    targetRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    isVisible: import("vue").Ref<boolean, boolean>;
    isSubmenuVisible: import("vue").Ref<boolean, boolean>;
    hideMenu: () => void;
    showHoverMenu: (event?: MouseEvent) => void;
};
