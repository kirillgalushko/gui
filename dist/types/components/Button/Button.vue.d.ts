import type { ComponentSize } from "../../types";
export interface ButtonProps {
    asChild?: boolean;
    mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size?: ComponentSize;
    stretched?: boolean;
    squared?: boolean;
    rounded?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
}
declare var __VLS_6: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: ComponentSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
