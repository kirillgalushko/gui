export interface SidebarCollapsibleProps {
    defaultOpened?: boolean;
    disabled?: boolean;
    label: string;
    modelValue?: boolean;
    selected?: boolean;
}
declare var __VLS_8: {}, __VLS_10: {}, __VLS_19: {}, __VLS_25: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_8) => any;
} & {
    default?: (props: typeof __VLS_10) => any;
} & {
    icon?: (props: typeof __VLS_19) => any;
} & {
    default?: (props: typeof __VLS_25) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SidebarCollapsibleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (opened: boolean) => any;
    "update:modelValue": (opened: boolean) => any;
}, string, import("vue").PublicProps, Readonly<SidebarCollapsibleProps> & Readonly<{
    onChange?: ((opened: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: boolean;
    defaultOpened: boolean;
    selected: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
