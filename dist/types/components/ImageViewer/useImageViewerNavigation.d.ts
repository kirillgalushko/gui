import { type MaybeRefOrGetter } from "vue";
import type { ImageViewerItem } from "./types";
export declare const normalizeImageViewerIndex: (index: number, count: number) => number;
export declare const useImageViewerNavigation: (images: MaybeRefOrGetter<ImageViewerItem[]>, activeIndex: MaybeRefOrGetter<number>, loop: MaybeRefOrGetter<boolean>, onChange: (index: number) => void) => {
    canNext: import("vue").ComputedRef<boolean>;
    canPrevious: import("vue").ComputedRef<boolean>;
    count: import("vue").ComputedRef<number>;
    current: import("vue").ComputedRef<ImageViewerItem>;
    goTo: (nextIndex: number) => void;
    index: import("vue").ComputedRef<number>;
    next: () => void;
    previous: () => void;
};
