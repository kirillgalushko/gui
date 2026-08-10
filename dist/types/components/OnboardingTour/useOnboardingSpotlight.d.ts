import { type MaybeRefOrGetter } from "vue";
import type { OnboardingRect, OnboardingTourScrollBehavior, OnboardingTourStep, OnboardingTourTargetMissingPayload } from "./types";
interface UseOnboardingSpotlightOptions {
    open: MaybeRefOrGetter<boolean>;
    step: MaybeRefOrGetter<OnboardingTourStep | undefined>;
    stepIndex: MaybeRefOrGetter<number>;
    closeOnEscape: MaybeRefOrGetter<boolean>;
    lockTargetScroll: MaybeRefOrGetter<boolean>;
    scrollBehavior: MaybeRefOrGetter<OnboardingTourScrollBehavior>;
    targetTimeout: MaybeRefOrGetter<number>;
    viewportPadding: MaybeRefOrGetter<number>;
    defaultSpotlightPadding: MaybeRefOrGetter<number>;
    defaultSideOffset: MaybeRefOrGetter<number>;
    onEscape: () => void;
    onTargetClick: () => void;
    onTargetMissing: (payload: OnboardingTourTargetMissingPayload) => void;
}
export declare function useOnboardingSpotlight(options: UseOnboardingSpotlightOptions): {
    targetElement: import("vue").ShallowRef<HTMLElement | null, HTMLElement | null>;
    floatingElement: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    spotlightRect: import("vue").ComputedRef<OnboardingRect | null>;
    overlayRects: import("vue").ComputedRef<OnboardingRect[]>;
    floatingStyles: Readonly<import("vue").Ref<{
        position: import("@floating-ui/utils").Strategy;
        top: string;
        left: string;
        transform?: string;
        willChange?: string;
    }, {
        position: import("@floating-ui/utils").Strategy;
        top: string;
        left: string;
        transform?: string;
        willChange?: string;
    }>>;
    isTargetReady: import("vue").ComputedRef<boolean>;
    setFloatingElement: (element: unknown) => void;
    refresh: () => void;
};
export {};
