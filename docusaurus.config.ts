import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LAOS',
  tagline: 'The Layer-1 to create millions of assets on any EVM chain',
  favicon: 'img/favicon.ico',

    url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // Renamed main docs from "docs" to "learn"
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Additional docs plugin instances for each section
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'indexers',
        path: 'indexers',
        routeBasePath: 'indexers',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'evm',
        path: 'evm',
        routeBasePath: 'evm',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'LAOS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        // Updated the main docs link to use learnSidebar (renamed)
        
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          docsPluginId: 'guides',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'indexers',
          sidebarId: 'indexersSidebar',
          position: 'left',
          label: 'Indexer',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'api',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'evm',
          sidebarId: 'evmSidebar',
          position: 'left',
          label: 'EVM',
        },
        {
          href: 'https://github.com/freeverseio/laos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Learn', to: '/learn/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
      ],
      copyright: `
        Copyright © ${
          new Date().getFullYear()
        } My Project, Inc. Built with Docusaurus.
      `,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],

    },
  } satisfies Preset.ThemeConfig,
};

export default config;
