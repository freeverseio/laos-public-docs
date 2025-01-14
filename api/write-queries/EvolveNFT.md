# Evolving an NFT

To modify the attributes of an existing NFT:

```graphql
mutation EvolveNFT {
  evolve(
    input: {
      chainId: "137"
      contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
      tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
      name: "Intro to LAOS NFT lvl 2"
      description: "This asset has been evolved!"
      attributes: [{ trait_type: "Level", value: "Evolved Asset" }]
      image: "ipfs://QmUjVkeX1yUSbunCaXMWVsxrzcQCSBVEJzDoheowy1D3tb"
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
      "tx": "0x745e45f9649bade95ccefa69bb593d40d0171646f356e4f4e9787d180e670068"
    }
  }
}
```