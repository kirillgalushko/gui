import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { FileUploadOrientation, FileUploadSize } from "./types";

export interface FileUploadContext {
  addFiles: (files: File[]) => void;
  clear: () => void;
  disabled: ComputedRef<boolean>;
  files: ComputedRef<File[]>;
  inputId: string;
  invalid: ComputedRef<boolean>;
  isDragging: Ref<boolean>;
  open: () => void;
  orientation: ComputedRef<FileUploadOrientation>;
  remove: (file: File) => void;
  size: ComputedRef<FileUploadSize>;
}

export const fileUploadContextKey: InjectionKey<FileUploadContext> =
  Symbol("file-upload");
