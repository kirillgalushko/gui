import type { FileUploadRejection, FileUploadValidator } from "./types";
export declare const matchesFileAccept: (file: File, accept?: string) => boolean;
export declare const isSameFile: (first: File, second: File) => boolean;
export declare const validateFileUpload: (file: File, options: {
    accept?: string;
    maxSize?: number;
    validate?: FileUploadValidator;
}) => FileUploadRejection | null;
export declare const formatFileUploadSize: (size: number) => string;
