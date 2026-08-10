import { type BaseMenuItemProps } from "../BaseMenu/BaseMenuItem.vue";
export type SelectOptionProps = BaseMenuItemProps & {
    label: string;
    value: string;
};
declare var __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SelectOptionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SelectOptionProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
