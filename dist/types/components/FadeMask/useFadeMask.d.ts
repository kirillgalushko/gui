import { type CSSProperties, type MaybeRefOrGetter } from "vue";
export type FadeMaskDirection = "top" | "right" | "bottom" | "left";
export type FadeMaskEasing = "linear" | "smooth";
export interface FadeMaskOptions {
    aspectRatio?: MaybeRefOrGetter<string | undefined>;
    direction?: MaybeRefOrGetter<FadeMaskDirection>;
    disabled?: MaybeRefOrGetter<boolean>;
    easing?: MaybeRefOrGetter<FadeMaskEasing>;
    end?: MaybeRefOrGetter<number>;
    start?: MaybeRefOrGetter<number>;
}
interface FadeMaskGradientOptions {
    direction: FadeMaskDirection;
    easing: FadeMaskEasing;
    end: number;
    start: number;
}
export declare const getFadeMaskGradient: ({ direction, easing, end, start, }: FadeMaskGradientOptions) => string;
export declare const useFadeMask: (options?: FadeMaskOptions) => {
    style: import("vue").ComputedRef<CSSProperties>;
};
export {};
