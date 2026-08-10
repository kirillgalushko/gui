import { type NavigationMenuOrientation } from "./context";
export interface NavigationMenuProps {
    ariaLabel?: string;
    closeDelayDuration?: number;
    defaultValue?: string;
    delayDuration?: number;
    modelValue?: string;
    openOnHover?: boolean;
    orientation?: NavigationMenuOrientation;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        navigationMenuRef: HTMLElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<NavigationMenuProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<NavigationMenuProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    ariaLabel: string;
    orientation: NavigationMenuOrientation;
    defaultValue: string;
    modelValue: string;
    closeDelayDuration: number;
    delayDuration: number;
    openOnHover: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
