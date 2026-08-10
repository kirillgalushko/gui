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
declare function __VLS_template(): {
    slots: {
        trigger?(_: {
            label: string;
        }): any;
        field?(_: {
            field: FilterField<unknown>;
        }): any;
        field?(_: {
            field: FilterField<unknown>;
        }): any;
        option?(_: {
            field: FilterField<unknown>;
            option: FilterOption<unknown>;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
