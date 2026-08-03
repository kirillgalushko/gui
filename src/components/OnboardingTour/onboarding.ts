import type {
  OnboardingRect,
  OnboardingTourScrollBehavior,
  OnboardingTourTarget,
} from "./types";

const clippingOverflow = /(auto|scroll|hidden|clip)/;

export function clampTourStep(index: number, stepsCount: number) {
  if (stepsCount <= 0) {
    return 0;
  }

  return Math.min(Math.max(Math.trunc(index), 0), stepsCount - 1);
}

export function resolveOnboardingTarget(
  target: OnboardingTourTarget,
  root: ParentNode = document,
) {
  if (typeof target === "function") {
    return target();
  }

  if (typeof target !== "string") {
    return target;
  }

  try {
    const element = root.querySelector(target);
    return element instanceof HTMLElement ? element : null;
  } catch {
    return null;
  }
}

function rectFromEdges(
  top: number,
  right: number,
  bottom: number,
  left: number,
): OnboardingRect | null {
  const width = Math.max(0, right - left);
  const height = Math.max(0, bottom - top);

  if (width <= 0 || height <= 0) {
    return null;
  }

  return { top, right, bottom, left, width, height };
}

function intersectRects(first: OnboardingRect, second: OnboardingRect) {
  return rectFromEdges(
    Math.max(first.top, second.top),
    Math.min(first.right, second.right),
    Math.min(first.bottom, second.bottom),
    Math.max(first.left, second.left),
  );
}

function toOnboardingRect(rect: DOMRect): OnboardingRect | null {
  return rectFromEdges(rect.top, rect.right, rect.bottom, rect.left);
}

export function getVisibleElementRect(
  element: HTMLElement,
  viewportWidth = window.innerWidth,
  viewportHeight = window.innerHeight,
) {
  const elementRect = toOnboardingRect(element.getBoundingClientRect());

  if (!elementRect) {
    return null;
  }

  let visibleRect: OnboardingRect | null = intersectRects(elementRect, {
    top: 0,
    right: viewportWidth,
    bottom: viewportHeight,
    left: 0,
    width: viewportWidth,
    height: viewportHeight,
  });
  let ancestor = element.parentElement;

  while (visibleRect && ancestor && ancestor !== document.body) {
    const style = window.getComputedStyle(ancestor);

    if (
      clippingOverflow.test(style.overflow) ||
      clippingOverflow.test(style.overflowX) ||
      clippingOverflow.test(style.overflowY)
    ) {
      const ancestorRect = toOnboardingRect(ancestor.getBoundingClientRect());

      if (ancestorRect) {
        visibleRect = intersectRects(visibleRect, ancestorRect);
      }
    }

    ancestor = ancestor.parentElement;
  }

  return visibleRect;
}

export function isElementFullyVisible(element: HTMLElement) {
  const elementRect = toOnboardingRect(element.getBoundingClientRect());
  const visibleRect = getVisibleElementRect(element);

  if (!elementRect || !visibleRect) {
    return false;
  }

  return (
    visibleRect.top <= elementRect.top &&
    visibleRect.left <= elementRect.left &&
    visibleRect.right >= elementRect.right &&
    visibleRect.bottom >= elementRect.bottom
  );
}

export function scrollOnboardingTargetIntoView(
  element: HTMLElement,
  behavior: OnboardingTourScrollBehavior,
) {
  if (isElementFullyVisible(element)) {
    return false;
  }

  element.scrollIntoView({
    behavior,
    block: "center",
    inline: "center",
  });

  return true;
}

export function shouldBlockOnboardingTargetScroll(
  event: Event,
  target: HTMLElement | null,
  lockTargetScroll: boolean,
) {
  return Boolean(
    lockTargetScroll && target && event.composedPath().includes(target),
  );
}

export function expandAndClampRect(
  rect: OnboardingRect,
  padding: number,
  viewportWidth: number,
  viewportHeight: number,
): OnboardingRect {
  const safePadding = Math.max(0, padding);
  const top = Math.max(0, rect.top - safePadding);
  const left = Math.max(0, rect.left - safePadding);
  const right = Math.min(viewportWidth, rect.right + safePadding);
  const bottom = Math.min(viewportHeight, rect.bottom + safePadding);

  return {
    top,
    right,
    bottom,
    left,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top),
  };
}

export function getOverlayRects(
  spotlight: OnboardingRect,
  viewportWidth: number,
  viewportHeight: number,
): OnboardingRect[] {
  const candidates = [
    rectFromEdges(0, viewportWidth, spotlight.top, 0),
    rectFromEdges(spotlight.top, spotlight.left, spotlight.bottom, 0),
    rectFromEdges(
      spotlight.top,
      viewportWidth,
      spotlight.bottom,
      spotlight.right,
    ),
    rectFromEdges(spotlight.bottom, viewportWidth, viewportHeight, 0),
  ];

  return candidates.filter((rect): rect is OnboardingRect => rect !== null);
}

export function getFocusableElements(...containers: (HTMLElement | null)[]) {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[contenteditable='true']",
  ].join(",");

  return containers.flatMap((container) => {
    if (!container) {
      return [];
    }

    const descendants = Array.from(
      container.querySelectorAll<HTMLElement>(selector),
    );
    const candidates = container.matches(selector)
      ? [container, ...descendants]
      : descendants;

    return candidates.filter(
      (element) =>
        !element.hidden && element.getAttribute("aria-hidden") !== "true",
    );
  });
}
