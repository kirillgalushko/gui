import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import "./chart.css";
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
declare const _default: import("vue").DefineComponent<ChartRadarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChartRadarProps> & Readonly<{}>, {
    height: number | string;
    datasetIdKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
