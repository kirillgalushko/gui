import type { Placement } from "@floating-ui/vue";
export type OnboardingTourTarget = string | HTMLElement | (() => HTMLElement | null);
export type OnboardingTourMissingTargetBehavior = "close" | "skip" | "wait";
export type OnboardingTourScrollBehavior = "auto" | "smooth";
export type OnboardingTourCloseReason = "dismiss" | "escape" | "missing-target" | "complete";
export interface OnboardingTourStep {
    id: string;
    target: OnboardingTourTarget;
    title: string;
    description?: string;
    placement?: Placement;
    actionLabel?: string;
    previousLabel?: string;
    showPrevious?: boolean;
    advanceOnTargetClick?: boolean;
    scrollIntoView?: boolean;
    spotlightPadding?: number;
    spotlightRadius?: number;
    sideOffset?: number;
}
export interface OnboardingTourStepPayload {
    step: OnboardingTourStep;
    index: number;
}
export interface OnboardingTourTargetMissingPayload extends OnboardingTourStepPayload {
    target: OnboardingTourTarget;
}
export interface OnboardingRect {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}
