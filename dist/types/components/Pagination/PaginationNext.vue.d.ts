import type { ComponentSize } from "../../types";
export interface PaginationNextProps {
    Element?: "a" | "button";
    disabled?: boolean;
    size?: ComponentSize;
    label?: string;
    text?: string;
}
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PaginationNextProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PaginationNextProps> & Readonly<{}>, {
    label: string;
    text: string;
    Element: "a" | "button";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
