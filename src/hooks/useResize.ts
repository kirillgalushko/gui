import { ref, onMounted, onBeforeUnmount, watch, Ref } from 'vue';

export function useResize(elementRef: Ref<HTMLElement | null>, callback: () => void) {
  const observer = ref<ResizeObserver | null>(null);
  const observedElement = ref<HTMLElement | null>(null);

  const unobserve = () => {
    if (observer.value && observedElement.value) {
      observer.value.unobserve(observedElement.value);
      observedElement.value = null;
    }
  }

  const observe = (element: HTMLElement | null) => {
    if (!observer.value || !element) {
      return;
    }

    observer.value.observe(element);
    observedElement.value = element;
    callback();
  }

  onMounted(() => {
    observer.value = new ResizeObserver(callback);
    observe(elementRef.value);
  });

  watch(elementRef, (element) => {
    unobserve();
    observe(element);
  });

  onBeforeUnmount(() => {
    unobserve();
    observer.value?.disconnect();
  });
}
