export type NoiseOverlayBlendMode = "normal" | "overlay" | "soft-light";
export type NoiseOverlayPosition = "absolute" | "fixed";
export interface NoiseOverlayProps {
    blendMode?: NoiseOverlayBlendMode;
    grainSize?: number;
    octaves?: number;
    opacity?: number;
    position?: NoiseOverlayPosition;
    seed?: number;
    zIndex?: number;
}
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<NoiseOverlayProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<NoiseOverlayProps> & Readonly<{}>, {
    grainSize: number;
    octaves: number;
    seed: number;
    blendMode: NoiseOverlayBlendMode;
    opacity: number;
    position: NoiseOverlayPosition;
    zIndex: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
