import type { Component } from "vue";
import type { ComponentSize } from "../../types";

export type FilterControlMode =
  | "default"
  | "contrast"
  | "ghost"
  | "outline"
  | "negative"
  | "accent";

export type FilterFieldType =
  | "text"
  | "select"
  | "multiselect"
  | "date"
  | "custom";

export type FilterItemLayout = "full" | "compact";

export interface FilterOperator {
  value: string;
  label: string;
}

export interface FilterOption<T = unknown> {
  value: T;
  label: string;
  icon?: Component;
  disabled?: boolean;
  keywords?: string[];
}

export interface FilterField<T = unknown> {
  key: string;
  label: string;
  type?: FilterFieldType;
  icon?: Component;
  options?: FilterOption<T>[];
  operators?: FilterOperator[];
  defaultOperator?: string;
  defaultValue?: T | T[];
  searchable?: boolean;
  disabled?: boolean;
  placeholder?: string;
  valuePlaceholder?: string;
  itemLayout?: FilterItemLayout;
  isValueEqual?(left: T, right: T): boolean;
  formatValue?(values: T[], options: FilterOption<T>[]): string | undefined;
}

export interface ActiveFilter<T = unknown> {
  id: string;
  field: string;
  operator: string;
  values: T[];
}

export interface FilterMenuSelectPayload<T = unknown> {
  field: FilterField<T>;
  option?: FilterOption<T>;
}

export interface VisibilityOption {
  value: string;
  label: string;
  icon?: Component;
  disabled?: boolean;
}

export interface FilterControlAppearance {
  size?: ComponentSize;
  mode?: FilterControlMode;
}
