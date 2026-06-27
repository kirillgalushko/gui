export interface PasswordStrengthRule {
    id?: string | number;
    label: string;
    valid: boolean;
}
export interface PasswordStrengthInputProps {
    modelValue?: string;
    rules?: PasswordStrengthRule[];
    progress?: number;
    progressSegments?: number;
    progressHeight?: string;
    progressGap?: string;
    weakColor?: string;
    mediumColor?: string;
    strongColor?: string;
    maxWidth?: string;
    disabled?: boolean;
    description?: string;
    errorMessage?: string;
    invalid?: boolean;
    descriptionId?: string;
}
declare const _default: import("vue").DefineComponent<PasswordStrengthInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<PasswordStrengthInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    maxWidth: string;
    rules: PasswordStrengthRule[];
    progressSegments: number;
    progressHeight: string;
    progressGap: string;
    weakColor: string;
    mediumColor: string;
    strongColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
