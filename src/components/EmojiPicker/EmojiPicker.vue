<script setup lang="ts">
import { computed, useId } from "vue";
import Empty from "../Empty/Empty.vue";
import Input from "../Input/Input.vue";
import ScrollArea from "../ScrollArea/ScrollArea.vue";
import { DEFAULT_EMOJI_CATEGORIES } from "./emojiData";
import EmojiPickerSection from "./EmojiPickerSection.vue";
import { useEmojiPicker } from "./useEmojiPicker";
import type {
  EmojiPickerCategory,
  EmojiPickerEmoji,
  EmojiPickerSize,
} from "./types";

export interface EmojiPickerProps {
  size?: EmojiPickerSize;
  categories?: readonly EmojiPickerCategory[];
  placeholder?: string;
  emptyLabel?: string;
  ariaLabel?: string;
  maxHeight?: string | number;
}

const props = withDefaults(defineProps<EmojiPickerProps>(), {
  size: "large",
  categories: () => DEFAULT_EMOJI_CATEGORIES,
  placeholder: "Поиск эмодзи",
  emptyLabel: "Ничего не найдено",
  ariaLabel: "Выбор эмодзи",
});
const emit = defineEmits<{
  select: [value: string];
  "select-emoji": [emoji: EmojiPickerEmoji];
}>();
const model = defineModel<string>();
const categories = computed(() => props.categories);
const picker = useEmojiPicker(categories);
const searchInputId = useId();
const maxHeight = computed(() => {
  if (props.maxHeight !== undefined) {
    return props.maxHeight;
  }

  if (props.size === "small") {
    return "220px";
  }

  return props.size === "medium" ? "280px" : "360px";
});
const searchInputSize = computed(() => {
  return props.size === "medium" ? "small" : "medium";
});

const selectEmoji = (emoji: EmojiPickerEmoji) => {
  model.value = emoji.value;
  emit("select", emoji.value);
  emit("select-emoji", emoji);
};
</script>

<template>
  <div
    :class="['emoji-picker', props.size]"
    role="dialog"
    :aria-label="props.ariaLabel"
  >
    <div class="emoji-picker__search">
      <label class="emoji-picker__visually-hidden" :for="searchInputId">{{
        props.placeholder
      }}</label>
      <Input
        :id="searchInputId"
        v-model="picker.query.value"
        :size="searchInputSize"
        type="search"
        :placeholder="props.placeholder"
        autocomplete="off"
        auto-focus
      />
    </div>

    <ScrollArea
      class="emoji-picker__content"
      :max-height="maxHeight"
      fade
      aria-label="Список эмодзи"
    >
      <div
        v-if="picker.visibleCategories.value.length"
        class="emoji-picker__categories"
      >
        <EmojiPickerSection
          v-for="category in picker.visibleCategories.value"
          :key="category.id"
          :category="category"
          @select="selectEmoji"
        />
      </div>
      <Empty v-else size="small">
        <span class="emoji-picker__empty">{{ props.emptyLabel }}</span>
      </Empty>
    </ScrollArea>
  </div>
</template>

<style scoped>
.emoji-picker {
  --emoji-picker-padding: var(--gap-3);
  --emoji-picker-content-width: min(396px, calc(100vw - 40px));
  --emoji-picker-category-gap: var(--gap-5);
  --emoji-picker-columns: 8;
  --emoji-picker-emoji-size: 30px;
  --emoji-picker-title-size: 14px;
  --emoji-picker-title-line-height: 20px;

  display: grid;
  gap: var(--gap-3);
  padding: var(--emoji-picker-padding);
}

.emoji-picker.medium {
  --emoji-picker-padding: var(--gap-2);
  --emoji-picker-content-width: min(296px, calc(100vw - 32px));
  --emoji-picker-category-gap: var(--gap-4);
  --emoji-picker-columns: 7;
  --emoji-picker-emoji-size: 26px;
  --emoji-picker-title-size: 12px;
  --emoji-picker-title-line-height: 18px;

  gap: var(--gap-2);
}

.emoji-picker.small {
  --emoji-picker-padding: var(--gap-2);
  --emoji-picker-content-width: min(244px, calc(100vw - 24px));
  --emoji-picker-category-gap: var(--gap-3);
  --emoji-picker-columns: 6;
  --emoji-picker-emoji-size: 24px;
  --emoji-picker-title-size: 12px;
  --emoji-picker-title-line-height: 18px;

  gap: var(--gap-2);
}

.emoji-picker__search {
  min-width: 0;
}

.emoji-picker__content {
  width: var(--emoji-picker-content-width);
}

.emoji-picker__categories {
  display: grid;
  gap: var(--emoji-picker-category-gap);
  padding: 0 var(--gap-1) var(--gap-1);
}

.emoji-picker__empty {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
}

.emoji-picker__visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
