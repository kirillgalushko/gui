export type AnnouncementBarMode = "default" | "contrast" | "accent" | "positive" | "warning" | "negative";
export type AnnouncementBarSize = "small" | "medium";
export interface AnnouncementBarProps {
    mode?: AnnouncementBarMode;
    size?: AnnouncementBarSize;
    role?: "status" | "alert";
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
}
declare function __VLS_template(): {
    slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<AnnouncementBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AnnouncementBarProps> & Readonly<{}>, {
    mode: AnnouncementBarMode;
    size: AnnouncementBarSize;
    role: "status" | "alert";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
