import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';
import '../src/variables.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    darkMode: { current: 'dark' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
