import type { Padding } from '../../types';
export type ItemMode = 'card' | 'outlined' | 'plain';
export type ItemSize = 'medium' | 'small' | 'extra-small';
export interface ItemProps {
    interactive?: boolean;
    mode?: ItemMode;
    padding?: Padding;
    size?: ItemSize;
    stretched?: boolean;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<ItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ItemProps> & Readonly<{}>, {
    size: ItemSize;
    mode: ItemMode;
    stretched: boolean;
    interactive: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
