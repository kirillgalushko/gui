import type { ComponentPublicInstance, MaybeRefOrGetter, Ref } from "vue";
import type { Trend } from "@number-flow/vue";
export type NumberFlowDirection = "auto" | "up" | "down" | "individual";
export interface NumberFlowTimingOverrides {
    opacity?: EffectTiming;
    spin?: EffectTiming;
    transform?: EffectTiming;
}
export interface NumberFlowTimings {
    opacity: EffectTiming;
    spin: EffectTiming;
    transform: EffectTiming;
}
interface UseNumberFlowOptions {
    animateOnMount: MaybeRefOrGetter<boolean>;
    initialValue: MaybeRefOrGetter<number>;
    mountDelay: MaybeRefOrGetter<number>;
    startOnVisible: MaybeRefOrGetter<boolean>;
    target: Ref<HTMLElement | ComponentPublicInstance | null>;
    value: MaybeRefOrGetter<number>;
    visibilityRootMargin: MaybeRefOrGetter<string>;
    visibilityThreshold: MaybeRefOrGetter<number>;
}
export declare const NUMBER_FLOW_DEFAULT_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
export declare const getNumberFlowTrend: (direction: NumberFlowDirection) => Trend;
export declare const getNumberFlowTimings: (duration: number, easing: string, overrides?: NumberFlowTimingOverrides) => NumberFlowTimings;
export declare const useNumberFlow: ({ animateOnMount, initialValue, mountDelay, startOnVisible, target, value, visibilityRootMargin, visibilityThreshold, }: UseNumberFlowOptions) => {
    displayValue: import("vue").ComputedRef<number>;
};
export {};
