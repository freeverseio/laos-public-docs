# Assets in a Collection

This query retrieves all assets within a specific collection on Polygon, providing details such as description, image, name, token ID, and owner.

```graphql
query AllCollectionAssets {
  tokens(where: {chainId: "137", contractAddress: "0x9f16fc5a49afa724407225e97edb8775fe4eb9fb"}) {
    totalCount
    edges {
      node {
          description
          image
          name
          tokenId
          owner
      }
    }
  }
}
```