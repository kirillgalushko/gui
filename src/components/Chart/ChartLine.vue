<script setup lang="ts">
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { Line } from "vue-chartjs";
import "./chart.css";
import { useChart } from "./useChart";

export interface ChartLineProps {
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
  plugins?: Plugin<"line">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartLineProps>(), {
  datasetIdKey: "label",
  height: 280,
});

const { chartData, chartOptions, chartPlugins, containerStyle } = useChart(
  "line",
  props,
);
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <Line
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
