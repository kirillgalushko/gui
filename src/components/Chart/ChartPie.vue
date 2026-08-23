<script setup lang="ts">
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { Pie } from "vue-chartjs";
import "./chart.css";
import { useChart } from "./useChart";

export interface ChartPieProps {
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
  plugins?: Plugin<"pie">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartPieProps>(), {
  datasetIdKey: "label",
  height: 280,
});

const { chartData, chartOptions, chartPlugins, containerStyle } = useChart(
  "pie",
  props,
);
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <Pie
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
