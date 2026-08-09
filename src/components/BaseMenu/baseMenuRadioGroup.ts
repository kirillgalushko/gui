import type { ComputedRef, InjectionKey, Ref } from "vue";

export type BaseMenuRadioValue = string | number;

export interface BaseMenuRadioGroupContext {
  model: Ref<BaseMenuRadioValue | null>;
  disabled: ComputedRef<boolean>;
  select: (value: BaseMenuRadioValue) => void;
}

export const baseMenuRadioGroupContextKey: InjectionKey<BaseMenuRadioGroupContext> =
  Symbol("base-menu-radio-group");
