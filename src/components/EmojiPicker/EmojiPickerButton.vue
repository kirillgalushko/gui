<script setup lang="ts">
import type { EmojiPickerEmoji } from "./types";

export interface EmojiPickerButtonProps {
  emoji: EmojiPickerEmoji;
}

const props = defineProps<EmojiPickerButtonProps>();
const emit = defineEmits<{
  select: [emoji: EmojiPickerEmoji];
}>();
</script>

<template>
  <button
    class="emoji-picker-button"
    type="button"
    :aria-label="props.emoji.label"
    :title="props.emoji.label"
    @click="emit('select', props.emoji)"
  >
    <span aria-hidden="true">{{ props.emoji.value }}</span>
  </button>
</template>

<style scoped>
.emoji-picker-button {
  display: grid;
  aspect-ratio: 1;
  min-width: 0;
  place-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: var(--emoji-picker-emoji-size, 24px);
  line-height: 1;
  transition:
    background-color 0.15s ease,
    scale 0.15s ease;
}

.emoji-picker-button:hover {
  background: hsl(var(--muted));
}

.emoji-picker-button:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.emoji-picker-button:active {
  scale: 0.9;
}
</style>
