<script setup lang="ts">
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { Doughnut } from "vue-chartjs";
import "./chart.css";
import { useChart } from "./useChart";

export interface ChartDoughnutProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
  plugins?: Plugin<"doughnut">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartDoughnutProps>(), {
  datasetIdKey: "label",
  height: 280,
});

const { chartData, chartOptions, chartPlugins, containerStyle } = useChart(
  "doughnut",
  props,
);
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <Doughnut
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
