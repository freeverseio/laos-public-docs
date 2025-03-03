# Minting NFTs

Use the following mutation to mint up to 700 NFTs in one single atomic operation. If successful, all NFTs are minted, and their corresponding `tokenIds` are returned. If the operation fails, no NFTs are minted. Batching multiple mints into one atomic operation can simplify and streamline application logic significantly.

## Asynchronous Minting (Recommended)

The `mintAsync` mutation sends a `mintNFT` transaction to the blockchain and returns a `trackingId`, which can be used to check the minting status later. This approach is common in blockchain interactions and is recommended because it provides faster responses and prevents the API from blocking during large minting operations.

The following example mints two NFTs, atomically, to different initial owners:
```graphql
mutation MintNFT {
  mintAsync(
    input: {
      chainId: "137"
      contractAddress: "0x370d32d6fcef88e0a008d23a1a602f33b6fcf251"
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
          image: "ipfs://QmPC9LrMuN6YkcJBRhBcWiDcS4ndkx3cwXdVNQ59PY8EBq"
        }
      ]
    }
  ) {
    tokenIds
    status
    trackingId
  }
}
```

Expected response:

```json
{
  "data": {
    "mintAsync": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "14847791404436078325473592906636402279408597633171402217703076291487718845731"
      ],
      "status": "PENDING",
      "trackingId": "6283:0xf744ffc58c8f1544fa54f4282eaf9974b932d99022f6b37f533f5a23c1cb9153"
    }
  }
}
```


### Check Mint Status

Use the `mintResponse` query with the `trackingId` to check the status of a mint operation.

```graphql
query mintNFTResponse {
  mintResponse(
    trackingId: "6283:0xf744ffc58c8f1544fa54f4282eaf9974b932d99022f6b37f533f5a23c1cb9153"
  ) {
    status
  }
}
```

Example response:

```json
{
  "data": {
    "mintResponse": {
      "status": "SUCCESS",
    }
  }
}
```

## Synchronous Minting

The `mint` mutation mints NFTs and returns the result, including the success status. It is ideal for synchronous processes, but the response may take several seconds and could block the API for longer during large minting operations.

Here is the synchronous version of the example above:
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
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "14847791404436078325473592906636402279408597633171402217703076291487718845731"
      ],
      "success": true
    }
  }
}
```