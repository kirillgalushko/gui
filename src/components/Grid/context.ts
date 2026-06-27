import type { InjectionKey, Ref } from 'vue';
import type { Breakpoint } from '../../hooks/breakpoints/breakpoints';

export interface GridContext {
  breakpoint: Readonly<Ref<Breakpoint>>;
  columns: Readonly<Ref<number>>;
}

export const gridContextKey: InjectionKey<GridContext> = Symbol('GridContext');
