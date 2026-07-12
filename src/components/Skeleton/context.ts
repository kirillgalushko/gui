import { computed, inject, provide, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue';

export interface SkeletonContext {
  loading: ComputedRef<boolean>;
}

export const skeletonContextKey = Symbol('skeleton-context');

export function provideSkeletonLoading(loading: MaybeRefOrGetter<boolean>) {
  const state = computed(() => Boolean(toValue(loading)));

  provide<SkeletonContext>(skeletonContextKey, {
    loading: state,
  });

  return state;
}

export function useSkeletonLoading(loading?: MaybeRefOrGetter<boolean | undefined>, defaultLoading = true) {
  const context = inject<SkeletonContext | null>(skeletonContextKey, null);

  return computed(() => {
    const localLoading = loading === undefined ? undefined : toValue(loading);

    return localLoading ?? context?.loading.value ?? defaultLoading;
  });
}
