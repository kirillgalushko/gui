import { ref } from 'vue';

export interface RegisteredOption {
  value: string
  label: string
}

export const useSelect = (defaultOptionValue?: string, onChange?: (option: RegisteredOption) => void) => {
  const options = ref<Map<string, string>>(new Map());
  const selectedOption = ref();

  const registerOption = (option: RegisteredOption) => {
    if (defaultOptionValue && option.value === defaultOptionValue) {
      selectedOption.value = option;
    }
    options.value.set(option.value, option.label);
  };

  const selectOption = (option: RegisteredOption) => {
    selectedOption.value = option;
    onChange?.(option);
  };

  return {
    options,
    selectedOption,
    registerOption,
    selectOption,
  };
};
