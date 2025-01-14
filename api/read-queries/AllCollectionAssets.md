# Assets in a Collection

This query retrieves all assets within a specific collection, providing details such as description, image, name, token ID, and owner.

```graphql
query AllCollectionAssets {
  polygon {
    tokens(
      where: { contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3" }
    ) {
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
}
```

:::warning
contractAddress must be provided in lowercase format in all queries. In the next release, both lowercase and checksum addresses will be accepted, and it will work irrespective of case.
:::