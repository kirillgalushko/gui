import type { Padding } from "../../types";
export interface SidebarProps {
    mode?: "default" | "floating";
    padding?: Padding;
    width?: number;
    maxWidth?: string;
    minWidth?: string;
    compactWidth?: number;
    collapseThreshold?: number;
    mobile?: boolean;
    mobileOpen?: boolean;
}
declare var __VLS_5: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SidebarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:mobileOpen": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<SidebarProps> & Readonly<{
    "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
}>, {
    mode: "default" | "floating";
    width: number;
    maxWidth: string;
    minWidth: string;
    mobileOpen: boolean;
    mobile: boolean;
    padding: Padding;
    compactWidth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
