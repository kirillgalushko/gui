export interface RegisteredOption {
    value: string;
    label: string;
}
declare const useSelect: (defaultOptionValue?: string, onChange?: (option: RegisteredOption) => void) => {
    options: import("vue").Ref<Map<string, string> & Omit<Map<string, string>, keyof Map<any, any>>, Map<string, string> | (Map<string, string> & Omit<Map<string, string>, keyof Map<any, any>>)>;
    selectedOption: import("vue").Ref<any, any>;
    registerOption: (option: RegisteredOption) => void;
    selectOption: (option: RegisteredOption) => void;
};
export default useSelect;
