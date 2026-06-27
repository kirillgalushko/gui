export interface PasswordInputProps {
    modelValue?: string;
    maxWidth?: string;
    disabled?: boolean;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    descriptionId?: string;
}
declare const _default: import("vue").DefineComponent<PasswordInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<PasswordInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
