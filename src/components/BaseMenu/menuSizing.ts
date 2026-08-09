export const DEFAULT_MENU_MAX_WIDTH = "calc(100vw - 16px)";

export const resolveMenuWidth = (width: string): string =>
  width === "auto" ? "fit-content" : width;
