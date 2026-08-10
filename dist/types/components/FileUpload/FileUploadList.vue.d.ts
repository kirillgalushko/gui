import type { FileUploadListOrientation } from "./types";
export interface FileUploadListProps {
    orientation?: FileUploadListOrientation;
}
declare var __VLS_1: {
    files: File[];
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<FileUploadListProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FileUploadListProps> & Readonly<{}>, {
    orientation: FileUploadListOrientation;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
