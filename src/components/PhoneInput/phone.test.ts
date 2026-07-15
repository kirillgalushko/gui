import { describe, expect, it } from "vitest";
import {
  canApplyPhoneInput,
  formatPhoneInput,
  formatPhoneInputWithCaret,
  isValidPhone,
  parsePhone,
} from "./phone";

describe("phone helpers", () => {
  it("formats a Russian phone number while typing", () => {
    expect(formatPhoneInput("9991234567")).toBe("+9991234567");
    expect(formatPhoneInput("+7 (999) 123-45-6")).toBe("+7 (999) 123-45-6");
  });

  it("keeps caret position after formatting", () => {
    expect(
      formatPhoneInputWithCaret({ value: "79991234567", caret: 5 }),
    ).toEqual({
      value: "+7 (999) 123-45-67",
      caret: 10,
    });
  });

  it("normalizes local and 8-prefixed Russian numbers", () => {
    expect(parsePhone("9991234567")).toEqual({
      formatted: "+7 (999) 123-45-67",
      raw: "+79991234567",
    });
    expect(parsePhone("8 999 123-45-67")).toEqual({
      formatted: "+7 (999) 123-45-67",
      raw: "+79991234567",
    });
  });

  it("validates only complete Russian phone numbers", () => {
    expect(isValidPhone("")).toBe(true);
    expect(isValidPhone("+7 (999) 123-45-67")).toBe(true);
    expect(isValidPhone("+7 (999) 123-45-6")).toBe(false);
  });

  it("prevents inserting more than eleven digits", () => {
    expect(
      canApplyPhoneInput({
        currentValue: "+7 (999) 123-45-67",
        insertedValue: "8",
        selectionStart: 18,
        selectionEnd: 18,
      }),
    ).toBe(false);
  });
});
