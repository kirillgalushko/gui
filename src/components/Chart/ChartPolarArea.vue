<script setup lang="ts">
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { PolarArea } from "vue-chartjs";
import "./chart.css";
import { useChart } from "./useChart";

export interface ChartPolarAreaProps {
  data: ChartData<"polarArea">;
  options?: ChartOptions<"polarArea">;
  plugins?: Plugin<"polarArea">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartPolarAreaProps>(), {
  datasetIdKey: "label",
  height: 280,
});

const { chartData, chartOptions, chartPlugins, containerStyle } = useChart(
  "polarArea",
  props,
);
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <PolarArea
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
