<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Dropdown from "../Dropdown/Dropdown.vue";
import EmojiPicker from "./EmojiPicker.vue";
import type {
  EmojiPickerCategory,
  EmojiPickerEmoji,
  EmojiPickerSize,
} from "./types";

export interface EmojiPickerDropdownProps {
  shown?: boolean;
  disabled?: boolean;
  closeOnSelect?: boolean;
  size?: EmojiPickerSize;
  categories?: readonly EmojiPickerCategory[];
  placeholder?: string;
  emptyLabel?: string;
  ariaLabel?: string;
  maxHeight?: string | number;
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<EmojiPickerDropdownProps>(), {
  closeOnSelect: true,
  size: "large",
});
const emit = defineEmits<{
  select: [value: string];
  "select-emoji": [emoji: EmojiPickerEmoji];
  "update:shown": [shown: boolean];
}>();
const internalShown = ref(false);
const contentWidth = computed(() => {
  if (props.size === "small") {
    return "extra-small";
  }

  return props.size === "medium" ? "small" : "medium";
});
const isShown = computed({
  get: () => props.shown ?? internalShown.value,
  set: (value: boolean) => {
    internalShown.value = value;
    emit("update:shown", value);
  },
});

const selectEmoji = (value: string) => {
  if (props.disabled) {
    return;
  }

  emit("select", value);

  if (props.closeOnSelect) {
    isShown.value = false;
  }
};

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) {
      isShown.value = false;
    }
  },
);
</script>

<template>
  <Dropdown
    v-bind="$attrs"
    v-model:shown="isShown"
    :triggers="props.disabled ? [] : undefined"
    :content-width="contentWidth"
    content-padding="none"
    placement="bottom-start"
    :distance="8"
  >
    <slot></slot>

    <template #popper>
      <EmojiPicker
        :size="props.size"
        :categories="props.categories"
        :placeholder="props.placeholder"
        :empty-label="props.emptyLabel"
        :aria-label="props.ariaLabel"
        :max-height="props.maxHeight"
        @select="selectEmoji"
        @select-emoji="emit('select-emoji', $event)"
      />
    </template>
  </Dropdown>
</template>
