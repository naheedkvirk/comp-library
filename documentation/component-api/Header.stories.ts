import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Header } from '../../src/components/Header/Header';


const meta = {
  title: 'Components API/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //tags: ['autodocs'],
  parameters: {
    //viewMode: 'docs', // open docs directly
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    //onLogout: fn(),
    //onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
//type Story = StoryObj<typeof Header>; // component only configuration, Limited
type Story = StoryObj<typeof meta>; //storybook; Best Practive

export const Default: Story = {
  args: {
    links: [
      {label: 'About', href: '#about'},
      {label: 'Projects', href: '#projects'},
      {label: 'Contact', href: '#contact'},
    ],
    ctaLabel: 'Hire Me',
  }, 
};

export const LoggedIn: Story = {
  args: {
    title: 'Naheed Portfolio',
    user: {
      fName: 'Naheed',
      lName: 'Virk',
    },
  },
};

// export const LoggedOut: Story = {};
/**
  export const Basic: Story = {};
 
  export const WithProp: Story = {
    render: () => <Header prop="value" />,
  };
 */
/* 
export const minimal: Story = {
  args: {
    title: 'Portfolio',
    links: [],
  },
};
*/


 