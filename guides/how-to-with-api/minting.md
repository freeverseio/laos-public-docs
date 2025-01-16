# Minting NFTs

This guide explains how to mint NFTs using LAOS API.

## Prerequisites

- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Collection contract address from your previously [created collection using API](/guides/how-to-with-api/collection-setup.md)
- IPFS for NFT media

## Steps

### 1. Prepare Your Environment

Set up your GraphQL client with the appropriate endpoint and your API key:

```javascript
const LAOS_API_ENDPOINT = 'https://api.laosnetwork.io/graphql'; // or testnet endpoint
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY'
};
```

### 2. Prepare NFT Metadata

Ensure your NFT metadata follows the standard format:

```javascript
{
  name: "My NFT Name",
  description: "NFT Description",
  attributes: [
    {
      trait_type: "Category",
      value: "Example"
    }
  ],
  image: "ipfs://YOUR_IPFS_HASH"
}
```

### 3. Execute the Mint

Use the following mutation to mint your NFT:

```javascript
const mintMutation = `
  mutation MintNFT {
    mint(
      input: {
        chainId: "137"
        contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
        tokens: [
          {
            mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"],
            name: "First NFT",
            description: "First NFT Description",
            attributes: [{ trait_type: "Category", value: "Example" }],
            image: "ipfs://HASH_1"
          },
          {
            mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"],
            name: "Second NFT",
            description: "Second NFT Description",
            attributes: [{ trait_type: "Category", value: "Example" }],
            image: "ipfs://HASH_2"
          }
        ]
      }
    ) {
      tokenIds
      success
    }
  }
`;

async function mintNFT() {
  const response = await fetch(LAOS_API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: mintMutation
    })
  });

  const data = await response.json();
  return data;
}
```

### 4. Handle the Response

The API will return the minted token IDs:

```javascript
{
  "data": {
    "mint": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "93666072995048189955115392031356951741507126618122077759684867447733822539334"
      ],
      "success": true
    }
  }
}
```

:::warning
 Contract addresses must be provided in lowercase format in all mutations
:::

:::info
After minting, you may need to broadcast your NFTs to ensure visibility on traditional marketplaces. See the Broadcasting guide for details.
:::