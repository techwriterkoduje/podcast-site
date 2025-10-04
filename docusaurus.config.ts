import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Podcast Tech Writer Koduje',
  tagline: 'Podcast o technicznej stronie tworzenia dokumentacji w IT',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'techwriterkoduje', // Usually your GitHub org/user name.
  projectName: 'podcast-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'throw',
      onBrokenMarkdownLinks: 'throw',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: {
          blogTitle: 'Podcast Tech Writer Koduje',
          blogDescription:
            'Podcast o technicznej stronie tworzenia dokumentacji w IT',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    navbar: {
      title: 'Podcast Tech Writer Koduje',
      logo: {
        alt: 'Podcast Tech Writer Koduje Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'episode-list',
          label: 'Odcinki',
          position: 'left',
        },
        {
          to: 'read',
          label: 'Czytelnia',
          position: 'left',
        },
        {
          to: 'multimedia',
          label: 'Multimedia',
          position: 'left',
        },
        {
          to: 'projects',
          label: 'Projekty',
          position: 'left',
        },
        {
          to: 'focusgrid',
          label: 'Focus Grid',
          position: 'left',
        },
        {
          to: 'contact',
          label: 'Kontakt',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer Koduje, logo stworzone przez rad89`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
