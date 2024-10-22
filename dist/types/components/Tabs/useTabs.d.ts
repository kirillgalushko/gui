declare const useTabs: (defaultTabName: string, onChange: (tabName: string) => void) => {
    tabs: import("vue").Ref<HTMLDivElement[], HTMLDivElement[]>;
    selectedTab: import("vue").Ref<any, any>;
    registerTab: (tabElement: HTMLDivElement) => void;
    selectTab: (tabElement: HTMLDivElement) => void;
};
export default useTabs;
