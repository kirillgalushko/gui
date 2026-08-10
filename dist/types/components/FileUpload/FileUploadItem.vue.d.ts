import type { AttachmentState } from "../Attachment/types";
export interface FileUploadItemProps {
    disabled?: boolean;
    error?: string;
    file: File;
    progress?: number;
    removable?: boolean;
    onRetry?: () => void;
    state?: AttachmentState;
}
declare const _default: import("vue").DefineComponent<FileUploadItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<FileUploadItemProps> & Readonly<{}>, {
    progress: number;
    error: string;
    disabled: boolean;
    state: AttachmentState;
    removable: boolean;
    onRetry: () => void;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
