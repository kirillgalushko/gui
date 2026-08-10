import { type MaybeRefOrGetter } from "vue";
export declare const useImageViewerTransform: (minScale: MaybeRefOrGetter<number>, maxScale: MaybeRefOrGetter<number>) => {
    isTransformed: import("vue").ComputedRef<boolean>;
    panBy: (deltaX: number, deltaY: number) => void;
    reset: () => void;
    rotate: () => void;
    rotation: import("vue").Ref<number, number>;
    scale: import("vue").Ref<number, number>;
    setScale: (value: number) => void;
    style: import("vue").ComputedRef<{
        transform: string;
    }>;
    x: import("vue").Ref<number, number>;
    y: import("vue").Ref<number, number>;
    zoomIn: () => void;
    zoomOut: () => void;
};
