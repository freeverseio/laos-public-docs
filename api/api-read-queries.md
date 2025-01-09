# API - Read Queries

### Useful Queries

#### All Assets in a Collection

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

#### User's Inventory

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

#### Asset History

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

#### LAOS Sibling Collection Pair

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
