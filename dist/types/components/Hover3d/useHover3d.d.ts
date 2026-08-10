import { type MaybeRefOrGetter } from "vue";
export interface Hover3dBounds {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface Hover3dTransform {
    rotateX: number;
    rotateY: number;
    scale: number;
}
export interface UseHover3dOptions {
    disabled?: MaybeRefOrGetter<boolean>;
    maxTilt?: MaybeRefOrGetter<number>;
    scale?: MaybeRefOrGetter<number>;
}
export interface Hover3dTransformOptions {
    maxTilt?: number;
    scale?: number;
}
export declare const getHover3dTransform: (clientX: number, clientY: number, bounds: Hover3dBounds, options?: Hover3dTransformOptions) => Hover3dTransform;
export declare const useHover3d: (options?: UseHover3dOptions) => {
    isActive: import("vue").Ref<boolean, boolean>;
    onPointerMove: (event: PointerEvent) => void;
    reset: () => void;
    style: import("vue").ComputedRef<{
        "--hover-3d-rotate-x": string;
        "--hover-3d-rotate-y": string;
        "--hover-3d-scale": string;
    }>;
};
