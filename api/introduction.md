---
title: Introduction
---

# Introduction

### Introduction

The LAOS Foundation currently maintains a simple API for the LAOS community that facilitates the creation of collections and NFTs using bridgeless minting, as well as the running of the most common read queries related to them.

The [read-only queries](api-read-queries.md) of the API can be used straightforwardly, without the need of an API key. To use [write queries](api-write-queries.md) related to creating collections, NFTs or evolving them, please [contact](https://laosnetwork.io/community) the LAOS Foundation to obtain an API Key.

Needless to say, usage of this API is completely optional. Users can permissionlessly build using the LAOS EVM directly, as described in the rest of the sections of this documentation.

The API endpoints are:

* LAOS Mainnet: [https://api.laosnetwork.io/graphql](https://api.laosnetwork.io/graphql)
* LAOS Sigma Testnet: [https://testnet.api.laosnetwork.io/graphql](https://testnet.api.laosnetwork.io/graphql)

The following GraphQL Playground endpoints enable developers to explore the API and test queries in real-time:

* LAOS Mainnet: [https://playground.laosnetwork.io](https://playground.laosnetwork.io)
* LAOS Sigma Testnet: [https://testnet.playground.laosnetwork.io](https://testnet.playground.laosnetwork.io)



### Supported Chains

While Bridgeless Minting and Evolution are supported on all EVM chains through direct, permissionless transaction sending, the API described in this section currently supports only the following chains:

* **Ethereum Mainnet** - Chain ID: 1
* **Polygon PoS Mainnet** - Chain ID: 137

Reach out via the [LAOS channels](https://laosnetwork.io/community) to help prioritize support for additional chains.
