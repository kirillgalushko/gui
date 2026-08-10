import { type MaybeRefOrGetter } from "vue";
export interface UseSidebarCollapsibleOptions {
    defaultOpened?: MaybeRefOrGetter<boolean>;
    disabled?: MaybeRefOrGetter<boolean>;
    modelValue?: MaybeRefOrGetter<boolean | undefined>;
    onChange?: (opened: boolean) => void;
}
export declare const useSidebarCollapsible: (options?: UseSidebarCollapsibleOptions) => {
    opened: import("vue").ComputedRef<boolean>;
    toggle: () => void;
};
