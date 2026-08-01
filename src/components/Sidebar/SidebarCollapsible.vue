<script setup lang="ts">
import { computed, inject, ref, toRef, type Ref } from "vue";
import { IconChevronRightOutline } from "@gui/icons";
import Dropdown from "../Dropdown/Dropdown.vue";
import SidebarItem from "./SidebarItem.vue";
import { useSidebarCollapsible } from "./useSidebarCollapsible";

export interface SidebarCollapsibleProps {
  defaultOpened?: boolean;
  disabled?: boolean;
  label: string;
  modelValue?: boolean;
  selected?: boolean;
}

const props = withDefaults(defineProps<SidebarCollapsibleProps>(), {
  defaultOpened: false,
  disabled: false,
  modelValue: undefined,
  selected: false,
});
const emit = defineEmits<{
  change: [opened: boolean];
  "update:modelValue": [opened: boolean];
}>();

const isCompact = inject<Ref<boolean>>("sidebar-is-compact", ref(false));
const { opened, toggle } = useSidebarCollapsible({
  defaultOpened: toRef(props, "defaultOpened"),
  disabled: toRef(props, "disabled"),
  modelValue: toRef(props, "modelValue"),
  onChange: (nextOpened) => {
    emit("update:modelValue", nextOpened);
    emit("change", nextOpened);
  },
});
const state = computed(() => (opened.value ? "open" : "closed"));
</script>

<template>
  <Dropdown
    v-if="isCompact"
    stretched
    placement="right-start"
    content-width="extra-small"
    content-padding="none"
    :popper-hide-triggers="['click']"
  >
    <SidebarItem
      :selected="props.selected"
      tooltip-disabled
      :aria-label="props.label"
      :disabled="props.disabled"
    >
      <template #left>
        <slot name="icon"></slot>
      </template>
    </SidebarItem>

    <template #popper>
      <div class="sidebar-collapsible__popover">
        <div class="sidebar-collapsible__popover-title">{{ props.label }}</div>
        <slot></slot>
      </div>
    </template>
  </Dropdown>

  <div
    v-else
    class="sidebar-collapsible"
    :data-disabled="props.disabled || undefined"
    :data-state="state"
  >
    <SidebarItem
      :selected="props.selected"
      :aria-expanded="opened"
      :disabled="props.disabled"
      @click="toggle"
    >
      <template #left>
        <slot name="icon"></slot>
      </template>
      {{ props.label }}
      <template #right>
        <IconChevronRightOutline
          class="sidebar-collapsible__chevron"
          aria-hidden="true"
        />
      </template>
    </SidebarItem>

    <div class="sidebar-collapsible__content" :aria-hidden="!opened">
      <div class="sidebar-collapsible__content-clip">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-collapsible[data-disabled] {
  opacity: 0.5;
}

.sidebar-collapsible__chevron {
  transition: transform 0.2s ease;
}

.sidebar-collapsible[data-state="open"] .sidebar-collapsible__chevron {
  transform: rotate(90deg);
}

.sidebar-collapsible__content {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear 0.2s;
}

.sidebar-collapsible__content[aria-hidden="false"] {
  grid-template-rows: 1fr;
  visibility: visible;
  transition:
    grid-template-rows 0.2s ease,
    visibility 0s linear;
}

.sidebar-collapsible__content-clip {
  min-height: 0;
  overflow: hidden;
}

.sidebar-collapsible__popover {
  padding: var(--gap-1);
}

.sidebar-collapsible__popover-title {
  padding: var(--gap-2) var(--gap-3);
  border-bottom: 1px solid hsl(var(--border));
  color: hsl(var(--popover-foreground));
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

@media (prefers-reduced-motion: reduce) {
  .sidebar-collapsible__chevron,
  .sidebar-collapsible__content {
    transition: none;
  }
}
</style>
