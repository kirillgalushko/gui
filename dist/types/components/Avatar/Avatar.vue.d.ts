import type { Color } from "../../types/colors";
export type AvatarMode = "default" | "accent" | "secondary" | "ghost" | "outlined" | "negative" | "positive" | "danger" | "warning";
export type AvatarColor = Color;
export type AvatarShape = "square" | "circle";
export interface AvatarProps {
    shape?: AvatarShape;
    mode?: AvatarMode;
    color?: AvatarColor;
    src?: string;
    name?: string;
    size?: string;
}
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    corner?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AvatarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AvatarProps> & Readonly<{}>, {
    mode: AvatarMode;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
