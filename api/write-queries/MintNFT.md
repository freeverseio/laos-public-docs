# Minting NFTs

Use the following mutation to mint up to 700 NFTs in one single atomic operation. If successful, all NFTs are minted, and their corresponding `tokenIds` are returned. If the operation fails, no NFTs are minted. Batching multiple mints into one atomic operation can simplify and streamline application logic significantly.

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
          mintTo: ["0xe688b84b23f322a994A53dbF8E15FA82CDB71127"]
          name: "Advanced concepts about LAOS"
          description: "This is my second LAOS Mint!"
          attributes: [{ trait_type: "Level", value: "Advanced" }]
          image: "ipfs://QmauhsbWxutafkXgGyDnUu27d7LYGwYiULSyJFFpa1WPKe"
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
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "14847791404436078325473592906636402279408597633171402217703076291487718845731"
      ],
      "success": true
    }
  }
}
```
:::warning
_**contractAddress**_ must be provided in lowercase format in all mutations. In the next release, both lowercase and checksum addresses will be accepted
:::