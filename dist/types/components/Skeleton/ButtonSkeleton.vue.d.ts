export type ButtonSkeletonSize = 'extra-small' | 'small' | 'medium' | 'large';
export interface ButtonSkeletonProps {
    loading?: boolean;
    size?: ButtonSkeletonSize;
    width?: string;
    stretched?: boolean;
    squared?: boolean;
    rounded?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ButtonSkeletonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ButtonSkeletonProps> & Readonly<{}>, {
    size: ButtonSkeletonSize;
    width: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
