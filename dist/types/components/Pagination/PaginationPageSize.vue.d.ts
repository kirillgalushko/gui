import type { ComponentSize } from "../../types";
import type { PickerMode } from "../Picker/types";
export interface PaginationPageSizeProps {
    value: number;
    options?: readonly number[];
    label?: string;
    size?: ComponentSize;
    mode?: PickerMode;
}
declare const _default: import("vue").DefineComponent<PaginationPageSizeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<PaginationPageSizeProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
}>, {
    mode: PickerMode;
    size: ComponentSize;
    label: string;
    options: readonly number[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
