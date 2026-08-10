export type CollapseBooleanSource = boolean | (() => boolean) | {
    readonly value: boolean;
};
export type CollapseState = {
    value: boolean;
};
export interface UseCollapseOptions {
    defaultOpened?: boolean;
    disabled?: CollapseBooleanSource;
    id?: string;
    onChange?: (opened: boolean) => void;
    opened?: CollapseState;
}
export declare const useCollapse: (options?: UseCollapseOptions) => {
    close: () => void;
    collapseProps: {
        id: string;
        labelledBy: string;
        readonly opened: boolean;
        role: "region";
    };
    open: () => void;
    opened: CollapseState;
    setOpened: (nextOpened: boolean) => void;
    toggle: () => void;
    triggerProps: {
        id: string;
        "aria-controls": string;
        readonly "aria-expanded": boolean;
        readonly "aria-disabled": true | undefined;
        onClick: () => void;
    };
};
