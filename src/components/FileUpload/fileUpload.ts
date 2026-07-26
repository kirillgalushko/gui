import type { FileUploadRejection, FileUploadValidator } from "./types";

const matchesAcceptToken = (file: File, token: string): boolean => {
  const normalizedToken = token.trim().toLowerCase();
  const fileName = file.name.toLowerCase();
  const mimeType = file.type.toLowerCase();

  if (normalizedToken.startsWith(".")) {
    return fileName.endsWith(normalizedToken);
  }

  if (normalizedToken.endsWith("/*")) {
    return mimeType.startsWith(normalizedToken.slice(0, -1));
  }

  return mimeType === normalizedToken;
};

export const matchesFileAccept = (file: File, accept?: string): boolean => {
  if (accept === undefined || accept.trim().length === 0) {
    return true;
  }

  return accept.split(",").some((token) => matchesAcceptToken(file, token));
};

export const isSameFile = (first: File, second: File): boolean =>
  first.name === second.name &&
  first.size === second.size &&
  first.lastModified === second.lastModified;

export const validateFileUpload = (
  file: File,
  options: {
    accept?: string;
    maxSize?: number;
    validate?: FileUploadValidator;
  },
): FileUploadRejection | null => {
  const errors: string[] = [];

  if (!matchesFileAccept(file, options.accept)) {
    errors.push("Недопустимый формат файла");
  }

  if (options.maxSize !== undefined && file.size > options.maxSize) {
    errors.push("Файл превышает допустимый размер");
  }

  const customError = options.validate?.(file);
  if (typeof customError === "string" && customError.length > 0) {
    errors.push(customError);
  }

  return errors.length > 0 ? { file, errors } : null;
};

export const formatFileUploadSize = (size: number): string => {
  if (size < 1024) {
    return `${Math.max(1, size)} Б`;
  }

  if (size < 1024 * 1024) {
    return `${Math.ceil(size / 1024)} КБ`;
  }

  const megabytes = size / (1024 * 1024);
  return `${megabytes >= 10 ? Math.round(megabytes) : megabytes.toFixed(1)} МБ`;
};
