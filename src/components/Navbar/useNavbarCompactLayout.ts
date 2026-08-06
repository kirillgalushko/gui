import { computed, onMounted, ref, type ComputedRef, type Ref } from "vue";
import { useResize } from "../../hooks/useResize";

interface UseNavbarCompactLayoutOptions {
  actionsRef: Ref<HTMLElement | null>;
  isViewportCompact: ComputedRef<boolean>;
  layoutRef: Ref<HTMLElement | null>;
  leftRef: Ref<HTMLElement | null>;
  navbarRef: Ref<HTMLElement | null>;
  navigationRef: Ref<HTMLElement | null>;
}

const getContentWidth = (element: HTMLElement | null) =>
  element
    ? Math.max(element.scrollWidth, element.getBoundingClientRect().width)
    : 0;

export function useNavbarCompactLayout({
  actionsRef,
  isViewportCompact,
  layoutRef,
  leftRef,
  navbarRef,
  navigationRef,
}: UseNavbarCompactLayoutOptions) {
  const containerRef = ref<HTMLElement | null>(null);
  const desktopMinWidth = ref(0);
  const isContentCompact = ref(false);

  const updateCompactState = () => {
    const layout = layoutRef.value;

    if (!layout) {
      return;
    }

    if (navigationRef.value) {
      const styles = getComputedStyle(layout);
      const horizontalPadding =
        Number.parseFloat(styles.paddingLeft) +
        Number.parseFloat(styles.paddingRight);
      const columnGap = Number.parseFloat(styles.columnGap) || 0;
      const sideWidth = Math.max(
        getContentWidth(leftRef.value),
        getContentWidth(actionsRef.value),
      );

      desktopMinWidth.value =
        horizontalPadding +
        sideWidth * 2 +
        getContentWidth(navigationRef.value) +
        columnGap * 2;
    }

    const availableWidth =
      containerRef.value?.clientWidth ?? layout.clientWidth;

    isContentCompact.value =
      desktopMinWidth.value > 0 && availableWidth < desktopMinWidth.value;
  };

  onMounted(() => {
    containerRef.value = navbarRef.value?.parentElement ?? null;
  });

  useResize(containerRef, updateCompactState);
  useResize(layoutRef, updateCompactState);
  useResize(leftRef, updateCompactState);
  useResize(navigationRef, updateCompactState);
  useResize(actionsRef, updateCompactState);

  const isCompact = computed(
    () => isViewportCompact.value || isContentCompact.value,
  );

  return { isCompact };
}
