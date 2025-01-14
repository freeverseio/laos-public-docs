# Asset History

This query retrieves the complete history of an asset, including all its past states, evolutions, and transfers.

```graphql
query AssetHistory {
  polygon {
    tokenHistory(contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3", tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117") {
      contractAddress
      tokenUri
      tokenUriFetchState
      name
      description
      image
      attributes
    }
  }
}
```
