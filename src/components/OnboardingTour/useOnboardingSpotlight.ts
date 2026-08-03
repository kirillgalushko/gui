import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/vue";
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  shallowRef,
  toValue,
  watch,
  type MaybeRefOrGetter,
} from "vue";
import {
  expandAndClampRect,
  getFocusableElements,
  getOverlayRects,
  getVisibleElementRect,
  resolveOnboardingTarget,
  scrollOnboardingTargetIntoView,
  shouldBlockOnboardingTargetScroll,
} from "./onboarding";
import type {
  OnboardingRect,
  OnboardingTourScrollBehavior,
  OnboardingTourStep,
  OnboardingTourTargetMissingPayload,
} from "./types";

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

const emptyViewport = { width: 0, height: 0 };

function readViewport() {
  if (typeof window === "undefined") {
    return emptyViewport;
  }

  return { width: window.innerWidth, height: window.innerHeight };
}

export function useOnboardingSpotlight(options: UseOnboardingSpotlightOptions) {
  const targetElement = shallowRef<HTMLElement | null>(null);
  const floatingElement = ref<HTMLElement | null>(null);
  const visibleTargetRect = shallowRef<OnboardingRect | null>(null);
  const viewport = ref(readViewport());
  const activeStep = computed(() => toValue(options.step));
  const isOpen = computed(() => toValue(options.open));
  const spotlightPadding = computed(
    () =>
      activeStep.value?.spotlightPadding ??
      toValue(options.defaultSpotlightPadding),
  );
  const spotlightRect = computed(() => {
    if (!visibleTargetRect.value) {
      return null;
    }

    return expandAndClampRect(
      visibleTargetRect.value,
      spotlightPadding.value,
      viewport.value.width,
      viewport.value.height,
    );
  });
  const overlayRects = computed(() =>
    spotlightRect.value
      ? getOverlayRects(
          spotlightRect.value,
          viewport.value.width,
          viewport.value.height,
        )
      : [],
  );
  const middleware = computed(() => [
    offset(
      (activeStep.value?.sideOffset ?? toValue(options.defaultSideOffset)) +
        spotlightPadding.value,
    ),
    flip({
      padding: toValue(options.viewportPadding),
      fallbackAxisSideDirection: "start",
    }),
    shift({ padding: toValue(options.viewportPadding) }),
  ]);

  const updateGeometry = () => {
    viewport.value = readViewport();
    const target = targetElement.value;

    if (!target?.isConnected) {
      targetElement.value = null;
      visibleTargetRect.value = null;
      scheduleTargetResolution();
      return;
    }

    visibleTargetRect.value = getVisibleElementRect(
      target,
      viewport.value.width,
      viewport.value.height,
    );
  };

  const whileElementsMounted = (
    reference: HTMLElement,
    floating: HTMLElement,
    update: () => void,
  ) =>
    autoUpdate(reference, floating, () => {
      updateGeometry();
      update();
    });

  const { floatingStyles, update: updateFloating } = useFloating(
    targetElement,
    floatingElement,
    {
      strategy: "fixed",
      placement: computed(() => activeStep.value?.placement ?? "bottom"),
      middleware,
      whileElementsMounted,
    },
  );

  let resizeObserver: ResizeObserver | null = null;
  let mutationObserver: MutationObserver | null = null;
  let missingTimer: ReturnType<typeof setTimeout> | null = null;
  let scheduledFrame: number | null = null;
  let shouldEnsureTargetVisibility = false;
  let lookupVersion = 0;
  let missingNotified = false;
  let previousFocusedElement: HTMLElement | null = null;

  const clearMissingTimer = () => {
    if (missingTimer !== null) {
      clearTimeout(missingTimer);
      missingTimer = null;
    }
  };

  const disconnectTargetObserver = () => {
    resizeObserver?.disconnect();
    resizeObserver = null;
  };

  const observeTarget = (target: HTMLElement) => {
    disconnectTargetObserver();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateGeometry);
      resizeObserver.observe(target);
    }
  };

  const handleMissingTarget = () => {
    const step = activeStep.value;

    if (!step || missingNotified || !isOpen.value) {
      return;
    }

    missingNotified = true;
    options.onTargetMissing({
      step,
      index: toValue(options.stepIndex),
      target: step.target,
    });
  };

  const ensureMissingTimer = () => {
    if (missingTimer !== null || missingNotified || targetElement.value) {
      return;
    }

    const timeout = Math.max(0, toValue(options.targetTimeout));
    missingTimer = setTimeout(handleMissingTarget, timeout);
  };

  const scrollTargetIntoView = (
    target: HTMLElement,
    step: OnboardingTourStep,
  ) => {
    if (step.scrollIntoView === false) {
      return;
    }

    scrollOnboardingTargetIntoView(target, toValue(options.scrollBehavior));
  };

  const resolveTarget = async (version = lookupVersion) => {
    if (!isOpen.value || version !== lookupVersion) {
      return;
    }

    await nextTick();

    if (!isOpen.value || version !== lookupVersion) {
      return;
    }

    const step = activeStep.value;
    const target = step ? resolveOnboardingTarget(step.target) : null;

    if (!target?.isConnected) {
      targetElement.value = null;
      visibleTargetRect.value = null;
      ensureMissingTimer();
      return;
    }

    clearMissingTimer();
    missingNotified = false;

    if (step) {
      scrollTargetIntoView(target, step);
    }

    targetElement.value = target;
    observeTarget(target);
    updateGeometry();
    await nextTick();
    updateFloating();
  };

  function scheduleTargetResolution(ensureVisibility = false) {
    shouldEnsureTargetVisibility ||= ensureVisibility;

    if (scheduledFrame !== null || typeof window === "undefined") {
      return;
    }

    scheduledFrame = window.requestAnimationFrame(() => {
      scheduledFrame = null;
      const ensureTargetVisibility = shouldEnsureTargetVisibility;
      shouldEnsureTargetVisibility = false;

      if (targetElement.value) {
        const step = activeStep.value;

        if (ensureTargetVisibility && step) {
          scrollTargetIntoView(targetElement.value, step);
        }

        updateGeometry();
        updateFloating();
      } else {
        void resolveTarget();
      }
    });
  }

  const startLookup = () => {
    lookupVersion += 1;
    shouldEnsureTargetVisibility = false;
    targetElement.value = null;
    visibleTargetRect.value = null;
    missingNotified = false;
    clearMissingTimer();
    disconnectTargetObserver();

    if (!isOpen.value || !activeStep.value) {
      return;
    }

    void resolveTarget(lookupVersion);
  };

  const isAllowedFocusTarget = (target: Node | null) =>
    Boolean(
      target &&
      (targetElement.value?.contains(target) ||
        floatingElement.value?.contains(target)),
    );

  const focusTour = (backwards = false) => {
    const focusable = getFocusableElements(
      targetElement.value,
      floatingElement.value,
    );
    const destination = backwards
      ? focusable[focusable.length - 1]
      : focusable[0];

    (destination ?? floatingElement.value)?.focus({ preventScroll: true });
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (!isOpen.value || !spotlightRect.value) {
      return;
    }

    if (event.key === "Escape" && toValue(options.closeOnEscape)) {
      event.preventDefault();
      options.onEscape();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = getFocusableElements(
      targetElement.value,
      floatingElement.value,
    );
    const activeIndex = focusable.indexOf(
      document.activeElement as HTMLElement,
    );

    if (focusable.length === 0 || activeIndex === -1) {
      event.preventDefault();
      focusTour(event.shiftKey);
      return;
    }

    const isAtStart = event.shiftKey && activeIndex === 0;
    const isAtEnd = !event.shiftKey && activeIndex === focusable.length - 1;

    if (isAtStart || isAtEnd) {
      event.preventDefault();
      focusTour(event.shiftKey);
    }
  };

  const handleFocusIn = (event: FocusEvent) => {
    if (
      isOpen.value &&
      spotlightRect.value &&
      !isAllowedFocusTarget(event.target as Node)
    ) {
      focusTour();
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = targetElement.value;

    if (isOpen.value && target && event.composedPath().includes(target)) {
      options.onTargetClick();
    }
  };

  const handleTargetScroll = (event: Event) => {
    if (
      shouldBlockOnboardingTargetScroll(
        event,
        targetElement.value,
        toValue(options.lockTargetScroll),
      )
    ) {
      event.preventDefault();
    }
  };

  const handleViewportResize = () => {
    const target = targetElement.value;
    const step = activeStep.value;

    if (target && step) {
      scrollTargetIntoView(target, step);
    }

    scheduleTargetResolution();
  };

  const handleViewportScroll = () => {
    scheduleTargetResolution();
  };

  const addGlobalListeners = () => {
    if (typeof window === "undefined") {
      return;
    }

    previousFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    window.addEventListener("resize", handleViewportResize);
    window.addEventListener("scroll", handleViewportScroll, true);
    window.visualViewport?.addEventListener("resize", handleViewportResize);
    window.visualViewport?.addEventListener("scroll", handleViewportScroll);
    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("focusin", handleFocusIn, true);
    document.addEventListener("click", handleDocumentClick, true);
    document.addEventListener("wheel", handleTargetScroll, {
      capture: true,
      passive: false,
    });
    document.addEventListener("touchmove", handleTargetScroll, {
      capture: true,
      passive: false,
    });

    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(() =>
        scheduleTargetResolution(true),
      );
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style", "hidden"],
      });
    }
  };

  const removeGlobalListeners = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.removeEventListener("resize", handleViewportResize);
    window.removeEventListener("scroll", handleViewportScroll, true);
    window.visualViewport?.removeEventListener("resize", handleViewportResize);
    window.visualViewport?.removeEventListener("scroll", handleViewportScroll);
    document.removeEventListener("keydown", handleKeydown, true);
    document.removeEventListener("focusin", handleFocusIn, true);
    document.removeEventListener("click", handleDocumentClick, true);
    document.removeEventListener("wheel", handleTargetScroll, true);
    document.removeEventListener("touchmove", handleTargetScroll, true);
    mutationObserver?.disconnect();
    mutationObserver = null;

    if (
      previousFocusedElement?.isConnected &&
      (!document.activeElement || isAllowedFocusTarget(document.activeElement))
    ) {
      previousFocusedElement.focus({ preventScroll: true });
    }

    previousFocusedElement = null;
  };

  watch(
    [isOpen, () => toValue(options.stepIndex), activeStep],
    ([open], oldValues) => {
      const wasOpen = oldValues?.[0] ?? false;

      if (open && !wasOpen) {
        addGlobalListeners();
      } else if (!open && wasOpen) {
        removeGlobalListeners();
      }

      startLookup();
    },
    { immediate: true },
  );

  watch(floatingElement, (element) => {
    if (element && isOpen.value) {
      nextTick(() => {
        updateFloating();
        element.focus({ preventScroll: true });
      });
    }
  });

  onBeforeUnmount(() => {
    lookupVersion += 1;
    shouldEnsureTargetVisibility = false;
    clearMissingTimer();
    disconnectTargetObserver();
    removeGlobalListeners();

    if (scheduledFrame !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(scheduledFrame);
    }
  });

  return {
    targetElement,
    floatingElement,
    spotlightRect,
    overlayRects,
    floatingStyles,
    isTargetReady: computed(() =>
      Boolean(targetElement.value && spotlightRect.value),
    ),
    setFloatingElement: (element: unknown) => {
      floatingElement.value = element instanceof HTMLElement ? element : null;
    },
    refresh: () => scheduleTargetResolution(true),
  };
}
