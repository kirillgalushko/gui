import type { ActiveFilter, FilterControlAppearance, FilterField, FilterItemLayout } from "./types";
export interface FiltersProps extends FilterControlAppearance {
    fields: FilterField[];
    addLabel?: string;
    clearLabel?: string;
    selectedLabel?: string;
    showClear?: boolean;
    showMenu?: boolean;
    showItems?: boolean;
    allowDuplicateFields?: boolean;
    disabled?: boolean;
    createId?: () => string;
    itemLayout?: FilterItemLayout;
}
type __VLS_Props = FiltersProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: ActiveFilter[];
};
declare var __VLS_12: {
    label: string;
}, __VLS_14: {
    field: FilterField<unknown>;
}, __VLS_16: {
    field: FilterField<unknown>;
    option: import("./types").FilterOption<unknown>;
}, __VLS_26: {
    field: FilterField<unknown>;
}, __VLS_28: {
    operator: import("./types").FilterOperator;
    filter: ActiveFilter<unknown>;
}, __VLS_30: {
    filter: ActiveFilter<unknown>;
    field: FilterField<unknown>;
    label: string;
}, __VLS_32: {
    filter: ActiveFilter<unknown>;
    field: FilterField<unknown>;
    updateFilter: (patch: Partial<ActiveFilter>) => void;
}, __VLS_41: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_12) => any;
} & {
    field?: (props: typeof __VLS_14) => any;
} & {
    option?: (props: typeof __VLS_16) => any;
} & {
    'filter-field'?: (props: typeof __VLS_26) => any;
} & {
    operator?: (props: typeof __VLS_28) => any;
} & {
    value?: (props: typeof __VLS_30) => any;
} & {
    'value-menu'?: (props: typeof __VLS_32) => any;
} & {
    'clear-icon'?: (props: typeof __VLS_41) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
    add: (filter: ActiveFilter<unknown>) => any;
    "update:modelValue": (value: ActiveFilter<unknown>[]) => any;
    remove: (filter: ActiveFilter<unknown>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClear?: (() => any) | undefined;
    onAdd?: ((filter: ActiveFilter<unknown>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: ActiveFilter<unknown>[]) => any) | undefined;
    onRemove?: ((filter: ActiveFilter<unknown>) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    selectedLabel: string;
    addLabel: string;
    clearLabel: string;
    showClear: boolean;
    showMenu: boolean;
    showItems: boolean;
    allowDuplicateFields: boolean;
    itemLayout: FilterItemLayout;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
