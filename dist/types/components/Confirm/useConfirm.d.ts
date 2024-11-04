interface ConfirmOptions {
    title?: string;
    description?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
}
export declare const useConfirm: () => {
    title: import("vue").Ref<string | undefined, string | undefined>;
    description: import("vue").Ref<string | undefined, string | undefined>;
    confirm: (options?: ConfirmOptions) => Promise<unknown>;
    isOpened: import("vue").Ref<boolean, boolean>;
    resolve: import("vue").Ref<any, any>;
    reject: import("vue").Ref<any, any>;
    confirmButtonText: import("vue").Ref<string | undefined, string | undefined>;
    cancelButtonText: import("vue").Ref<string | undefined, string | undefined>;
};
export {};
