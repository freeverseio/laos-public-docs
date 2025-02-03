// sidebarsApi.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebarsDame: SidebarsConfig = {
  dameSidebar: [
    {
      type: 'category',
      label: 'Decentralized Asset Metadata',
      items: [
        'dame/introduction',
        'dame/universal-location-for-dame',
        'dame/extending-the-metadata-of-an-asset',
        'dame/updating-a-previous-extension-of-an-asset',
        'dame/querying-for-existing-extensions-of-an-asset',
      ],
    },
  ],
};

export default sidebarsLearn;
