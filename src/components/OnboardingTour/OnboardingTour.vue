<script setup lang="ts">
import { IconXOutline } from "@gui/icons";
import { computed, useId } from "vue";
import Badge from "../Badge/Badge.vue";
import Button from "../Button/Button.vue";
import Card from "../Card/Card.vue";
import Stack from "../Stack/Stack.vue";
import Text from "../Text/Text.vue";
import { useViewportBreakpoint } from "../../hooks/useViewportBreakpoint";
import { useOnboardingSpotlight } from "./useOnboardingSpotlight";
import { useOnboardingTour } from "./useOnboardingTour";
import type {
  OnboardingTourCloseReason,
  OnboardingTourMissingTargetBehavior,
  OnboardingTourScrollBehavior,
  OnboardingTourStep,
  OnboardingTourStepPayload,
  OnboardingTourTargetMissingPayload,
} from "./types";

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

const props = withDefaults(defineProps<OnboardingTourProps>(), {
  open: false,
  step: 0,
  teleportTo: "body",
  cardWidth: 380,
  zIndex: 1000,
  overlayOpacity: 0.6,
  spotlightPadding: 6,
  spotlightRadius: 12,
  sideOffset: 10,
  viewportPadding: 8,
  targetTimeout: 3000,
  missingTargetBehavior: "close",
  scrollBehavior: "smooth",
  lockTargetScroll: true,
  animated: true,
  closeOnEscape: true,
  showCloseButton: true,
  showProgress: true,
  previousLabel: "Назад",
  nextLabel: "Далее",
  finishLabel: "Готово",
  ariaLabel: "Подсказка по интерфейсу",
});

const emit = defineEmits<{
  "update:open": [value: boolean];
  "update:step": [value: number];
  start: [payload: OnboardingTourStepPayload];
  next: [payload: OnboardingTourStepPayload];
  previous: [payload: OnboardingTourStepPayload];
  finish: [payload: OnboardingTourStepPayload];
  close: [
    reason: OnboardingTourCloseReason,
    payload: OnboardingTourStepPayload | null,
  ];
  "target-click": [payload: OnboardingTourStepPayload];
  "target-missing": [payload: OnboardingTourTargetMissingPayload];
}>();

const openModel = computed({
  get: () => props.open,
  set: (value: boolean) => emit("update:open", value),
});
const stepModel = computed({
  get: () => props.step,
  set: (value: number) => emit("update:step", value),
});
const tour = useOnboardingTour({
  steps: () => props.steps,
  open: openModel,
  step: stepModel,
  onStart: (payload) => emit("start", payload),
  onNext: (payload) => emit("next", payload),
  onPrevious: (payload) => emit("previous", payload),
  onFinish: (payload) => emit("finish", payload),
  onClose: (reason, payload) => emit("close", reason, payload),
});
const breakpoint = useViewportBreakpoint();
const titleId = useId();
const descriptionId = useId();

const handleTargetMissing = (payload: OnboardingTourTargetMissingPayload) => {
  emit("target-missing", payload);

  if (props.missingTargetBehavior === "wait") {
    return;
  }

  if (
    props.missingTargetBehavior === "skip" &&
    payload.index < props.steps.length - 1
  ) {
    tour.goTo(payload.index + 1);
    return;
  }

  tour.close("missing-target");
};

const handleTargetClick = () => {
  const activeStep = tour.currentStep.value;

  if (!activeStep) {
    return;
  }

  emit("target-click", { step: activeStep, index: tour.step.value });

  if (activeStep.advanceOnTargetClick) {
    tour.next();
  }
};

const spotlight = useOnboardingSpotlight({
  open: openModel,
  step: tour.currentStep,
  stepIndex: stepModel,
  closeOnEscape: () => props.closeOnEscape,
  lockTargetScroll: () => props.lockTargetScroll,
  scrollBehavior: () => props.scrollBehavior,
  targetTimeout: () => props.targetTimeout,
  viewportPadding: () => props.viewportPadding,
  defaultSpotlightPadding: () => props.spotlightPadding,
  defaultSideOffset: () => props.sideOffset,
  onEscape: () => tour.close("escape"),
  onTargetClick: handleTargetClick,
  onTargetMissing: handleTargetMissing,
});

