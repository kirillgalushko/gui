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
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<NoiseOverlayProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<NoiseOverlayProps> & Readonly<{}>, {
    grainSize: number;
    octaves: number;
    seed: number;
    blendMode: NoiseOverlayBlendMode;
    opacity: number;
    position: NoiseOverlayPosition;
    zIndex: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
