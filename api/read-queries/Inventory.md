# User Inventory

This query fetches all assets owned by a specific user within a particular collection on Polygon, allowing for easy inventory management.

```graphql
query Inventory {
  tokens(
    where: {chainId: "137", contractAddress: "0x9f16fc5a49afa724407225e97edb8775fe4eb9fb", owner: "0xb09b3fd2a408e4dfab7a1c6fd28365c369d2f006"}
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
```