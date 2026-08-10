import type { ComputedRef, InjectionKey } from "vue";
import type { ComponentSize } from "../../types";
export interface PaginationContext {
    size: ComputedRef<ComponentSize>;
}
export declare const paginationContextKey: InjectionKey<PaginationContext>;
