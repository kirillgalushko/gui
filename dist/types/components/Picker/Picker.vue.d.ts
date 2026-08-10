import type { ComponentSize } from "../../types";
import type { PickerMode } from "./types";
export interface PickerProps {
    size?: ComponentSize;
    mode?: PickerMode;
    stretched?: boolean;
}
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    icon?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PickerProps, {
    elementRef: import("vue").Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PickerProps> & Readonly<{}>, {
    mode: PickerMode;
    size: ComponentSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
