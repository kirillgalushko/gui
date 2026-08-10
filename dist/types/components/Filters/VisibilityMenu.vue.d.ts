import { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import type { FilterControlAppearance, VisibilityOption } from "./types";
export interface VisibilityMenuProps extends FilterControlAppearance {
    items: VisibilityOption[];
    label?: string;
    menuLabel?: string;
    minVisible?: number;
    disabled?: boolean;
    contentWidth?: DropdownContentWidth;
    contentMaxWidth?: string;
}
type __VLS_Props = VisibilityMenuProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: string[];
};
declare var __VLS_5: {
    label: string;
}, __VLS_24: {
    item: VisibilityOption;
    visible: boolean;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_5) => any;
} & {
    item?: (props: typeof __VLS_24) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (value: string, visible: boolean) => any;
    "update:modelValue": (value: string[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onToggle?: ((value: string, visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    label: string;
    contentWidth: DropdownContentWidth;
    menuLabel: string;
    minVisible: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
