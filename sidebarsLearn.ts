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
  ],
};

export default sidebarsLearn;
