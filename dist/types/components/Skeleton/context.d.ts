import { type ComputedRef, type MaybeRefOrGetter } from "vue";
export interface SkeletonContext {
    loading: ComputedRef<boolean>;
}
export declare const skeletonContextKey: unique symbol;
export declare function provideSkeletonLoading(loading: MaybeRefOrGetter<boolean>): ComputedRef<boolean>;
export declare function useSkeletonLoading(loading?: MaybeRefOrGetter<boolean | undefined>, defaultLoading?: boolean): ComputedRef<boolean>;
