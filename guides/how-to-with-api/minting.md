# Minting NFTs

This guide explains how to mint NFTs using LAOS' bridgeless minting API.

## Prerequisites

- LAOS API key
- Collection contract address from your previously created collection
- Target chain ID
- IPFS or other permanent storage for NFT media and metadata
- Recipient wallet address(es)

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
const nftMetadata = {
  name: "My NFT Name",
  description: "NFT Description",
  attributes: [
    {
      trait_type: "Category",
      value: "Example"
    }
  ],
  image: "ipfs://YOUR_IPFS_HASH"
};
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
            mintTo: ["0x4E6Da57f62b9954fBb6bAb531F556BE08E128e75"]
            name: "My NFT Name"
            description: "NFT Description"
            attributes: [{ trait_type: "Category", value: "Example" }]
            image: "ipfs://YOUR_IPFS_HASH"
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
        "46231769497101023895754357762572931969783788518045090509665456129453327552117"
      ],
      "success": true
    }
  }
}
```

## Batch Minting

To mint multiple NFTs in a single transaction, add multiple tokens to the `tokens` array:

```javascript
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
```

## Important Notes

- Contract addresses must be in lowercase format
- Store the returned token IDs as you'll need them for future operations
- Ensure all IPFS hashes are valid and accessible
- The `mintTo` array can contain multiple addresses for shared ownership

:::info
After minting, you may need to broadcast your NFTs to ensure visibility on traditional marketplaces. See the Broadcasting guide for details.
:::