import type { ComponentSize } from "../../types";
export interface FileUploadTriggerProps {
    label?: string;
    mode?: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size?: ComponentSize;
    stretched?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<FileUploadTriggerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FileUploadTriggerProps> & Readonly<{}>, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: ComponentSize;
    label: string;
    stretched: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
