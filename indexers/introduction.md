# Introduction

Bridgeless Minting enables secure scaling of NFT creation, as well as traceable evolution, on any EVM chain. As described above, the pattern involves two consensus systems:

* An **EVM ownership chain** (e.g., Ethereum, Base, etc.) to manage asset ownership, trading, DeFi, and other functionalities.
* **The LAOS Network** to handle minting and asset evolution, thereby offloading blockspace and gas costs to a purpose-built chain.

All existing DApps, including marketplaces, that already operate on the ownership chain can natively allow users to trade bridgeslessly minted assets, by simply letting their indexers monitor (aka subscribe to) events produced on the LAOS Network.

For DApps that are not yet natively integrated, users and developers can perform a one-time broadcast of the assets they wish to trade, as explained in the  [broadcast query](../laos-api/api-write-queries.md#broadcast) section.

Since most DApps and marketplaces rely on _**indexers**_ to monitor all events related to NFT minting and trading, the LAOS Foundation has:

* Developed a simple [open-source indexer](https://github.com/freeverseio/laos-apis/tree/main/laos-indexer), built as a minimal extension of Subsquid's framework. This leverages Subsquid's multi-chain indexing capabilities to track events on both the EVM chain and the LAOS Network. Developers can easily deploy the indexer to suit their specific needs.
* Maintains a set of publicly available indexers, which are ideal for getting started and testing:
  * [Ethereum Mainnet - LAOS](https://ethereum-indexer.laosnetwork.io/graphql) Indexer,
  * [Polygon PoS - LAOS](https://polygon-indexer.laosnetwork.io/graphql) Indexer,
  * [Hedera Mainnet - LAOS](https://hedera-indexer.laosnetwork.io/graphql) Indexer,
  * [Hedera Testnet - LAOS](https://laos-mainnet.hedera-testnet-indexer.laosnetwork.io/graphql) Indexer,
