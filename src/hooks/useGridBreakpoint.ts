import { inject } from "vue";
import { gridContextKey } from "../components/Grid/context";
import { createBreakpointResult } from "./breakpoints/breakpoints";

export function useGridBreakpoint() {
  const gridContext = inject(gridContextKey, null);

  return createBreakpointResult(() => gridContext?.breakpoint.value ?? "xs");
}
