// sidebarsApi.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebarsApi: SidebarsConfig = {
  apiSidebar: [

    'introduction',
    {
      type: 'category',
      label: 'API Read Queries',
      items: [
        'read-queries/AllCollectionAssets',
        'read-queries/Inventory',
        'read-queries/AssetHistory',
        'read-queries/ContractPair',
      ],
    },
    {
      type: 'category',
      label: 'API Write Queries',
      items: [
        'write-queries/GettingStarted',
        'write-queries/CreateCollection',
        'write-queries/MintNFT',
        'write-queries/EvolveNFT',
        'write-queries/Broadcast',


      ],
    },

  ],
};

export default sidebarsApi;
