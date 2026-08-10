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
declare let __VLS_typeProps: VisibilityMenuProps;
type __VLS_PublicProps = {
    modelValue?: string[];
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        trigger?(_: {
            label: string;
        }): any;
        item?(_: {
            item: VisibilityOption;
            visible: boolean;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (value: string, visible: boolean) => any;
    "update:modelValue": (modelValue: string[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onToggle?: ((value: string, visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: string[]) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    label: string;
    contentWidth: DropdownContentWidth;
    menuLabel: string;
    minVisible: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
