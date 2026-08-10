import { type BaseMenuRadioValue } from "./baseMenuRadioGroup";
export interface BaseMenuRadioItemProps {
    value: BaseMenuRadioValue;
    disabled?: boolean;
}
declare var __VLS_9: {}, __VLS_11: {
    checked: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    indicator?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<BaseMenuRadioItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<BaseMenuRadioItemProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
