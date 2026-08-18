import { onBeforeUnmount, watch, type Ref } from "vue";

export interface ScrollFadeEdges {
  top: boolean;
  bottom: boolean;
  start: boolean;
  end: boolean;
}

const SCROLL_EDGE_THRESHOLD = 1;

const supportsScrollDrivenAnimations = () =>
  typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");

export const getScrollFadeEdges = (
  element: HTMLElement,
  direction: "ltr" | "rtl" = "ltr",
): ScrollFadeEdges => {
  const verticalRange = Math.max(
    0,
    element.scrollHeight - element.clientHeight,
  );
  const horizontalRange = Math.max(
    0,
    element.scrollWidth - element.clientWidth,
  );
  const verticalPosition = Math.min(
    verticalRange,
    Math.max(0, element.scrollTop),
  );
  const horizontalPosition = Math.min(
    horizontalRange,
    Math.max(
      0,
      direction === "rtl" ? Math.abs(element.scrollLeft) : element.scrollLeft,
    ),
  );
  const canScrollUp =
    verticalRange > SCROLL_EDGE_THRESHOLD &&
    verticalPosition > SCROLL_EDGE_THRESHOLD;
  const canScrollDown =
    verticalRange > SCROLL_EDGE_THRESHOLD &&
    verticalPosition < verticalRange - SCROLL_EDGE_THRESHOLD;
  const canScrollInlineStart =
    horizontalRange > SCROLL_EDGE_THRESHOLD &&
    horizontalPosition > SCROLL_EDGE_THRESHOLD;
  const canScrollInlineEnd =
    horizontalRange > SCROLL_EDGE_THRESHOLD &&
    horizontalPosition < horizontalRange - SCROLL_EDGE_THRESHOLD;

  return {
    top: canScrollUp,
    bottom: canScrollDown,
    start: canScrollInlineStart,
    end: canScrollInlineEnd,
  };
};

export const useScrollFade = (
  elementRef: Ref<HTMLElement | null>,
  enabled: Ref<boolean>,
) => {
  let resizeObserver: ResizeObserver | null = null;
  let mutationObserver: MutationObserver | null = null;
  let observedChildren: Element[] = [];
  let activeElement: HTMLElement | null = null;

  const clearEdgeAttributes = (element: HTMLElement) => {
    element.removeAttribute("data-scroll-fade-top");
    element.removeAttribute("data-scroll-fade-bottom");
    element.removeAttribute("data-scroll-fade-start");
    element.removeAttribute("data-scroll-fade-end");
  };

  const update = () => {
    if (!activeElement || !enabled.value) return;

    const direction =
      getComputedStyle(activeElement).direction === "rtl" ? "rtl" : "ltr";
    const edges = getScrollFadeEdges(activeElement, direction);

    activeElement.toggleAttribute("data-scroll-fade-top", edges.top);
    activeElement.toggleAttribute("data-scroll-fade-bottom", edges.bottom);
    activeElement.toggleAttribute("data-scroll-fade-start", edges.start);
    activeElement.toggleAttribute("data-scroll-fade-end", edges.end);
  };

  const observeChildren = () => {
    if (!activeElement || !resizeObserver) return;

    for (const child of observedChildren) resizeObserver.unobserve(child);
    observedChildren = Array.from(activeElement.children);
    for (const child of observedChildren) resizeObserver.observe(child);
  };

  const stop = () => {
    if (activeElement) {
      activeElement.removeEventListener("scroll", update);
      clearEdgeAttributes(activeElement);
    }
    resizeObserver?.disconnect();
    mutationObserver?.disconnect();
    resizeObserver = null;
    mutationObserver = null;
    observedChildren = [];
    activeElement = null;
  };

  const stopWatching = watch(
    [elementRef, enabled],
    ([element, isEnabled]) => {
      stop();
      if (!element || !isEnabled) return;

      activeElement = element;
      if (supportsScrollDrivenAnimations()) return;

      activeElement.addEventListener("scroll", update, { passive: true });

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(update);
        resizeObserver.observe(activeElement);
        observeChildren();
      }

      if (typeof MutationObserver !== "undefined") {
        mutationObserver = new MutationObserver(() => {
          observeChildren();
          update();
        });
        mutationObserver.observe(activeElement, {
          childList: true,
          subtree: true,
        });
      }

      update();
    },
    { flush: "post" },
  );

  onBeforeUnmount(() => {
    stopWatching();
    stop();
  });
};
