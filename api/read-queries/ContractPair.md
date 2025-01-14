# LAOS Sibling Collection

This query helps identify the LAOS sibling collection associated with a specific collection address, useful for developers who want to interact directly with LAOS contracts.

```graphql
query ContractPair {
  polygon {
    contracts(where: {address_eq: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"}) {
      address
      laosContract
    }
  }
}
```