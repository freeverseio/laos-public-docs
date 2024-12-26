---
id: api-write-queries
sidebar_position: 3
---
# API - Write Queries

### Getting Started

1. **Obtention of an API Key**
   * Contact the LAOS Foundation / Freeverse.io to request your private API key.
   * Each key is associated with a web3 address where you can view LAOS tokens, POLs, and ETHs.
   * Your account will be pre-filled with testnet LAOS tokens. Contact the LAOS Foundation for replenishment if needed.
2.  **API Key Usage** Add your API key to the headers of all mutations:

    ```json
    {
      "x-api-key": "your-api-key-here-1234"
    }
    ```

### Creating a Bridgeless Minting Collection

Use the following mutation to create your collection:

```graphql
mutation CreateCollection {
  createCollection(
    input: {
      name: "My first Bridgeless Minting Collection"
      symbol: "MFBC"
      chainId: "137"
    }
  ) {
    batchMinterAddress
    chainId
    contractAddress
    laosAddress
    name
    success
    symbol
  }
}
```

Expected response:

```json
{
  "data": {
    "createCollection": {
      "batchMinterAddress": "0x0f3381eb41c24dd28c3f1a71e6dcfae6434da731",
      "chainId": "137",
      "contractAddress": "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3",
      "laosAddress": "0xfffffffffffffffffffffffe00000000000000da",
      "name": "My first Bridgeless Minting Collection",
      "success": true,
      "symbol": "MFBC"
    }
  }
}
```

The response includes both the `contractAddress` of the ERC721 contract on the target chain (in this case, Polygon), as well as the address of the underlying sibling collection in LAOS (in this case, `0xfff...da`. This query additionally deploys a smart contract capable of executing multiple mints in one single transaction (`batchMinterAddress`).&#x20;

### Minting an First NFT

Use this mutation to mint an NFT:

```graphql
mutation MintNFT {
  mint(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokens: [
        {
          mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"]
          name: "Intro to LAOS NFT"
          description: "This is my first LAOS Mint!"
          attributes: [{ trait_type: "Level", value: "Introduction" }]
          image: "ipfs://QmPC9LrMuN6YkcJBRhBcWiDcS4ndkx3cwXdVNQ59PY8EBq"
        }
      ]
    }
  ) {
    tokenIds
    success
  }
}
```

Expected response:

```json
{
  "data": {
    "mint": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117"
      ],
      "success": true
    }
  }
}
```

:::warning
_**contractAddress**_ must be provided in lowercase format in all mutations. In the next release, both lowercase and checksum addresses will be accepted
:::


### Evolving an NFT

To modify the attributes of an existing NFT:

```graphql
mutation EvolveNFT {
  evolve(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
      name: "Intro to LAOS NFT lvl 2"
      description: "This asset has been evolved!"
      attributes: [{ trait_type: "Level", value: "Evolved Asset" }]
      image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
    }
  ) {
    success
    tx
  }
}
```

Expected response:

```json
{
  "data": {
    "evolve": {
      "success": true,
      "tx": "0x745e45f9649bade95ccefa69bb593d40d0171646f356e4f4e9787d180e670068"
    }
  }
}
```

### Broadcast

LAOS' Bridgeless Minting pattern is currently being integrated natively into marketplaces. To display these assets in marketplaces that are not yet compatible, a one-time minimal on-chain transaction is required on the chain where the ERC721 is managed.

This transaction, called "Broadcast," simply emits a standard transfer event, informing all marketplaces that index such events. The API allows broadcasting a large number of assets in a single transaction. The following example broadcasts two assets on a contract deployed on Polygon:

```graphql
mutation Broadcast {
  broadcastBatch(
    input: {
    tokenIds: [
      "46231769497101023895754357762572931969783788518045090509665456129453327552117",
      "93666072995048189955115392031356951741507126618122077759684867447733822539334"]
    chainId: "137" 
    ownershipContractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3" 
    type: "SELF"
    }
) {
    tokenIds
    success
  }
}

```

**type (optional):**  "SELF" | "MINT" (default: "SELF").

Depending on the marketplace you’re targeting, you may need to use a specific type. Selecting the type `"MINT"` will produce transfer events where the sender (`from` parameter) is the null address. Selecting the type `"SELF"` will set `to` to the current owner, effectively simulating a transfer to themselves.

Expected response:

```graphql
{
  "data": {
    "broadcastBatch": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "93666072995048189955115392031356951741507126618122077759684867447733822539334"],
      "success": true
    }
  }
}
```
