import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { FileUploadListOrientation, FileUploadSize } from "./types";

export interface FileUploadContext {
  addFiles: (files: File[]) => void;
  clear: () => void;
  disabled: ComputedRef<boolean>;
  files: ComputedRef<File[]>;
  inputId: string;
  invalid: ComputedRef<boolean>;
  isDragging: Ref<boolean>;
  open: () => void;
  remove: (file: File) => void;
  size: ComputedRef<FileUploadSize>;
}

export const fileUploadContextKey: InjectionKey<FileUploadContext> =
  Symbol("file-upload");

export const fileUploadListContextKey: InjectionKey<
  ComputedRef<FileUploadListOrientation>
> = Symbol("file-upload-list");
