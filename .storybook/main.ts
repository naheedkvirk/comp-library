import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
   "framework": {
    name: "@storybook/react-vite",
    options: {},

  },
  "stories": [
    "../documentation/component-api/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    //"../src/docs/**/*.mdx",
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  docs: {
    //defaultName: 'Documentation',
    docsMode: false, // true disabls the Canvas (stories view) and shows only doc page
  }
  //docs: { autodocs: true, },
};
export default config;