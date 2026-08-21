import { computed, ref, toValue, type MaybeRefOrGetter } from "vue";
import { filterEmojiCategories } from "./emojiSearch";
import type { EmojiPickerCategory } from "./types";

export const useEmojiPicker = (
  categories: MaybeRefOrGetter<readonly EmojiPickerCategory[]>,
) => {
  const query = ref("");
  const visibleCategories = computed(() =>
    filterEmojiCategories(toValue(categories), query.value),
  );
  const isSearching = computed(() => Boolean(query.value.trim()));

  const clearSearch = () => {
    query.value = "";
  };

  return {
    query,
    visibleCategories,
    isSearching,
    clearSearch,
  };
};
