import type { FilterControlAppearance } from "./types";
export interface FilterClearProps extends FilterControlAppearance {
    label?: string;
    iconOnly?: boolean;
    disabled?: boolean;
}
declare var __VLS_9: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_9) => any;
} & {
    default?: (props: typeof __VLS_15) => any;
};
declare const __VLS_component: import("vue").DefineComponent<FilterClearProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
}, string, import("vue").PublicProps, Readonly<FilterClearProps> & Readonly<{
    onClear?: (() => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    label: string;
    iconOnly: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
