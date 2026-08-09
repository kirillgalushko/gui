export const toggleMenuCheckboxValue = (
  value: boolean,
  disabled = false,
): boolean => (disabled ? value : !value);

export const selectMenuRadioValue = <Value>(
  currentValue: Value,
  nextValue: Value,
  disabled = false,
): Value => (disabled ? currentValue : nextValue);
