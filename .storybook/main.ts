import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      optimizeDeps: {
        exclude: ['@gui/sound'],
      },
    });
  },
};

export default config;
