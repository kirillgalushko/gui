import type { ChipMode, ChipSize, ChipValue } from "./types";
export interface ChipGroupProps {
    mode?: ChipMode;
    size?: ChipSize;
    disabled?: boolean;
    name?: string;
    stretched?: boolean;
}
type __VLS_Props = ChipGroupProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: ChipValue | ChipValue[] | null;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ChipValue | ChipValue[] | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: ChipValue | ChipValue[] | null) => any) | undefined;
}>, {
    mode: ChipMode;
    size: ChipSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
