import type { FileUploadRejection, FileUploadSize, FileUploadValidator } from "./types";
export interface FileUploadProps {
    accept?: string;
    capture?: "user" | "environment";
    defaultValue?: File[];
    disabled?: boolean;
    invalid?: boolean;
    maxFiles?: number;
    maxSize?: number;
    modelValue?: File[];
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: FileUploadSize;
    stretched?: boolean;
    validate?: FileUploadValidator;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        input: HTMLInputElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<FileUploadProps, {
    clear: () => void;
    open: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (files: File[]) => any;
    "update:modelValue": (files: File[]) => any;
    accept: (files: File[]) => any;
    reject: (rejections: FileUploadRejection[]) => any;
}, string, import("vue").PublicProps, Readonly<FileUploadProps> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    onAccept?: ((files: File[]) => any) | undefined;
    onReject?: ((rejections: FileUploadRejection[]) => any) | undefined;
}>, {
    size: FileUploadSize;
    invalid: boolean;
    name: string;
    stretched: boolean;
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    defaultValue: File[];
    modelValue: File[];
    accept: string;
    capture: "user" | "environment";
    maxFiles: number;
    maxSize: number;
    validate: FileUploadValidator;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
