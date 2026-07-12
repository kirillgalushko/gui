import { type Breakpoint } from './breakpoints/breakpoints';
type BreakpointElementRef = {
    value: HTMLElement | null;
};
export declare function useContainerBreakpoint(targetRef: BreakpointElementRef): {
    readonly breakpoint: Breakpoint;
    readonly isXS: boolean;
    readonly isS: boolean;
    readonly isM: boolean;
    readonly isL: boolean;
    readonly isXL: boolean;
    readonly isXXL: boolean;
    readonly isMobile: boolean;
    readonly isGtXS: boolean;
    readonly isGtS: boolean;
    readonly isGtM: boolean;
    readonly isGtL: boolean;
};
export {};
