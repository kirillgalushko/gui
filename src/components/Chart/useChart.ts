import { computed, type ComputedRef, type CSSProperties } from "vue";
import type {
  ChartData,
  ChartOptions,
  ChartType,
  DefaultDataPoint,
  Plugin,
} from "chart.js";
import {
  createChartOptions,
  createChartThemePlugin,
  withChartPalette,
} from "./chart";

interface ChartProps<
  TType extends ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
> {
  data: ChartData<TType, TData, TLabel>;
  height: number | string;
  options?: ChartOptions<TType>;
  plugins?: Plugin<TType>[];
}

interface UseChartResult<
  TType extends ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
> {
  chartData: ComputedRef<ChartData<TType, TData, TLabel>>;
  chartOptions: ComputedRef<ChartOptions<TType>>;
  chartPlugins: ComputedRef<Plugin<TType>[]>;
  containerStyle: ComputedRef<CSSProperties>;
}

export const useChart = <
  TType extends ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
>(
  type: TType,
  props: ChartProps<TType, TData, TLabel>,
): UseChartResult<TType, TData, TLabel> => {
  const themePlugin = createChartThemePlugin(() => props.options);

  const chartData = computed(() => withChartPalette(type, props.data));
  const chartOptions = computed(() => createChartOptions(type, props.options));
  const chartPlugins = computed(() => [themePlugin, ...(props.plugins ?? [])]);
  const containerStyle = computed<CSSProperties>(() => ({
    height:
      typeof props.height === "number" ? `${props.height}px` : props.height,
  }));

  return {
    chartData,
    chartOptions,
    chartPlugins,
    containerStyle,
  };
};
