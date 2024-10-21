import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';
import '../src/styles/style.css';
import 'virtual:svg-icons-register'

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
