import { type ComputedRef, type Ref } from "vue";
interface UseNavbarCompactLayoutOptions {
    actionsRef: Ref<HTMLElement | null>;
    isViewportCompact: ComputedRef<boolean>;
    layoutRef: Ref<HTMLElement | null>;
    leftRef: Ref<HTMLElement | null>;
    navbarRef: Ref<HTMLElement | null>;
    navigationRef: Ref<HTMLElement | null>;
}
export declare function useNavbarCompactLayout({ actionsRef, isViewportCompact, layoutRef, leftRef, navbarRef, navigationRef, }: UseNavbarCompactLayoutOptions): {
    isCompact: ComputedRef<boolean>;
};
export {};
