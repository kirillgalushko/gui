<script setup lang="ts">
import { computed } from "vue";
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { Bar } from "vue-chartjs";
import "./chart.css";
import { withBarBorderRadius, withBarGradient } from "./chart";
import { useChart } from "./useChart";

export interface ChartBarProps {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
  plugins?: Plugin<"bar">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  borderRadius?: number;
  gradient?: boolean;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartBarProps>(), {
  datasetIdKey: "label",
  height: 280,
  borderRadius: 12,
  gradient: false,
});

const {
  chartData: paletteChartData,
  chartOptions,
  chartPlugins,
  containerStyle,
} = useChart("bar", props);
const chartData = computed(() => {
  const data = withBarBorderRadius(paletteChartData.value, props.borderRadius);

  return props.gradient ? withBarGradient(data) : data;
});
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <Bar
      :data="chartData"
      :options="chartOptions"
      :plugins="chartPlugins"
      :dataset-id-key="props.datasetIdKey"
      :update-mode="props.updateMode"
      :aria-label="props.ariaLabel"
      :aria-describedby="props.ariaDescribedby"
    />
  </div>
</template>
