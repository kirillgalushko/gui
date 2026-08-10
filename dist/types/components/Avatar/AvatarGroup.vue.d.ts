import type { AvatarShape } from "./Avatar.vue";
export interface AvatarGroupProps {
    overlap?: string;
    shape?: AvatarShape;
    size?: string;
    surface?: string;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<AvatarGroupProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<AvatarGroupProps> & Readonly<{}>, {
    size: string;
    shape: AvatarShape;
    surface: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
