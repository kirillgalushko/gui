import type { ComponentSize } from "../../types";

export type AttachmentOrientation = "horizontal" | "vertical";
export type AttachmentState =
  | "idle"
  | "uploading"
  | "processing"
  | "error"
  | "done";
export type AttachmentSize = ComponentSize;
export type AttachmentMediaVariant = "icon" | "image";
