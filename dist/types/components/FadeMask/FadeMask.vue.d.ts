import { type FadeMaskDirection, type FadeMaskEasing } from "./useFadeMask";
export interface FadeMaskProps {
    aspectRatio?: string;
    direction?: FadeMaskDirection;
    disabled?: boolean;
    easing?: FadeMaskEasing;
    end?: number;
    inline?: boolean;
    overflow?: boolean;
    start?: number;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<FadeMaskProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FadeMaskProps> & Readonly<{}>, {
    start: number;
    end: number;
    disabled: boolean;
    direction: FadeMaskDirection;
    easing: FadeMaskEasing;
    inline: boolean;
    overflow: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
