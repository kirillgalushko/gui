export interface BaseMenuCheckboxItemProps {
    disabled?: boolean;
}
type __VLS_Props = BaseMenuCheckboxItemProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: boolean;
};
declare var __VLS_9: {}, __VLS_11: {
    checked: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    indicator?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
