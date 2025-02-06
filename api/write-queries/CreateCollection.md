# Creating a Collection

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

The response includes both the `contractAddress` of the ERC721 contract on the target chain (in this case, Polygon), as well as the address of the underlying sibling collection in LAOS (in this case, `0xfff...da`. This query additionally deploys a smart contract capable of executing multiple mints in one single transaction (`batchMinterAddress`).
