# Minting an NFT

While single-mint operations are supported, batch minting is highly recommended for better performance and reduced transaction costs. Batch minting leverages the ability to create several NFTs in a single transaction, optimizing on-chain resource usage and making the process more cost-effective.

Use this mutation to mint a single NFT:

```graphql
mutation MintNFT {
  mint(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokens: [
        {
          mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"]
          name: "Intro to LAOS NFT"
          description: "This is my first LAOS Mint!"
          attributes: [{ trait_type: "Level", value: "Introduction" }]
          image: "ipfs://QmPC9LrMuN6YkcJBRhBcWiDcS4ndkx3cwXdVNQ59PY8EBq"
        }
      ]
    }
  ) {
    tokenIds
    success
  }
}
```

Expected response:

```json
{
  "data": {
    "mint": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117"
      ],
      "success": true
    }
  }
}
```
:::warning
_**contractAddress**_ must be provided in lowercase format in all mutations. In the next release, both lowercase and checksum addresses will be accepted
:::

# Batch minting multiple NFTs

The API allows minting a large number of assets in a single transaction. The following example mints two assets on a contract deployed on Polygon:

```graphql
mutation MintNFT {
  mint(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokens: [
        {
          mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"]
          name: "Intro to LAOS NFT"
          description: "This is my first LAOS Mint!"
          attributes: [{ trait_type: "Level", value: "Introduction" }]
          image: "ipfs://QmPC9LrMuN6YkcJBRhBcWiDcS4ndkx3cwXdVNQ59PY8EBq"
        },
        {
          mintTo: ["0x549f8df62d84c3bead2c5cc3f60ceda01edd1ddf"]
          name: "Intro to LAOS NFT 2"
          description: "This is my second LAOS Mint!"
          attributes: [{ trait_type: "Level", value: "Medium" }]
          image: "ipfs://QmPC9LrMuN6YkcJBRhBcWiDcS4ndkx3cwXdVNQ59PY8EBq"
        }
      ]
    }
  ) {
    tokenIds
    success
  }
}
```

Expected response:

```json
{
  "data": {
    "mint": {
      "tokenIds": [
        "111169852000931110592847276229751913453284264730747426574717612917646668500597",
        "87114450834854309299909965673914149245292413353558435343913002441312424500703"
      ],
      "success": true
    }
  }
}
```

:::warning
_**contractAddress**_ must be provided in lowercase format in all mutations. In the next release, both lowercase and checksum addresses will be accepted
:::