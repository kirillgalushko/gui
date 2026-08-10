import type { AvatarColor, AvatarMode, AvatarShape } from "./Avatar.vue";
export interface AvatarGroupCountProps {
    ariaLabel?: string;
    color?: AvatarColor;
    count: number;
    mode?: AvatarMode;
    shape?: AvatarShape;
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
declare const __VLS_component: import("vue").DefineComponent<AvatarGroupCountProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AvatarGroupCountProps> & Readonly<{}>, {
    mode: AvatarMode;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
