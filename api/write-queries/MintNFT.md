# Minting an NFT

Use this mutation to mint an NFT:

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