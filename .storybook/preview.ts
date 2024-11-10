import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';
import '../src/styles/style.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
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
