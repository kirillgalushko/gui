<script setup lang="ts">
import { inject, provide } from "vue";
import Dropdown, { type DropdownProps } from "./Dropdown.vue";
import {
  dropdownSubmenuContextKey,
  useDropdownSubmenu,
} from "./useDropdownSubmenu";

defineOptions({
  inheritAttrs: false,
});

export type DropdownSubProps = Omit<DropdownProps, "stretched">;

const props = defineProps<DropdownSubProps>();
const parentSubmenu = inject(dropdownSubmenuContextKey, null);
const submenu = useDropdownSubmenu();

provide(dropdownSubmenuContextKey, submenu);

const showContent = () => {
  parentSubmenu?.show();
  submenu.setHovered("content", true);
};

const scheduleContentHide = () => {
  submenu.setHovered("content", false);
  parentSubmenu?.scheduleHide();
};

const focusContent = () => {
  parentSubmenu?.show();
  submenu.setFocused("content", true);
};

const blurContent = () => {
  submenu.setFocused("content", false);
  parentSubmenu?.scheduleHide();
};

const updateShown = (shown: boolean) => {
  if (!shown) submenu.hide();
};
</script>

<template>
  <Dropdown
    v-bind="$attrs"
    :shown="submenu.shown.value"
    :content-width="props.contentWidth"
    :content-max-width="props.contentMaxWidth"
    :content-padding="props.contentPadding"
    stretched
    instant-move
    placement="right-start"
    :triggers="[]"
    :popper-triggers="[]"
    :no-auto-focus="true"
    @update:shown="updateShown"
  >
    <div class="dropdown-sub-trigger">
      <slot></slot>
    </div>
    <template #popper>
      <div
        @mouseenter="showContent"
        @mouseleave="scheduleContentHide"
        @focusin="focusContent"
        @focusout="blurContent"
      >
        <slot name="popper"></slot>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped>
.dropdown-sub-trigger {
  display: flex;
  width: 100%;
  min-width: 0;
}
</style>
