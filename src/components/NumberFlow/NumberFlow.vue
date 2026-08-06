<script setup lang="ts">
import BaseNumberFlow, {
  continuous as continuousPlugin,
  type Format,
} from "@number-flow/vue";
import { computed, ref, toRef } from "vue";
import Text from "../Text/Text.vue";
import type { TextProps, Typography } from "../Text/types";
import {
  getNumberFlowTimings,
  getNumberFlowTrend,
  NUMBER_FLOW_DEFAULT_EASING,
  useNumberFlow,
  type NumberFlowDirection,
  type NumberFlowTimingOverrides,
} from "./useNumberFlow";

export type NumberFlowFormat = Format;

export interface NumberFlowProps {
  Element?: TextProps["Element"];
  animateOnMount?: boolean;
  animated?: boolean;
  color?: TextProps["color"];
  continuous?: boolean;
  direction?: NumberFlowDirection;
  duration?: number;
  easing?: string;
  format?: NumberFlowFormat;
  initialValue?: number;
  locales?: Intl.LocalesArgument;
  mountDelay?: number;
  prefix?: string;
  respectMotionPreference?: boolean;
  startOnVisible?: boolean;
  suffix?: string;
  textAlign?: TextProps["textAlign"];
  timing?: NumberFlowTimingOverrides;
  typography?: Typography;
  value: number;
  visibilityRootMargin?: string;
  visibilityThreshold?: number;
  willChange?: boolean;
}

const props = withDefaults(defineProps<NumberFlowProps>(), {
  Element: "span",
  animateOnMount: false,
  animated: true,
  color: "inherit",
  continuous: false,
  direction: "auto",
  duration: 700,
  easing: NUMBER_FLOW_DEFAULT_EASING,
  initialValue: 0,
  mountDelay: 0,
  respectMotionPreference: true,
  startOnVisible: false,
  textAlign: "inherit",
  typography: "inherit",
  visibilityRootMargin: "0px",
  visibilityThreshold: 0.2,
  willChange: false,
});

const emit = defineEmits<{
  "animations-finish": [];
  "animations-start": [];
}>();

const root = ref(null);
const { displayValue } = useNumberFlow({
  animateOnMount: toRef(props, "animateOnMount"),
  initialValue: toRef(props, "initialValue"),
  mountDelay: toRef(props, "mountDelay"),
  startOnVisible: toRef(props, "startOnVisible"),
  target: root,
  value: toRef(props, "value"),
  visibilityRootMargin: toRef(props, "visibilityRootMargin"),
  visibilityThreshold: toRef(props, "visibilityThreshold"),
});

const plugins = computed(() =>
  props.continuous ? [continuousPlugin] : undefined,
);
const trend = computed(() => getNumberFlowTrend(props.direction));
const timings = computed(() =>
  getNumberFlowTimings(props.duration, props.easing, props.timing),
);
</script>

<template>
  <Text
    ref="root"
    class="NumberFlow"
    :Element="props.Element"
    :color="props.color"
    :text-align="props.textAlign"
    :typography="props.typography"
  >
    <BaseNumberFlow
      class="NumberFlow__value"
      :animated="props.animated"
      :format="props.format"
      :locales="props.locales"
      :opacity-timing="timings.opacity"
      :plugins="plugins"
      :prefix="props.prefix"
      :respect-motion-preference="props.respectMotionPreference"
      :spin-timing="timings.spin"
      :suffix="props.suffix"
      :transform-timing="timings.transform"
      :trend="trend"
      :value="displayValue"
      :will-change="props.willChange"
      @animationsfinish="emit('animations-finish')"
      @animationsstart="emit('animations-start')"
    />
  </Text>
</template>

<style scoped>
.NumberFlow {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
}

.NumberFlow__value {
  display: inline-block;
  color: inherit;
  font-size: inherit;
  font-variant-numeric: tabular-nums;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: 1;
  vertical-align: middle;
  --number-flow-mask-height: 0.18em;
  --number-flow-mask-width: 0.4em;
}
</style>
