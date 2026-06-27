import { readonly, ref, onBeforeUnmount, onMounted } from 'vue';
import { createBreakpointResult, getBreakpointName, type Breakpoint } from './breakpoints/breakpoints';

export function useViewportBreakpoint() {
  const breakpoint = ref<Breakpoint>('xs');
  const result = createBreakpointResult(() => breakpoint.value);

  const updateBreakpoint = () => {
    if (typeof window === 'undefined') {
      return;
    }

    breakpoint.value = getBreakpointName(window.innerWidth);
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateBreakpoint);
    }
  });

  return readonly(result);
}
