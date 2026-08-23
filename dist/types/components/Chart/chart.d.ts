import { type ChartData, type ChartOptions, type ChartType, type DefaultDataPoint, type Plugin } from "chart.js";
export declare const chartPaletteTokens: readonly ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5", "chart-6"];
export type ChartPaletteToken = (typeof chartPaletteTokens)[number];
export declare const resolveChartTokenColor: (element: Element, token: string, alpha?: number) => string;
export declare const withChartPalette: <TType extends ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown>(type: TType, data: ChartData<TType, TData, TLabel>) => ChartData<TType, TData, TLabel>;
export declare const createChartOptions: <TType extends ChartType>(type: TType, options?: ChartOptions<TType>) => ChartOptions<TType>;
export declare const createChartThemePlugin: <TType extends ChartType>(getOptions: () => ChartOptions<TType> | undefined) => Plugin<TType>;
