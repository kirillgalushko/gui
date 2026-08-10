export interface SwitchProps {
    disabled?: boolean;
    size?: "small" | "medium";
}
type __VLS_Props = SwitchProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    size: "small" | "medium";
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
