import { type MaybeRefOrGetter, type Ref } from "vue";
import type { OnboardingTourCloseReason, OnboardingTourStep, OnboardingTourStepPayload } from "./types";
export interface UseOnboardingTourOptions {
    steps: MaybeRefOrGetter<readonly OnboardingTourStep[]>;
    open?: Ref<boolean>;
    step?: Ref<number>;
    initialStep?: number;
    onStart?: (payload: OnboardingTourStepPayload) => void;
    onNext?: (payload: OnboardingTourStepPayload) => void;
    onPrevious?: (payload: OnboardingTourStepPayload) => void;
    onFinish?: (payload: OnboardingTourStepPayload) => void;
    onClose?: (reason: OnboardingTourCloseReason, payload: OnboardingTourStepPayload | null) => void;
}
export declare function useOnboardingTour(options: UseOnboardingTourOptions): {
    open: Ref<boolean, boolean>;
    step: Ref<number, number>;
    steps: import("vue").ComputedRef<readonly OnboardingTourStep[]>;
    currentStep: import("vue").ComputedRef<OnboardingTourStep>;
    isFirstStep: import("vue").ComputedRef<boolean>;
    isLastStep: import("vue").ComputedRef<boolean>;
    progress: import("vue").ComputedRef<{
        current: number;
        total: number;
    }>;
    start: (index?: number) => boolean;
    close: (reason?: OnboardingTourCloseReason) => void;
    finish: () => void;
    next: () => void;
    previous: () => void;
    goTo: (index: number) => boolean;
    reset: () => void;
};
