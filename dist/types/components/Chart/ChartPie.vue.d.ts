import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import "./chart.css";
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
declare const _default: import("vue").DefineComponent<ChartPieProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChartPieProps> & Readonly<{}>, {
    height: number | string;
    datasetIdKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
