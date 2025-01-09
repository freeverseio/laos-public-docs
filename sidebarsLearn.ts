// sidebarsApi.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebarsLearn: SidebarsConfig = {
  learnSidebar: [
    { items: ["main_introduction"] },
    {
      type: "category",
      label: "Introduction",
      items: [
        "introduction/goals",
        "introduction/laos-and-its-testnet",
        "introduction/resources",
      ],
    },
    {
      type: "category",
      label: "The LAOS Node",
      items: [
        "the-laos-node/the-layer-1-node",
        "the-laos-node/the-evm-interface",

        ,
      ],
    },
    {
      type: "category",
      label: "Bridgeless Minting",
      items: [
        "bridgeless-minting/introduction",
        "bridgeless-minting/creating-a-sibling-collection-in-laos",
        "bridgeless-minting/deploying-a-uerc721-in-any-evm-chain",
        "bridgeless-minting/universal-location-for-bridgeless-minting",
        "bridgeless-minting/minting-assets",
        "bridgeless-minting/evolving-assets",
        "bridgeless-minting/read-only-queries",
      ],
    },
    {
      type: "category",
      label: "Decentralized Asset Metadata",
      items: [
        "decentralized-asset-metadata/introduction",
        "decentralized-asset-metadata/universal-location-for-dame",
        "decentralized-asset-metadata/extending-the-metadata-of-an-asset",
        "decentralized-asset-metadata/updating-a-previous-extension-of-an-asset",
        "decentralized-asset-metadata/querying-for-existing-extensions-of-an-asset",
      ],
    },
  ],
};

export default sidebarsLearn;
