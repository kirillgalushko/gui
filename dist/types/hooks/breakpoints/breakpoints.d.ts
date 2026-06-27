export declare const breakpointNames: readonly ["xs", "s", "m", "l", "xl", "xxl"];
export type Breakpoint = (typeof breakpointNames)[number];
export interface BreakpointResult {
    breakpoint: Breakpoint;
    isXS: boolean;
    isS: boolean;
    isM: boolean;
    isL: boolean;
    isXL: boolean;
    isXXL: boolean;
    isMobile: boolean;
    isGtXS: boolean;
    isGtS: boolean;
    isGtM: boolean;
    isGtL: boolean;
}
export declare const breakpointMinWidths: Record<Breakpoint, number>;
export declare const breakpointColumns: Record<Breakpoint, number>;
export declare function getBreakpointName(width: number): Breakpoint;
export declare function createBreakpointResult(readBreakpoint: () => Breakpoint): BreakpointResult;
