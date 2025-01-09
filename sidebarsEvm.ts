// sidebarsApi.ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebarsEvm: SidebarsConfig = {
    evmSidebar: [
        {
            type: 'category',
            label: 'LAOS EVM',
            items: [
                'introduction-evm',
                'creating-a-sibling-collection-in-LAOS',
                'minting-assets',
                'evolving-assets',
                'read-only-queries',
            ],
        }
    ],
};

export default sidebarsEvm;
