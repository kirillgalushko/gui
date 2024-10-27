import { ref, onMounted, onBeforeUnmount, Ref } from 'vue';

export function useResize(elementRef: Ref<HTMLElement | null>, callback: () => void) {
  const observer = ref<ResizeObserver | null>(null);

  onMounted(() => {
    observer.value = new ResizeObserver(callback);
    if (elementRef.value) {
      observer.value.observe(elementRef.value);
    }
    callback();
  });

  onBeforeUnmount(() => {
    if (observer.value && elementRef.value) {
      observer.value.unobserve(elementRef.value);
    }
  });
}
