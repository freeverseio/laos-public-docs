# Asset History

This query retrieves the complete history of an asset, including all its past states, evolutions, and transfers.

```graphql
query AssetHistory {
  tokenHistory(
    chainId: "137"
    contractAddress: "0x9f16fc5a49afa724407225e97edb8775fe4eb9fb"
    tokenId: "66411355714187073314704920013201981051255304368864801044887078638344704552966"
  ) {
    updatedAt
    name
    tokenUri
    description
    image
    attributes
  }
}
```
