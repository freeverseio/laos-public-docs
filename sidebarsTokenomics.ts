// sidebarsApi.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebarsTokenomics: SidebarsConfig = {
  tokenomicsSidebar: [
    'laos-utility-token',
    'stakeholders',
    'token-distribution',
    'collator-incentives',
    'inflation-and-fee-model',
    'crowdloan',
    'laos-foundation',
    {
      type: "category",
      label: "Legal",
      items: [
        "change-log",
        "terminology",
        "disclaimer",
      ],
    },
  ],
};

export default sidebarsTokenomics;
