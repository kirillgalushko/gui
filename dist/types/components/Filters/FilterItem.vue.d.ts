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
declare let __VLS_typeProps: FilterItemProps;
type __VLS_PublicProps = {
    modelValue: ActiveFilter;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        field?(_: {
            field: FilterField<unknown>;
        }): any;
        operator?(_: {
            operator: FilterOperator;
            filter: ActiveFilter<unknown>;
        }): any;
        value?(_: {
            filter: ActiveFilter<unknown>;
            field: FilterField<unknown>;
            label: string;
        }): any;
        "value-menu"?(_: {
            filter: ActiveFilter<unknown>;
            field: FilterField<unknown>;
            updateFilter: (patch: Partial<ActiveFilter>) => void;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: ActiveFilter<unknown>) => any;
    remove: (filter: ActiveFilter<unknown>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: ActiveFilter<unknown>) => any) | undefined;
    onRemove?: ((filter: ActiveFilter<unknown>) => any) | undefined;
}>, {
    mode: import("./types").FilterControlMode;
    size: import("../../index.ts").ComponentSize;
    contentWidth: DropdownContentWidth;
    layout: FilterItemLayout;
    selectedLabel: string;
    removeLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
