export declare const useContextMenu: () => {
    contextMenuData: {
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
        floatingRef: import("vue").Ref<null, null>;
        position: import("vue").Ref<{
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        } | {
            x: number;
            y: number;
        }>;
        positionRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
        isContextMenuVisible: import("vue").Ref<boolean, boolean>;
    };
    targetRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
};
