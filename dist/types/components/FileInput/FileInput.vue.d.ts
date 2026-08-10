import type { ComponentSize } from "../../types";
export interface FileInputProps {
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    label?: string;
    capture?: "user" | "environment";
    size?: ComponentSize;
}
declare const _default: import("vue").DefineComponent<FileInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (files: File[]) => any;
}, string, import("vue").PublicProps, Readonly<FileInputProps> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
}>, {
    size: ComponentSize;
    label: string;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    capture: "user" | "environment";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
