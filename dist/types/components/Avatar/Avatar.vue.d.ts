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
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<AvatarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AvatarProps> & Readonly<{}>, {
    mode: AvatarMode;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
