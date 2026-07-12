import { readonly, ref, onBeforeUnmount, onMounted } from "vue";
import {
  createBreakpointResult,
  getBreakpointName,
  type Breakpoint,
} from "./breakpoints/breakpoints";

export function useViewportBreakpoint() {
  const getCurrentBreakpoint = (): Breakpoint => {
    if (typeof window === "undefined") {
      return "xs";
    }

    return getBreakpointName(window.innerWidth);
  };

  const breakpoint = ref<Breakpoint>(getCurrentBreakpoint());
  const result = createBreakpointResult(() => breakpoint.value);

  const updateBreakpoint = () => {
    breakpoint.value = getCurrentBreakpoint();
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
  });

  onBeforeUnmount(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateBreakpoint);
    }
  });

  return readonly(result);
}
