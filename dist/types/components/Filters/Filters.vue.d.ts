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
declare let __VLS_typeProps: FiltersProps;
type __VLS_PublicProps = {
    modelValue?: ActiveFilter[];
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        trigger?(_: {
            label: string;
        }): any;
        field?(_: {
            field: FilterField<unknown>;
        }): any;
        option?(_: {
            field: FilterField<unknown>;
            option: import("./types").FilterOption<unknown>;
        }): any;
        "filter-field"?(_: {
            field: FilterField<unknown>;
        }): any;
        operator?(_: {
            operator: import("./types").FilterOperator;
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
        "clear-icon"?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
    add: (filter: ActiveFilter<unknown>) => any;
    "update:modelValue": (modelValue: ActiveFilter<unknown>[]) => any;
    remove: (filter: ActiveFilter<unknown>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClear?: (() => any) | undefined;
    onAdd?: ((filter: ActiveFilter<unknown>) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: ActiveFilter<unknown>[]) => any) | undefined;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
