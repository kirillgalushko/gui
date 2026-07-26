import type { ComputedRef, InjectionKey, Ref } from "vue";

export type RadioGroupValue = string | number;
export type RadioGroupMode = "default" | "card";
export type RadioGroupOrientation = "vertical" | "horizontal";

export interface RadioGroupContext {
  model: Ref<RadioGroupValue | null>;
  name: ComputedRef<string>;
  disabled: ComputedRef<boolean>;
  invalid: ComputedRef<boolean>;
  required: ComputedRef<boolean>;
  mode: ComputedRef<RadioGroupMode>;
  select: (value: RadioGroupValue) => void;
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> =
  Symbol("radio-group");
