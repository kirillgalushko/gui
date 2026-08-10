import type { ChipSize, ChipValue } from "./types";
export interface ChipProps {
    value?: ChipValue;
    size?: ChipSize;
    selected?: boolean;
    disabled?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ChipProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: ChipValue | undefined) => any;
}, string, import("vue").PublicProps, Readonly<ChipProps> & Readonly<{
    onSelect?: ((value: ChipValue | undefined) => any) | undefined;
}>, {
    size: ChipSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
