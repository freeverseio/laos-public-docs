# Evolving NFTs

Use the following mutation to evolve up to 700 previously minted assets in one single atomic operation. If successful, all items are evolved. If the operation fails, no items are evolved. Batching multiple evolutions into one atomic operation can simplify and streamline application logic significantly.

## Asynchronous Evolving (Recommended)

The `mintAsync` mutation sends a `evolveNFT` transaction to the blockchain and returns a `trackingId`, which can be used to check the minting status later. This approach is common in blockchain interactions and is recommended because it provides faster responses and prevents the API from blocking during large minting operations.

The following example evolves two NFTs atomically:
```graphql
mutation EvolveNFT {
  evolveAsync(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokens: [
        {
          tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
          name: "Intro to LAOS NFT lvl 2"
          description: "This is my first LAOS Evolution!"
          attributes: { trait_type: "Level", value: "Introduction Evolved" }
          image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
        }
        {
          tokenId: "14847791404436078325473592906636402279408597633171402217703076291487718845731"
          name: "Advanced concepts about LAOS lvl 2"
          description: "This is my second LAOS Evolution!"
          attributes: { trait_type: "Level", value: "Advanced Evolved" }
          image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
        }
      ]
    }
  ) {
    trackingId
    status
  }
}
```

Expected response:

```json
{
  "data": {
    "evolveAsync": {
      "trackingId": "7543:0xa82f4a3e5f37b8c1b4d3f8936c3c528a9f5f4e53b0f482d1e1e3d5f1e7a9d7c3",
      "status": "PENDING"
    }
  }
}
```

### Checking Evolution Status

Use the `evolveResponse` query with the `trackingId` to check the status of a mint operation.

```graphql
query evolveNFTResponse {
  evolveResponse(
    trackingId: "7543:0xa82f4a3e5f37b8c1b4d3f8936c3c528a9f5f4e53b0f482d1e1e3d5f1e7a9d7c3"
  ) {
    status
    success
  }
}
```

Example response:

```json
{
  "data": {
    "evolveResponse": {
      "status": "SUCCESS",
      "success": true
    }
  }
}
```

## Synchronous Evolving

The `evolve` mutation evolves NFTs and returns the result, including the success status. It is ideal for synchronous processes, but the response may take several seconds and could block the API for longer during large minting operations.

```graphql
mutation EvolveNFT {
  evolve(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokens: [
        {
          tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
          name: "Intro to LAOS NFT lvl 2"
          description: "This is my first LAOS Evolution!"
          attributes: { trait_type: "Level", value: "Introduction Evolved" }
          image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
        }
        {
          tokenId: "14847791404436078325473592906636402279408597633171402217703076291487718845731"
          name: "Advanced concepts about LAOS lvl 2"
          description: "This is my second LAOS Evolution!"
          attributes: { trait_type: "Level", value: "Advanced Evolved" }
          image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
        }
      ]
    }
  ) {
    success
    tx
  }
}
```

Expected response:

```json
{
  "data": {
    "evolve": {
      "success": true,
      "tx": "0x07903d1ec461ad0be57bde708fad5fc83100c72780499c0346914e0959c2fa52"
    }
  }
}
```