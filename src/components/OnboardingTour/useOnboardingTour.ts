import { computed, ref, toValue, type MaybeRefOrGetter, type Ref } from "vue";
import { clampTourStep } from "./onboarding";
import type {
  OnboardingTourCloseReason,
  OnboardingTourStep,
  OnboardingTourStepPayload,
} from "./types";

export interface UseOnboardingTourOptions {
  steps: MaybeRefOrGetter<readonly OnboardingTourStep[]>;
  open?: Ref<boolean>;
  step?: Ref<number>;
  initialStep?: number;
  onStart?: (payload: OnboardingTourStepPayload) => void;
  onNext?: (payload: OnboardingTourStepPayload) => void;
  onPrevious?: (payload: OnboardingTourStepPayload) => void;
  onFinish?: (payload: OnboardingTourStepPayload) => void;
  onClose?: (
    reason: OnboardingTourCloseReason,
    payload: OnboardingTourStepPayload | null,
  ) => void;
}

export function useOnboardingTour(options: UseOnboardingTourOptions) {
  const open = options.open ?? ref(false);
  const step = options.step ?? ref(options.initialStep ?? 0);
  const steps = computed(() => toValue(options.steps));
  const currentStep = computed(() => steps.value[step.value]);
  const isFirstStep = computed(() => step.value <= 0);
  const isLastStep = computed(
    () => steps.value.length > 0 && step.value >= steps.value.length - 1,
  );
  const progress = computed(() => ({
    current: steps.value.length === 0 ? 0 : step.value + 1,
    total: steps.value.length,
  }));

  const getPayload = (): OnboardingTourStepPayload | null => {
    const activeStep = currentStep.value;

    return activeStep ? { step: activeStep, index: step.value } : null;
  };

  const start = (index = options.initialStep ?? 0) => {
    if (steps.value.length === 0) {
      return false;
    }

    const nextIndex = clampTourStep(index, steps.value.length);
    const nextStep = steps.value[nextIndex];

    step.value = nextIndex;
    open.value = true;

    if (nextStep) {
      options.onStart?.({ step: nextStep, index: nextIndex });
    }

    return true;
  };

  const close = (reason: OnboardingTourCloseReason = "dismiss") => {
    const payload = getPayload();
    open.value = false;
    options.onClose?.(reason, payload);
  };

  const finish = () => {
    const payload = getPayload();

    if (payload) {
      options.onFinish?.(payload);
    }

    close("complete");
  };

  const next = () => {
    const payload = getPayload();

    if (!payload) {
      close();
      return;
    }

    options.onNext?.(payload);

    if (isLastStep.value) {
      finish();
      return;
    }

    step.value = clampTourStep(step.value + 1, steps.value.length);
  };

  const previous = () => {
    const payload = getPayload();

    if (!payload || isFirstStep.value) {
      return;
    }

    options.onPrevious?.(payload);
    step.value = clampTourStep(step.value - 1, steps.value.length);
  };

  const goTo = (index: number) => {
    if (steps.value.length === 0) {
      return false;
    }

    step.value = clampTourStep(index, steps.value.length);
    return true;
  };

  const reset = () => {
    open.value = false;
    step.value = clampTourStep(options.initialStep ?? 0, steps.value.length);
  };

  return {
    open,
    step,
    steps,
    currentStep,
    isFirstStep,
    isLastStep,
    progress,
    start,
    close,
    finish,
    next,
    previous,
    goTo,
    reset,
  };
}
