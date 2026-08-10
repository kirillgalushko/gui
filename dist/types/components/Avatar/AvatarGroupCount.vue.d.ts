import type { AvatarColor, AvatarMode, AvatarShape } from "./Avatar.vue";
export interface AvatarGroupCountProps {
    ariaLabel?: string;
    color?: AvatarColor;
    count: number;
    mode?: AvatarMode;
    shape?: AvatarShape;
    size?: string;
}
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AvatarGroupCountProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AvatarGroupCountProps> & Readonly<{}>, {
    mode: AvatarMode;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
