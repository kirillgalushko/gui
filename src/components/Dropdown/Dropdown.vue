<script setup lang="ts">
import 'floating-vue/dist/style.css';
import { Dropdown } from 'floating-vue';

export interface DropdownProps {
  stretched?: boolean;
}

const props = withDefaults(defineProps<DropdownProps>(), {
  stretched: false,
});
</script>

<template>
  <Dropdown v-bind="$attrs" :arrowOverflow="false" :autoBoundaryMaxSize="true" :overflowPadding="8"
    :class="['dropdown', { stretched: props.stretched }]">
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
  border-radius: 10px;
  padding: 4px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  color: var(--dropdown-text-color);
  background-color: var(--dropdown-background-color);
  border: 1px solid var(--dropdown-border-color);
}

.v-popper__arrow-container {
  display: none;
}
</style>
