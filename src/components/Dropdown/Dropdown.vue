<script setup lang="ts">
import 'floating-vue/dist/style.css';
import { Dropdown } from 'floating-vue';

</script>

<template>
  <Dropdown v-bind="$attrs" :arrowOverflow="false" :class="['dropdown']">
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
}
</style>
<style>
.v-popper--theme-dropdown .v-popper__inner {
  --dropdown-text-color: hsl(var(--popover-foreground));
  --dropdown-background-color: hsl(var(--popover));
  --dropdown-border-color: hsl(var(--border));

  font-size: 14px;
  border-radius: 6px;
  padding: 4px;
  color: var(--dropdown-text-color);
  background-color: var(--dropdown-background-color);
  border: 1px solid var(--dropdown-border-color);
}

.v-popper__arrow-container {
  display: none;
}
</style>
