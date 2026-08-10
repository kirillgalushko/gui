import { type RadioGroupValue } from "./radioGroup";
export interface RadioGroupItemProps {
    value: RadioGroupValue;
    id?: string;
    disabled?: boolean;
    invalid?: boolean;
}
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    description?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<RadioGroupItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<RadioGroupItemProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
