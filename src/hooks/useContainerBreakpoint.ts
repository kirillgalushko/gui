import { readonly, ref, watch, onBeforeUnmount, onMounted, type Ref } from 'vue';
import { createBreakpointResult, getBreakpointName, type Breakpoint } from './breakpoints/breakpoints';

export function useContainerBreakpoint(targetRef: Ref<HTMLElement | null>) {
  const breakpoint = ref<Breakpoint>('xs');
  const result = createBreakpointResult(() => breakpoint.value);
  const observer = ref<ResizeObserver | null>(null);
  const observedElement = ref<HTMLElement | null>(null);

  const updateBreakpoint = (element: HTMLElement) => {
    breakpoint.value = getBreakpointName(element.clientWidth);
  };

  const unobserve = () => {
    if (observer.value && observedElement.value) {
      observer.value.unobserve(observedElement.value);
    }

    observedElement.value = null;
  };

  const observe = (element: HTMLElement | null) => {
    if (!observer.value || !element) {
      return;
    }

    observer.value.observe(element);
    observedElement.value = element;
    updateBreakpoint(element);
  };

  onMounted(() => {
    if (typeof ResizeObserver === 'undefined') {
      if (targetRef.value) {
        updateBreakpoint(targetRef.value);
      }

      return;
    }

    observer.value = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry?.target instanceof HTMLElement) {
        updateBreakpoint(entry.target);
      }
    });

    observe(targetRef.value);
  });

  watch(targetRef, (element) => {
    unobserve();
    observe(element);
  });

  onBeforeUnmount(() => {
    unobserve();
    observer.value?.disconnect();
  });

  return readonly(result);
}
