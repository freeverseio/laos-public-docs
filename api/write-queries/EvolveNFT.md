# Evolving NFTs

Use the following mutation to evolve up to 700 previously minted assets in one single atomic operation. If successful, all items are evolved. If the operation fails, no items are evolved. Batching multiple evolutions into one atomic operation can simplify and streamline application logic significantly.

```graphql
mutation EvolveNFT {
  evolveBatch(
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
    "evolveBatch": {
      "success": true,
      "tx": "0x07903d1ec461ad0be57bde708fad5fc83100c72780499c0346914e0959c2fa52"
    }
  }
}
```

:::warning
_**contractAddress**_ must currently be provided in lowercase format in all mutations. In future releases, address parsing will be case insensitive.
:::