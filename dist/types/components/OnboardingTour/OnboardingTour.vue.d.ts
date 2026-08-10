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
declare function __VLS_template(): {
    slots: {
        card?(_: {
            step: OnboardingTourStep;
            index: number;
            progress: {
                current: number;
                total: number;
            };
            next: () => void;
            previous: () => void;
            close: (reason?: OnboardingTourCloseReason) => void;
        }): any;
        title?(_: {
            step: OnboardingTourStep;
            index: number;
        }): any;
        description?(_: {
            step: OnboardingTourStep;
            index: number;
        }): any;
        content?(_: {
            step: OnboardingTourStep;
            index: number;
        }): any;
        progress?(_: {
            step: OnboardingTourStep;
            index: number;
            progress: {
                current: number;
                total: number;
            };
        }): any;
        actions?(_: {
            step: OnboardingTourStep;
            index: number;
            isFirst: boolean;
            isLast: boolean;
            next: () => void;
            previous: () => void;
            close: (reason?: OnboardingTourCloseReason) => void;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
