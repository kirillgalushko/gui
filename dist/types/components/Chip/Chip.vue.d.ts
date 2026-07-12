import type { ChipSize, ChipValue } from './types';
export interface ChipProps {
    value?: ChipValue;
    size?: ChipSize;
    selected?: boolean;
    disabled?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ChipProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: ChipValue | undefined) => any;
}, string, import("vue").PublicProps, Readonly<ChipProps> & Readonly<{
    onSelect?: ((value: ChipValue | undefined) => any) | undefined;
}>, {
    size: ChipSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