const componentStyle = computed(() => ({
  "--onboarding-tour-z-index": String(props.zIndex),
  "--onboarding-tour-overlay-opacity": String(
    Math.min(Math.max(props.overlayOpacity, 0), 1),
  ),
}));
const floatingStyle = computed(() => [
  spotlight.floatingStyles.value,
  {
    width: breakpoint.isMobile
      ? "calc(100vw - (var(--gap-2) * 2))"
      : `${props.cardWidth}px`,
    maxWidth: "calc(100vw - (var(--gap-2) * 2))",
  },
]);
const spotlightStyle = computed(() => {
  const rect = spotlight.spotlightRect.value;

  if (!rect) {
    return undefined;
  }

  return {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    borderRadius: `${tour.currentStep.value?.spotlightRadius ?? props.spotlightRadius}px`,
  };
});
const shouldShowPrevious = computed(
  () =>
    !tour.isFirstStep.value && tour.currentStep.value?.showPrevious !== false,
);
const actionLabel = computed(
  () =>
    tour.currentStep.value?.actionLabel ??
    (tour.isLastStep.value ? props.finishLabel : props.nextLabel),
);

defineExpose({
  start: tour.start,
  close: tour.close,
  next: tour.next,
  previous: tour.previous,
  goTo: tour.goTo,
  refresh: spotlight.refresh,
});
</script>

<template>
  <Teleport :to="props.teleportTo">
    <div
      v-if="props.open && tour.currentStep.value"
      :class="[
        'onboarding-tour',
        { 'onboarding-tour--animated': props.animated },
      ]"
      :style="componentStyle"
    >
      <template v-if="spotlight.isTargetReady.value">
        <div
          v-for="(rect, index) in spotlight.overlayRects.value"
          :key="index"
          class="onboarding-tour__overlay"
          :style="{
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
          }"
          aria-hidden="true"
          @wheel.prevent
          @touchmove.prevent
        ></div>

        <div
          class="onboarding-tour__spotlight"
          :style="spotlightStyle"
          aria-hidden="true"
        ></div>

        <div
          :ref="spotlight.setFloatingElement"
          class="onboarding-tour__floating"
          :style="floatingStyle"
          role="dialog"
          aria-modal="true"
          :aria-label="props.ariaLabel"
          :aria-labelledby="titleId"
          :aria-describedby="
            tour.currentStep.value.description ? descriptionId : undefined
          "
          tabindex="-1"
        >
          <div
            :key="tour.currentStep.value.id"
            class="onboarding-tour__card-motion"
          >
            <slot
              name="card"
              :step="tour.currentStep.value"
              :index="tour.step.value"
              :progress="tour.progress.value"
              :next="tour.next"
              :previous="tour.previous"
              :close="tour.close"
            >
              <Card
                class="onboarding-tour__card"
                :padding="16"
                :border-radius="16"
                stretched
              >
                <Stack direction="column" :gap="4" stretched>
                  <Stack
                    direction="row"
                    :gap="3"
                    align-items="start"
                    justify-content="space-between"
                    stretched
                  >
                    <Stack direction="column" :gap="2">
                      <slot
                        name="title"
                        :step="tour.currentStep.value"
                        :index="tour.step.value"
                      >
                        <Text
                          :id="titleId"
                          Element="h2"
                          typography="title-2"
                          class="onboarding-tour__title"
                        >
                          {{ tour.currentStep.value.title }}
                        </Text>
                      </slot>

                      <slot
                        name="description"
                        :step="tour.currentStep.value"
                        :index="tour.step.value"
                      >
                        <Text
                          v-if="tour.currentStep.value.description"
                          :id="descriptionId"
                          typography="paragraph-1"
                          color="secondary"
                          class="onboarding-tour__description"
                        >
                          {{ tour.currentStep.value.description }}
                        </Text>
                      </slot>
                    </Stack>

                    <Button
                      v-if="props.showCloseButton"
                      mode="ghost"
                      size="small"
                      squared
                      type="button"
                      aria-label="Закрыть онбординг"
                      @click="tour.close()"
                    >
                      <IconXOutline />
                    </Button>
                  </Stack>

                  <slot
                    name="content"
                    :step="tour.currentStep.value"
                    :index="tour.step.value"
                  ></slot>

                  <Stack
                    direction="row"
                    :gap="2"
                    align-items="center"
                    justify-content="space-between"
                    stretched
                  >
                    <slot
                      name="progress"
                      :step="tour.currentStep.value"
                      :index="tour.step.value"
                      :progress="tour.progress.value"
                    >
                      <Badge v-if="props.showProgress" mode="secondary">
                        {{ tour.progress.value.current }} из
                        {{ tour.progress.value.total }}
                      </Badge>
                      <span v-else></span>
                    </slot>

                    <Stack direction="row" :gap="2" align-items="center">
                      <slot
                        name="actions"
                        :step="tour.currentStep.value"
                        :index="tour.step.value"
                        :is-first="tour.isFirstStep.value"
                        :is-last="tour.isLastStep.value"
                        :next="tour.next"
                        :previous="tour.previous"
                        :close="tour.close"
                      >
                        <Button
                          v-if="shouldShowPrevious"
                          mode="ghost"
                          size="small"
                          type="button"
                          @click="tour.previous"
                        >
                          {{
                            tour.currentStep.value.previousLabel ??
                            props.previousLabel
                          }}
                        </Button>
                        <Button
                          mode="contrast"
                          size="small"
                          type="button"
                          @click="tour.next"
                        >
                          {{ actionLabel }}
                        </Button>
                      </slot>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </slot>
          </div>
        </div>
      </template>
    </div>
  </Teleport>
