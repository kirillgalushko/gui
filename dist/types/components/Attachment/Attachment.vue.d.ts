import type { AttachmentOrientation, AttachmentSize, AttachmentState } from "./types";
export interface AttachmentProps {
    orientation?: AttachmentOrientation;
    size?: AttachmentSize;
    state?: AttachmentState;
    stretched?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AttachmentProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AttachmentProps> & Readonly<{}>, {
    size: AttachmentSize;
    stretched: boolean;
    orientation: AttachmentOrientation;
    state: AttachmentState;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
