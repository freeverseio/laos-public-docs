# Introduction

Bridgeless Minting enables secure scaling of NFT creation, as well as traceable evolution, on any EVM chain. As described above, the pattern involves two consensus systems:

* An **EVM ownership chain** (e.g., Ethereum, Base, etc.) to manage asset ownership, trading, DeFi, and other functionalities.
* **The LAOS Network** to handle minting and asset evolution, thereby offloading blockspace and gas costs to a purpose-built chain.

All existing DApps, including marketplaces, that already operate on the ownership chain can natively allow users to trade bridgeslessly minted assets, by simply letting their indexers monitor (aka subscribe to) events produced on the LAOS Network.

For DApps that are not yet natively integrated, users and developers can perform a one-time broadcast of the assets they wish to trade, as explained in the  [broadcast query](/api/write-queries/Broadcast) section.

Since most DApps and marketplaces rely on _**indexers**_ to monitor all events related to NFT minting and trading, the LAOS Foundation has developed a simple [open-source indexer](https://github.com/freeverseio/laos-apis-v2), built as a minimal extension of Subsquid's framework. This leverages Subsquid's multi-chain indexing capabilities to track events on both the EVM chain and the LAOS Network. Developers can easily deploy the indexer to suit their specific needs.

Additionally, the Foundation maintains a [publicly available indexer](https://indexers.laosnetwork.io/), ideal for getting started and testing. This GraphQL endpoint allows users to easily inspect all possible queries and returns. As an example, the following query returns the first page of all tokens minted on Polygon using LAOS for Bridgeless Minting:
```graphql
query MyQuery {
  tokens(where: {chainId: "137"}) {
    edges {
      node {
        contractName
        contractSymbol
        tokenUri
        contractAddress
        name
        description
        image
        attributes
      }
    }
  }
}
``` 


