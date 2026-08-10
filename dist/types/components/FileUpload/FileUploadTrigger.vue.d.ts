import type { ComponentSize } from "../../types";
export interface FileUploadTriggerProps {
    label?: string;
    mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size?: ComponentSize;
    stretched?: boolean;
}
declare var __VLS_13: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<FileUploadTriggerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FileUploadTriggerProps> & Readonly<{}>, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: ComponentSize;
    label: string;
    stretched: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
