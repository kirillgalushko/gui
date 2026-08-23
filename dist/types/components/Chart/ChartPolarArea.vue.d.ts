import type { ChartData, ChartOptions, Plugin, UpdateMode } from "chart.js";
import "./chart.css";
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
declare const _default: import("vue").DefineComponent<ChartPolarAreaProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChartPolarAreaProps> & Readonly<{}>, {
    height: number | string;
    datasetIdKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
