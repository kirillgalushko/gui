export interface SidebarItemProps {
    selected?: boolean;
    tooltipDisabled?: boolean;
}
declare var __VLS_5: {}, __VLS_7: {}, __VLS_9: {}, __VLS_11: {}, __VLS_13: {}, __VLS_15: {}, __VLS_17: {}, __VLS_19: {};
type __VLS_Slots = {} & {
    left?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_7) => any;
} & {
    right?: (props: typeof __VLS_9) => any;
} & {
    compact?: (props: typeof __VLS_11) => any;
} & {
    left?: (props: typeof __VLS_13) => any;
} & {
    'compact-indicator'?: (props: typeof __VLS_15) => any;
} & {
    tooltip?: (props: typeof __VLS_17) => any;
} & {
    default?: (props: typeof __VLS_19) => any;
};
declare const __VLS_component: import("vue").DefineComponent<SidebarItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarItemProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
