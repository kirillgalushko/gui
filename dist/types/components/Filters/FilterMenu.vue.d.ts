import { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import type { FilterControlAppearance, FilterField, FilterMenuSelectPayload, FilterOption } from "./types";
export interface FilterMenuProps extends FilterControlAppearance {
    fields: FilterField[];
    label?: string;
    searchPlaceholder?: string;
    optionSearchPlaceholder?: string;
    emptyLabel?: string;
    searchable?: boolean;
    closeOnSelect?: boolean;
    disabled?: boolean;
    contentWidth?: DropdownContentWidth;
}
declare var __VLS_5: {
    label: string;
}, __VLS_30: {
    field: FilterField<unknown>;
}, __VLS_53: {
    field: FilterField<unknown>;
    option: FilterOption<unknown>;
}, __VLS_69: {
    field: FilterField<unknown>;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_5) => any;
} & {
    field?: (props: typeof __VLS_30) => any;
} & {
    option?: (props: typeof __VLS_53) => any;
} & {
    field?: (props: typeof __VLS_69) => any;
};
declare const __VLS_component: import("vue").DefineComponent<FilterMenuProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (payload: FilterMenuSelectPayload<unknown>) => any;
}, string, import("vue").PublicProps, Readonly<FilterMenuProps> & Readonly<{
    onSelect?: ((payload: FilterMenuSelectPayload<unknown>) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    label: string;
    contentWidth: DropdownContentWidth;
    closeOnSelect: boolean;
    searchPlaceholder: string;
    optionSearchPlaceholder: string;
    emptyLabel: string;
    searchable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
