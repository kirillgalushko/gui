export type ConfirmResult = "confirm" | "secondary";
export interface ConfirmOptions {
    title?: string;
    description?: string;
    confirmButtonText?: string;
    secondaryButtonText?: string;
    cancelButtonText?: string;
}
export declare const useConfirm: () => {
    title: import("vue").Ref<string | undefined, string | undefined>;
    description: import("vue").Ref<string | undefined, string | undefined>;
    confirm: (options?: ConfirmOptions) => Promise<ConfirmResult>;
    isOpened: import("vue").Ref<boolean, boolean>;
    resolve: import("vue").Ref<any, any>;
    secondary: import("vue").Ref<any, any>;
    reject: import("vue").Ref<any, any>;
    confirmButtonText: import("vue").Ref<string | undefined, string | undefined>;
    secondaryButtonText: import("vue").Ref<string | undefined, string | undefined>;
    cancelButtonText: import("vue").Ref<string | undefined, string | undefined>;
};
