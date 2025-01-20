// sidebarsApi.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebarsGuides: SidebarsConfig = {
  guidesSidebar: [
    "introduction",
    {
      type: "category",
      label: "How To - EVM",
      items: [
        "evm/collection-setup",
        "evm/ipfs-upload",
        "evm/minting",
        "evm/evolving",
        "evm/broadcasting",
      ],
    },
    {
      type: "category",
      label: "How To - API",
      items: [
        "api/collection-setup",
        "api/ipfs-upload",
        "api/minting",
        "api/evolving",
        "api/broadcasting",
      ],
    },
  ],
};

export default sidebarsGuides;
