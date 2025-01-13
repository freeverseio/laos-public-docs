// sidebarsApi.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebarsGuides: SidebarsConfig = {
  guidesSidebar: [
    "introduction",
    {
      type: "category",
      label: "How To (without API)",
      items: [
        "how-to-without-api/collection-setup",
        "how-to-without-api/ipfs-upload",
        "how-to-without-api/minting",
        "how-to-without-api/evolving",
        "how-to-without-api/broadcasting",
      ],
    },
  ],
};

export default sidebarsGuides;
