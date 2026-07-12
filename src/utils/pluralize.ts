export const pluralize = (value: number, one: string, few: string, many: string): string => {
  const absoluteValue = Math.abs(value);
  const mod10 = absoluteValue % 10;
  const mod100 = absoluteValue % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return few;
  }

  return many;
};
