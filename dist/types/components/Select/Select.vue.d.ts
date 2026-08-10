import type { RegisteredOption } from "./useSelect";
import type { ComponentSize } from "../../types";
import type { PickerMode } from "../Picker/types";
export interface SelectProps {
    stretched?: boolean;
    label?: string;
    size?: ComponentSize;
    mode?: PickerMode;
    value?: string;
    name?: string;
    onChange?: (option: RegisteredOption) => void;
}
declare var __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    default?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SelectProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SelectProps> & Readonly<{}>, {
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
