import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LAOS',
  tagline: 'The Layer-1 to create millions of assets on any EVM chain',
  favicon: 'img/favicon.ico',

  url: 'https://docs.laosnetwork.io',
  baseUrl: '/',

  organizationName: 'laos',
  projectName: 'laos',

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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Additional docs plugin instances for each section
  plugins: [
    [

      '@docusaurus/plugin-content-pages',
      {
        id: 'landing',
        path: './landing',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./sidebarsLearn.ts'),
      },
    ],
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
        sidebarPath: require.resolve('./sidebarsGuides.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'indexers',
        path: 'indexers',
        routeBasePath: 'indexers',
        sidebarPath: require.resolve('./sidebarsIndexers.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'evm',
        path: 'evm',
        routeBasePath: 'evm',
        sidebarPath: require.resolve('./sidebarsEvm.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dame',
        path: 'dame',
        routeBasePath: 'dame',
        sidebarPath: require.resolve('./sidebarsDame.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tokenomics',
        path: 'tokenomics',
        routeBasePath: 'tokenomics',
        sidebarPath: require.resolve('./sidebarsTokenomics.ts'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      logo: {
        alt: 'LAOS',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          docsPluginId: 'learn',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn',
        },
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
          type: 'docSidebar',
          docsPluginId: 'dame',
          sidebarId: 'dameSidebar',
          position: 'left',
          label: 'DAME',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'tokenomics',
          sidebarId: 'tokenomicsSidebar',
          position: 'right',
          label: 'Tokenomics',
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
          items: [
            { label: 'Learn', to: '/learn/goals' },
            { label: 'Indexers', to: '/indexers/introduction' },
            { label: 'API', to: '/api/introduction' },
            { label: 'Guides', to: '/guides/introduction' },
            { label: 'EVM', to: '/evm/introduction' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/gZcxsJcdPy' },
            { label: 'X', href: 'https://x.com/laosnetwork' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: 'https://medium.com/laosnetwork' },
            { label: 'GitHub', href: 'https://github.com/freeverseio/laos' },
          ],
        },
      ],
      copyright: `
        Copyright © ${new Date().getFullYear()
        } LAOS Network
      `,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
