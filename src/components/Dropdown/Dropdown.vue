<script setup lang="ts">
import "floating-vue/dist/style.css";
import { computed, useAttrs } from "vue";
import { Dropdown } from "floating-vue";

defineOptions({
  inheritAttrs: false,
});

export interface DropdownProps {
  stretched?: boolean;
  contentWidth?: DropdownContentWidth;
  contentPadding?: "none" | "default" | "comfortable";
}

export type DropdownContentWidth = "extra-small" | "small" | "medium" | "large";

const props = withDefaults(defineProps<DropdownProps>(), {
  stretched: false,
  contentPadding: "default",
});
const attrs = useAttrs();
const popperClass = computed(() => [
  attrs.popperClass,
  props.contentWidth
    ? `dropdown-content-width-${props.contentWidth}`
    : undefined,
  `dropdown-content-padding-${props.contentPadding}`,
]);
</script>

<template>
  <Dropdown
    v-bind="$attrs"
    :arrowOverflow="false"
    :autoBoundaryMaxSize="true"
    :overflowPadding="8"
    :popperClass="popperClass"
    :class="['dropdown', { stretched: props.stretched }]"
  >
    <template #default>
      <slot></slot>
    </template>

    <template #popper>
      <slot name="popper"></slot>
    </template>
  </Dropdown>
</template>

<style scoped>
.dropdown {
  display: inline-flex;
  min-width: 0;
}

.dropdown.stretched {
  width: 100%;
}
</style>
<style>
.v-popper--theme-dropdown .v-popper__inner {
  --dropdown-text-color: hsl(var(--popover-foreground));
  --dropdown-background-color: hsl(var(--popover));
  --dropdown-border-color: hsl(var(--border));

  font-size: 14px;
  border-radius: 12px;
  padding: 4px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  color: var(--dropdown-text-color);
  background-color: var(--dropdown-background-color);
  border: 1px solid var(--dropdown-border-color);
  box-sizing: border-box;
}

.v-popper--theme-dropdown.dropdown-content-width-small .v-popper__inner {
  width: min(320px, calc(100vw - 16px));
}

.v-popper--theme-dropdown.dropdown-content-width-extra-small .v-popper__inner {
  width: min(260px, calc(100vw - 16px));
}

.v-popper--theme-dropdown.dropdown-content-width-medium .v-popper__inner {
  width: min(420px, calc(100vw - 16px));
}

.v-popper--theme-dropdown.dropdown-content-width-large .v-popper__inner {
  width: min(520px, calc(100vw - 16px));
}

.v-popper--theme-dropdown.dropdown-content-padding-comfortable
  .v-popper__inner {
  padding: var(--gap-3);
}

.v-popper--theme-dropdown.dropdown-content-padding-none .v-popper__inner {
  padding: 0;
}

.v-popper--theme-dropdown.calendar-dropdown .v-popper__inner {
  border-radius: 16px;
  padding: var(--gap-3);
}

.v-popper__arrow-container {
  display: none;
}
</style>
