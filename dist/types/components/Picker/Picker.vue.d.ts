import type { ButtonProps } from '../Button/Button.vue';
export interface PickerProps {
    size?: ButtonProps['size'];
    stretched?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        icon?(_: {}): any;
    };
    refs: {
        elementRef: HTMLButtonElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<PickerProps, {
    elementRef: import("vue").Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PickerProps> & Readonly<{}>, {
    size: "small" | "medium" | "large" | "extra-small";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