</template>

<style scoped>
.onboarding-tour {
  position: fixed;
  inset: 0;
  z-index: var(--onboarding-tour-z-index);
  pointer-events: none;
  font-family: var(--font-family);
}

.onboarding-tour__overlay {
  position: fixed;
  z-index: var(--onboarding-tour-z-index);
  background-color: hsl(
    var(--background) / var(--onboarding-tour-overlay-opacity)
  );
  pointer-events: auto;
  touch-action: none;
}

.onboarding-tour__spotlight {
  position: fixed;
  z-index: calc(var(--onboarding-tour-z-index) + 1);
  box-sizing: border-box;
  border: 2px solid hsl(var(--ring));
  box-shadow:
    0 0 0 1px hsl(var(--background) / 0.56),
    0 8px 32px hsl(var(--background) / 0.48);
  pointer-events: none;
}

.onboarding-tour--animated .onboarding-tour__overlay {
  animation: onboarding-tour-overlay-enter var(--motion-duration-base)
    var(--motion-ease-out) both;
}

.onboarding-tour--animated .onboarding-tour__spotlight {
  animation: onboarding-tour-spotlight-enter var(--motion-duration-slow)
    var(--motion-ease-out) both;
  transition:
    top var(--motion-duration-base) var(--motion-ease-out),
    left var(--motion-duration-base) var(--motion-ease-out),
    width var(--motion-duration-base) var(--motion-ease-out),
    height var(--motion-duration-base) var(--motion-ease-out);
}

.onboarding-tour__floating {
  z-index: calc(var(--onboarding-tour-z-index) + 2);
  box-sizing: border-box;
  max-height: calc(100vh - (var(--gap-2) * 2));
  overflow-y: auto;
  pointer-events: auto;
  outline: none;
  scrollbar-color: hsl(var(--border)) transparent;
  scrollbar-width: thin;
}

.onboarding-tour__card {
  box-shadow:
    0 20px 25px -5px hsl(var(--background) / 0.72),
    0 8px 10px -6px hsl(var(--background) / 0.56);
}

.onboarding-tour--animated .onboarding-tour__card-motion {
  transform-origin: center;
  animation: onboarding-tour-card-enter var(--motion-duration-slow)
    var(--motion-ease-spring) both;
}

.onboarding-tour__title,
.onboarding-tour__description {
  margin: 0;
}

@keyframes onboarding-tour-overlay-enter {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes onboarding-tour-spotlight-enter {
  0% {
    opacity: 0;
    transform: scale(0.97);
  }

  72% {
    opacity: 1;
    transform: scale(1.012);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes onboarding-tour-card-enter {
  from {
    opacity: 0;
    transform: translateY(var(--gap-2)) scale(0.975);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .onboarding-tour--animated .onboarding-tour__overlay,
  .onboarding-tour--animated .onboarding-tour__spotlight,
  .onboarding-tour--animated .onboarding-tour__card-motion {
    animation: none;
  }

  .onboarding-tour--animated .onboarding-tour__spotlight {
    transition: none;
  }
}
</style>
