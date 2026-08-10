import { type ComputedRef } from "vue";
export interface UseNavigationMenuOptions {
    closeDelayDuration?: number;
    defaultValue?: string;
    delayDuration?: number;
    modelValue?: () => string | undefined;
    onValueChange?: (value: string) => void;
}
export interface UseNavigationMenuResult {
    cancelScheduledChange: () => void;
    close: () => void;
    open: (value: string) => void;
    scheduleClose: () => void;
    scheduleOpen: (value: string) => void;
    toggle: (value: string) => void;
    value: ComputedRef<string>;
}
export declare const useNavigationMenu: (options: UseNavigationMenuOptions) => UseNavigationMenuResult;
