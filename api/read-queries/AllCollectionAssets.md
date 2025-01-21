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
_**contractAddress**_ must currently be provided in lowercase format in all mutations. In future releases, address parsing will be case insensitive.
:::