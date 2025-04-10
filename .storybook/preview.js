import { withThemeByClassName } from '@storybook/addon-themes';
import { allModes } from './modes';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        small: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        medium: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        large: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
    chromatic: {
      modes: allModes,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;