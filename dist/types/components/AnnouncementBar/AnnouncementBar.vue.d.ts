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
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    actions?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AnnouncementBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AnnouncementBarProps> & Readonly<{}>, {
    mode: AnnouncementBarMode;
    size: AnnouncementBarSize;
    role: "status" | "alert";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
