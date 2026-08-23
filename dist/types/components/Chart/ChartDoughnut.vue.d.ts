import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import "./chart.css";
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
declare const _default: import("vue").DefineComponent<ChartDoughnutProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChartDoughnutProps> & Readonly<{}>, {
    height: number | string;
    datasetIdKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
