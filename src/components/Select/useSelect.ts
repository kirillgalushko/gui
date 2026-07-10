import { ref } from 'vue';

export interface RegisteredOption {
  value: string
  label: string
}

export const useSelect = (defaultOptionValue?: string, onChange?: (option: RegisteredOption) => void) => {
  const options = ref<Map<string, string>>(new Map());
  const selectedOption = ref();

  const registerOption = (option: RegisteredOption) => {
    options.value.set(option.value, option.label);

    if (selectedOption.value?.value === option.value) {
      selectedOption.value = option;
      return;
    }

    if (defaultOptionValue !== undefined && option.value === defaultOptionValue && !selectedOption.value) {
      selectedOption.value = option;
    }
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
