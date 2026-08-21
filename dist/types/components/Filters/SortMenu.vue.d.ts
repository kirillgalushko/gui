import { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import type { FilterControlAppearance, SortOption, SortState } from "./types";
export interface SortMenuProps extends FilterControlAppearance {
    options: SortOption[];
    label?: string;
    fieldLabel?: string;
    orderLabel?: string;
    ascendingLabel?: string;
    descendingLabel?: string;
    disabled?: boolean;
    contentWidth?: DropdownContentWidth;
    contentMaxWidth?: string;
}
type __VLS_Props = SortMenuProps;
type __VLS_PublicProps = __VLS_Props & {
    modelValue: SortState;
};
declare var __VLS_5: {
    label: string;
    sort: SortState;
    option: SortOption | undefined;
}, __VLS_30: {
    option: SortOption;
    selected: boolean;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_5) => any;
} & {
    option?: (props: typeof __VLS_30) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: SortState) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: SortState) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    label: string;
    contentWidth: DropdownContentWidth;
    fieldLabel: string;
    orderLabel: string;
    ascendingLabel: string;
    descendingLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
