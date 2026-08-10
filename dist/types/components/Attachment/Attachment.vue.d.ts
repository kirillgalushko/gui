import type { AttachmentOrientation, AttachmentSize, AttachmentState } from "./types";
export interface AttachmentProps {
    orientation?: AttachmentOrientation;
    size?: AttachmentSize;
    state?: AttachmentState;
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
declare const __VLS_component: import("vue").DefineComponent<AttachmentProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AttachmentProps> & Readonly<{}>, {
    size: AttachmentSize;
    stretched: boolean;
    orientation: AttachmentOrientation;
    state: AttachmentState;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
