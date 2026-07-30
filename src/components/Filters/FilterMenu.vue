<script setup lang="ts">
import { computed, nextTick, reactive, ref } from "vue";
import {
  IconCheckOutline,
  IconFilterPlusOutline,
  IconSearchOutline,
} from "@gui/icons";
import Button from "../Button/Button.vue";
import Dropdown, { type DropdownContentWidth } from "../Dropdown/Dropdown.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";
import DropdownList from "../Dropdown/DropdownList.vue";
import Input from "../Input/Input.vue";
import {
  filterFieldsByQuery,
  filterOptionsByQuery,
  resolveFilterIcon,
} from "./filters";
import type {
  FilterControlAppearance,
  FilterField,
  FilterMenuSelectPayload,
  FilterOption,
} from "./types";

export interface FilterMenuProps extends FilterControlAppearance {
  fields: FilterField[];
  label?: string;
  searchPlaceholder?: string;
  optionSearchPlaceholder?: string;
  emptyLabel?: string;
  searchable?: boolean;
  closeOnSelect?: boolean;
  disabled?: boolean;
  contentWidth?: DropdownContentWidth;
}

const props = withDefaults(defineProps<FilterMenuProps>(), {
  label: "Добавить фильтр",
  searchPlaceholder: "Найти поле…",
  optionSearchPlaceholder: "Найти значение…",
  emptyLabel: "Ничего не найдено",
  searchable: true,
  closeOnSelect: true,
  size: "medium",
  mode: "outline",
  contentWidth: "extra-small",
});

const emit = defineEmits<{
  select: [payload: FilterMenuSelectPayload];
}>();

const menuKey = ref(0);
const shown = ref(false);
const fieldQuery = ref("");
const optionQueries = reactive<Record<string, string>>({});
const visibleFields = computed(() =>
  filterFieldsByQuery(props.fields, fieldQuery.value),
);

const hasNestedOptions = (field: FilterField): boolean =>
  !!field.options?.length;

const visibleOptions = (field: FilterField): FilterOption[] => {
  return filterOptionsByQuery(
    field.options ?? [],
    optionQueries[field.key] ?? "",
  );
};

const closeMenuAfterSelect = async () => {
  if (!props.closeOnSelect) {
    return;
  }

  await nextTick();
  shown.value = false;
  menuKey.value += 1;
};

const selectField = (field: FilterField) => {
  if (field.disabled || hasNestedOptions(field)) {
    return;
  }

  emit("select", { field });
  void closeMenuAfterSelect();
};

const selectOption = (field: FilterField, option: FilterOption) => {
  if (field.disabled || option.disabled) {
    return;
  }

  emit("select", { field, option });
  void closeMenuAfterSelect();
};
</script>

<template>
  <Dropdown
    :key="menuKey"
    v-model:shown="shown"
    :content-width="props.contentWidth"
    content-padding="none"
  >
    <slot name="trigger" :label="props.label">
      <Button :size="props.size" :mode="props.mode" :disabled="props.disabled">
        <IconFilterPlusOutline />
        {{ props.label }}
      </Button>
    </slot>

    <template #popper>
      <div v-if="props.searchable" class="filter-menu-search">
        <Input
          v-model="fieldQuery"
          :size="props.size"
          :placeholder="props.searchPlaceholder"
          :aria-label="props.searchPlaceholder"
        >
          <template #leftAdornment>
            <IconSearchOutline aria-hidden="true" />
          </template>
        </Input>
      </div>

      <DropdownList class="filter-menu-list" aria-label="Поля фильтра">
        <template v-if="visibleFields.length">
          <template v-for="field in visibleFields" :key="field.key">
            <Dropdown
              v-if="hasNestedOptions(field)"
              stretched
              instant-move
              placement="right-start"
              :content-width="props.contentWidth"
              content-padding="none"
            >
              <DropdownItem :disabled="field.disabled" show-arrow>
                <slot name="field" :field="field">
                  <component
                    v-if="field.icon"
                    :is="resolveFilterIcon(field.icon)"
                  />
                  <span>{{ field.label }}</span>
                </slot>
              </DropdownItem>

              <template #popper>
                <div v-if="field.searchable" class="filter-menu-search">
                  <Input
                    v-model="optionQueries[field.key]"
                    :size="props.size"
                    :placeholder="
                      field.placeholder ?? props.optionSearchPlaceholder
                    "
                    :aria-label="
                      field.placeholder ?? props.optionSearchPlaceholder
                    "
                  >
                    <template #leftAdornment>
                      <IconSearchOutline aria-hidden="true" />
                    </template>
                  </Input>
                </div>

                <DropdownList
                  class="filter-menu-list"
                  :aria-label="field.label"
                >
                  <DropdownItem
                    v-for="option in visibleOptions(field)"
                    :key="String(option.value)"
                    :disabled="option.disabled"
                    @click="selectOption(field, option)"
                  >
                    <slot name="option" :field="field" :option="option">
                      <component
                        v-if="option.icon"
                        :is="resolveFilterIcon(option.icon)"
                      />
                      <span>{{ option.label }}</span>
                    </slot>
                  </DropdownItem>

                  <DropdownItem
                    v-if="visibleOptions(field).length === 0"
                    disabled
                  >
                    {{ props.emptyLabel }}
                  </DropdownItem>
                </DropdownList>
              </template>
            </Dropdown>

            <DropdownItem
              v-else
              :disabled="field.disabled"
              @click="selectField(field)"
            >
              <slot name="field" :field="field">
                <component
                  v-if="field.icon"
                  :is="resolveFilterIcon(field.icon)"
                />
                <span>{{ field.label }}</span>
              </slot>
            </DropdownItem>
          </template>
        </template>

        <DropdownItem v-else disabled>
          <IconCheckOutline aria-hidden="true" />
          {{ props.emptyLabel }}
        </DropdownItem>
      </DropdownList>
    </template>
  </Dropdown>
</template>

<style scoped>
.filter-menu-search {
  padding: var(--gap-2);
  border-bottom: 1px solid hsl(var(--border));
}

.filter-menu-list {
  padding: var(--gap-1);
}
</style>
