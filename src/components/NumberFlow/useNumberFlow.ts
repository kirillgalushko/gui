import { computed, onBeforeUnmount, onMounted, ref, toValue, watch } from "vue";
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

export const NUMBER_FLOW_DEFAULT_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export const getNumberFlowTrend = (direction: NumberFlowDirection): Trend => {
  if (direction === "up") return 1;
  if (direction === "down") return -1;
  if (direction === "individual") return 0;

  return (oldValue, value) => Math.sign(value - oldValue);
};

export const getNumberFlowTimings = (
  duration: number,
  easing: string,
  overrides?: NumberFlowTimingOverrides,
): NumberFlowTimings => {
  const transform = overrides?.transform ?? { duration, easing };

  return {
    transform,
    spin: overrides?.spin ?? transform,
    opacity: overrides?.opacity ?? {
      duration: Math.min(duration * 0.5, 350),
      easing: "ease-out",
    },
  };
};

export const useNumberFlow = ({
  animateOnMount,
  initialValue,
  mountDelay,
  startOnVisible,
  target,
  value,
  visibilityRootMargin,
  visibilityThreshold,
}: UseNumberFlowOptions) => {
  const displayValue = ref(
    toValue(animateOnMount) ? toValue(initialValue) : toValue(value),
  );
  const initialAnimationStarted = ref(!toValue(animateOnMount));
  let frame: number | undefined;
  let observer: IntersectionObserver | undefined;
  let timer: number | undefined;

  const clearSchedule = () => {
    if (frame !== undefined) window.cancelAnimationFrame(frame);
    if (timer !== undefined) window.clearTimeout(timer);
    frame = undefined;
    timer = undefined;
    observer?.disconnect();
    observer = undefined;
  };

  const animateToCurrentValue = () => {
    frame = window.requestAnimationFrame(() => {
      initialAnimationStarted.value = true;
      displayValue.value = toValue(value);
      frame = undefined;
    });
  };

  const scheduleAnimation = () => {
    observer?.disconnect();
    observer = undefined;

    const delay = Math.max(0, toValue(mountDelay));
    if (delay === 0) {
      animateToCurrentValue();
      return;
    }

    timer = window.setTimeout(() => {
      timer = undefined;
      animateToCurrentValue();
    }, delay);
  };

  const getTargetElement = () => {
    const current = target.value;
    if (current instanceof HTMLElement) return current;

    return current?.$el instanceof HTMLElement ? current.$el : null;
  };

  watch(
    () => toValue(value),
    (nextValue) => {
      if (!initialAnimationStarted.value && toValue(animateOnMount)) return;
      displayValue.value = nextValue;
    },
  );

  onMounted(() => {
    if (!toValue(animateOnMount)) {
      initialAnimationStarted.value = true;
      displayValue.value = toValue(value);
      return;
    }

    const element = getTargetElement();
    if (
      !toValue(startOnVisible) ||
      element === null ||
      typeof IntersectionObserver === "undefined"
    ) {
      scheduleAnimation();
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) scheduleAnimation();
      },
      {
        rootMargin: toValue(visibilityRootMargin),
        threshold: Math.min(1, Math.max(0, toValue(visibilityThreshold))),
      },
    );
    observer.observe(element);
  });

  onBeforeUnmount(clearSchedule);

  return {
    displayValue: computed(() => displayValue.value),
  };
};
