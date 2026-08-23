<script setup lang="ts">
import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import { Radar } from "vue-chartjs";
import "./chart.css";
import { useChart } from "./useChart";

export interface ChartRadarProps {
  data: ChartData<"radar">;
  options?: ChartOptions<"radar">;
  plugins?: Plugin<"radar">[];
  datasetIdKey?: string;
  updateMode?: UpdateMode;
  height?: number | string;
  ariaLabel?: string;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<ChartRadarProps>(), {
  datasetIdKey: "label",
  height: 280,
});

const { chartData, chartOptions, chartPlugins, containerStyle } = useChart(
  "radar",
  props,
);
</script>

<template>
  <div class="chart-container" :style="containerStyle">
    <Radar
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
