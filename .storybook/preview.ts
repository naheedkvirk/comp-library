import type { Preview } from '@storybook/react-vite'
import DocumentationTemplate from '../template.mdx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
  tags: ['autodocs'],  //for all the stories
} ; //satisfies Preview;

export default preview;