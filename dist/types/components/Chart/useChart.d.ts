import { type ComputedRef, type CSSProperties } from "vue";
import type { ChartData, ChartOptions, ChartType, DefaultDataPoint, Plugin } from "chart.js";
interface ChartProps<TType extends ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> {
    data: ChartData<TType, TData, TLabel>;
    height: number | string;
    options?: ChartOptions<TType>;
    plugins?: Plugin<TType>[];
}
interface UseChartResult<TType extends ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> {
    chartData: ComputedRef<ChartData<TType, TData, TLabel>>;
    chartOptions: ComputedRef<ChartOptions<TType>>;
    chartPlugins: ComputedRef<Plugin<TType>[]>;
    containerStyle: ComputedRef<CSSProperties>;
}
export declare const useChart: <TType extends ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown>(type: TType, props: ChartProps<TType, TData, TLabel>) => UseChartResult<TType, TData, TLabel>;
export {};
