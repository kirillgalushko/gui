import { type Ref } from 'vue';
import { type Breakpoint } from './breakpoints/breakpoints';
export declare function useContainerBreakpoint(targetRef: Ref<HTMLElement | null>): {
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
