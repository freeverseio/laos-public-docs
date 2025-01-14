# User Inventory

This query fetches all assets owned by a specific user within a particular collection, allowing for easy inventory management.

```graphql
query AllUserAssetsInCollection {
  polygon {
    tokens(
      where: {
        owner: "0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"
        contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      }
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