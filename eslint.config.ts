import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "eslint-config-prettier/flat";

export default defineConfigWithVueTs(
  {
    name: "gui/files-to-lint",
    files: ["src/**/*.{vue,ts,tsx}"],
  },

  globalIgnores([
    "dist/**",
    "storybook-static/**",
    "coverage/**",
    "node_modules/**",
  ]),

  ...pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    name: "gui/component-names",
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/*.{test,spec}.{ts,tsx}"],
  },

  skipFormatting,
);
