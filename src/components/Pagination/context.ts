import type { ComputedRef, InjectionKey } from "vue";
import type { ComponentSize } from "../../types";

export interface PaginationContext {
  size: ComputedRef<ComponentSize>;
}

export const paginationContextKey: InjectionKey<PaginationContext> =
  Symbol("PaginationContext");
