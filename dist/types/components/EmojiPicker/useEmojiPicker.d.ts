import { type MaybeRefOrGetter } from "vue";
import type { EmojiPickerCategory } from "./types";
export declare const useEmojiPicker: (categories: MaybeRefOrGetter<readonly EmojiPickerCategory[]>) => {
    query: import("vue").Ref<string, string>;
    visibleCategories: import("vue").ComputedRef<readonly EmojiPickerCategory[]>;
    isSearching: import("vue").ComputedRef<boolean>;
    clearSearch: () => void;
};
