import type { Preview } from "@storybook/react";
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#DBEFFE',
        },
        {
          name: 'dark',
          value: '#3b5998',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
