// sidebarsApi.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebarsGuides: SidebarsConfig = {
  guidesSidebar: [
    "introduction",
    {
      type: "category",
      label: "Bridgeless Minting via EVM",
      items: [
        "evm/collection-setup",
        "evm/ipfs-upload",
        "evm/minting",
        "evm/evolving",
        "evm/broadcasting",
      ],
    },
  ],
};

export default sidebarsGuides;
