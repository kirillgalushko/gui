import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import "./chart.css";
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
declare const _default: import("vue").DefineComponent<ChartLineProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChartLineProps> & Readonly<{}>, {
    height: number | string;
    datasetIdKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
