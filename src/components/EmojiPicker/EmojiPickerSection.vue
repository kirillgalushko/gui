<script setup lang="ts">
import EmojiPickerButton from "./EmojiPickerButton.vue";
import type { EmojiPickerCategory, EmojiPickerEmoji } from "./types";

export interface EmojiPickerSectionProps {
  category: EmojiPickerCategory;
}

const props = defineProps<EmojiPickerSectionProps>();
const emit = defineEmits<{
  select: [emoji: EmojiPickerEmoji];
}>();
</script>

<template>
  <section
    class="emoji-picker-section"
    :aria-labelledby="`emoji-category-${props.category.id}`"
  >
    <h3
      :id="`emoji-category-${props.category.id}`"
      class="emoji-picker-section__title"
    >
      {{ props.category.label }}
    </h3>
    <div class="emoji-picker-section__grid">
      <EmojiPickerButton
        v-for="emoji in props.category.emojis"
        :key="emoji.value"
        :emoji="emoji"
        @select="emit('select', $event)"
      />
    </div>
  </section>
</template>

<style scoped>
.emoji-picker-section {
  display: grid;
  gap: var(--gap-2);
}

.emoji-picker-section__title {
  margin: 0;
  color: hsl(var(--muted-foreground));
  font-size: var(--emoji-picker-title-size, 14px);
  font-weight: 600;
  line-height: var(--emoji-picker-title-line-height, 20px);
}

.emoji-picker-section__grid {
  display: grid;
  grid-template-columns: repeat(var(--emoji-picker-columns, 8), minmax(0, 1fr));
  gap: 2px;
}
</style>
