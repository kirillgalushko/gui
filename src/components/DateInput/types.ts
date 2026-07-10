export type DateInputValue = Date | null;

export type DateInputChangePayload = {
  value: DateInputValue;
  inputValue: string;
  isValid: boolean;
};
