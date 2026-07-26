import type { ComponentSize } from "../../types";

export type FileUploadOrientation = "horizontal" | "vertical";
export type FileUploadSize = ComponentSize;

export interface FileUploadRejection {
  file: File;
  errors: string[];
}

export type FileUploadValidator = (file: File) => string | null | undefined;
