import type { Ref } from "vue";
export declare const useImageViewerGestures: (options: {
    scale: Ref<number>;
    minScale: () => number;
    maxScale: () => number;
    swipeThreshold: () => number;
    onNext: () => void;
    onPrevious: () => void;
    panBy: (x: number, y: number) => void;
    setScale: (scale: number) => void;
}) => {
    pointerDown: (event: PointerEvent) => void;
    pointerMove: (event: PointerEvent) => void;
    pointerUp: (event: PointerEvent) => void;
};
