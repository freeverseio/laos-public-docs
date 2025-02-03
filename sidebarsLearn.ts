// sidebarsApi.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebarsLearn: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'goals',
        'resources',
        'laos-and-its-testnet',
        'the-layer-1-node',
        'the-evm-interface',
        'bridgeless-minting-intro',
      ],
    },
    {
      type: 'category',
      label: 'Decentralized Asset Metadata',
      items: [
        'decentralized-asset-metadata/introduction',
        'decentralized-asset-metadata/universal-location-for-dame',
        'decentralized-asset-metadata/extending-the-metadata-of-an-asset',
        'decentralized-asset-metadata/updating-a-previous-extension-of-an-asset',
        'decentralized-asset-metadata/querying-for-existing-extensions-of-an-asset',
      ],
    },
  ],
};

export default sidebarsLearn;
