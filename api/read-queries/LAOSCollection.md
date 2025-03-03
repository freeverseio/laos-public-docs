# LAOS Sibling Collection

This query helps identify the LAOS sibling collection associated with a specific collection address, useful for developers who want to interact directly with LAOS contracts.

```graphql
query CollectionData {
  ownershipContracts(
    where: {chainId: "137", contractAddress: "0x9f16fc5a49afa724407225e97edb8775fe4eb9fb"}
  ) {
    name
    laosContract
    laosChainId
  }
}
```