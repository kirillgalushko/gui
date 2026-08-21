import { type Ref } from "vue";
export interface ScrollFadeEdges {
    top: boolean;
    bottom: boolean;
    start: boolean;
    end: boolean;
}
export declare const getScrollFadeEdges: (element: HTMLElement, direction?: "ltr" | "rtl") => ScrollFadeEdges;
export declare const useScrollFade: (elementRef: Ref<HTMLElement | null>, enabled: Ref<boolean>) => void;
