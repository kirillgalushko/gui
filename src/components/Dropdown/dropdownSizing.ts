import type { CSSProperties } from "vue";
import type { DropdownContentWidth } from "./Dropdown.vue";

export const resolveDropdownContentStyles = (
  width: DropdownContentWidth,
  maxWidth: string,
): CSSProperties => ({
  width: width === "auto" ? "fit-content" : "100%",
  maxWidth,
});
