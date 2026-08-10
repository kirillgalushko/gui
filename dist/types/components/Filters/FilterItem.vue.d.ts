import { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import type { ActiveFilter, FilterControlAppearance, FilterField, FilterItemLayout, FilterOperator } from "./types";
export interface FilterItemProps extends FilterControlAppearance {
    field: FilterField;
    disabled?: boolean;
    selectedLabel?: string;
    removeLabel?: string;
    contentWidth?: DropdownContentWidth;
    layout?: FilterItemLayout;
}
type __VLS_Props = FilterItemProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue: ActiveFilter;
};
declare var __VLS_8: {
    field: FilterField<unknown>;
}, __VLS_20: {
    operator: FilterOperator;
    filter: ActiveFilter<unknown>;
}, __VLS_41: {
    filter: ActiveFilter<unknown>;
    field: FilterField<unknown>;
    label: string;
}, __VLS_43: {
    filter: ActiveFilter<unknown>;
    field: FilterField<unknown>;
    updateFilter: (patch: Partial<ActiveFilter>) => void;
};
type __VLS_Slots = {} & {
    field?: (props: typeof __VLS_8) => any;
} & {
    operator?: (props: typeof __VLS_20) => any;
} & {
    value?: (props: typeof __VLS_41) => any;
} & {
    'value-menu'?: (props: typeof __VLS_43) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ActiveFilter<unknown>) => any;
    remove: (filter: ActiveFilter<unknown>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: ActiveFilter<unknown>) => any) | undefined;
    onRemove?: ((filter: ActiveFilter<unknown>) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    contentWidth: DropdownContentWidth;
    layout: FilterItemLayout;
    selectedLabel: string;
    removeLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
