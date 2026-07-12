export interface PincodeInputProps {
    modelValue?: string;
    autoFocus?: boolean;
    stretched?: boolean;
    disabled?: boolean;
    loading?: boolean;
    length?: number;
    succeed?: boolean;
    invalid?: boolean;
    description?: string;
    errorMessage?: string;
    descriptionId?: string;
}
declare const _default: import("vue").DefineComponent<PincodeInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    complete: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<PincodeInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {
    length: number;
    stretched: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
