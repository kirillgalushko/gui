import type { OnboardingTourCloseReason, OnboardingTourMissingTargetBehavior, OnboardingTourScrollBehavior, OnboardingTourStep, OnboardingTourStepPayload, OnboardingTourTargetMissingPayload } from "./types";
export interface OnboardingTourProps {
    steps: readonly OnboardingTourStep[];
    open?: boolean;
    step?: number;
    teleportTo?: string | HTMLElement;
    cardWidth?: number;
    zIndex?: number;
    overlayOpacity?: number;
    spotlightPadding?: number;
    spotlightRadius?: number;
    sideOffset?: number;
    viewportPadding?: number;
    targetTimeout?: number;
    missingTargetBehavior?: OnboardingTourMissingTargetBehavior;
    scrollBehavior?: OnboardingTourScrollBehavior;
    lockTargetScroll?: boolean;
    animated?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    showProgress?: boolean;
    previousLabel?: string;
    nextLabel?: string;
    finishLabel?: string;
    ariaLabel?: string;
}
declare var __VLS_5: {
    step: OnboardingTourStep;
    index: number;
    progress: {
        current: number;
        total: number;
    };
    next: () => void;
    previous: () => void;
    close: (reason?: OnboardingTourCloseReason) => void;
}, __VLS_19: {
    step: OnboardingTourStep;
    index: number;
}, __VLS_24: {
    step: OnboardingTourStep;
    index: number;
}, __VLS_40: {
    step: OnboardingTourStep;
    index: number;
}, __VLS_45: {
    step: OnboardingTourStep;
    index: number;
    progress: {
        current: number;
        total: number;
    };
}, __VLS_53: {
    step: OnboardingTourStep;
    index: number;
    isFirst: boolean;
    isLast: boolean;
    next: () => void;
    previous: () => void;
    close: (reason?: OnboardingTourCloseReason) => void;
};
type __VLS_Slots = {} & {
    card?: (props: typeof __VLS_5) => any;
} & {
    title?: (props: typeof __VLS_19) => any;
} & {
    description?: (props: typeof __VLS_24) => any;
} & {
    content?: (props: typeof __VLS_40) => any;
} & {
    progress?: (props: typeof __VLS_45) => any;
} & {
    actions?: (props: typeof __VLS_53) => any;
};
declare const __VLS_component: import("vue").DefineComponent<OnboardingTourProps, {
    start: (index?: number) => boolean;
    close: (reason?: OnboardingTourCloseReason) => void;
    next: () => void;
    previous: () => void;
    goTo: (index: number) => boolean;
    refresh: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (reason: OnboardingTourCloseReason, payload: OnboardingTourStepPayload | null) => any;
    start: (payload: OnboardingTourStepPayload) => any;
    previous: (payload: OnboardingTourStepPayload) => any;
    next: (payload: OnboardingTourStepPayload) => any;
    "update:open": (value: boolean) => any;
    "update:step": (value: number) => any;
    finish: (payload: OnboardingTourStepPayload) => any;
    "target-click": (payload: OnboardingTourStepPayload) => any;
    "target-missing": (payload: OnboardingTourTargetMissingPayload) => any;
}, string, import("vue").PublicProps, Readonly<OnboardingTourProps> & Readonly<{
    onClose?: ((reason: OnboardingTourCloseReason, payload: OnboardingTourStepPayload | null) => any) | undefined;
    onStart?: ((payload: OnboardingTourStepPayload) => any) | undefined;
    onPrevious?: ((payload: OnboardingTourStepPayload) => any) | undefined;
    onNext?: ((payload: OnboardingTourStepPayload) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:step"?: ((value: number) => any) | undefined;
    onFinish?: ((payload: OnboardingTourStepPayload) => any) | undefined;
    "onTarget-click"?: ((payload: OnboardingTourStepPayload) => any) | undefined;
    "onTarget-missing"?: ((payload: OnboardingTourTargetMissingPayload) => any) | undefined;
}>, {
    showCloseButton: boolean;
    closeOnEscape: boolean;
    ariaLabel: string;
    animated: boolean;
    zIndex: number;
    step: number;
    open: boolean;
    sideOffset: number;
    teleportTo: string | HTMLElement;
    cardWidth: number;
    overlayOpacity: number;
    spotlightPadding: number;
    spotlightRadius: number;
    viewportPadding: number;
    targetTimeout: number;
    missingTargetBehavior: OnboardingTourMissingTargetBehavior;
    scrollBehavior: OnboardingTourScrollBehavior;
    lockTargetScroll: boolean;
    showProgress: boolean;
    previousLabel: string;
    nextLabel: string;
    finishLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
