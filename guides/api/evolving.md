# Evolving NFTs

This guide explains how to evolve (modify) existing NFTs using LAOS API.

## Prerequisites

- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Collection contract address from your previously [created collection using API](/guides/api/collection-setup.md)
- IPFS for NFT media
- Token ID of the NFT to evolve

## Steps

### 1. Prepare Your Environment

Set up your GraphQL client with the appropriate endpoint and your API key:

```javascript
const LAOS_API_ENDPOINT = 'https://api.laosnetwork.io/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY'
};
```

### 2. Prepare Updated Metadata

Gather your updated NFT metadata:

```javascript
const updatedMetadata = {
  name: "Evolved NFT Name",
  description: "Updated NFT Description",
  attributes: [
    {
      trait_type: "Level",
      value: "Evolved"
    }
  ],
  image: "ipfs://NEW_IPFS_HASH"
};
```

### 3. Execute the Evolution

Use the following mutation to evolve your NFT:

```javascript
const evolveMutation = `
  mutation EvolveNFT {
    evolve(
      input: {
        chainId: "137"
        contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
        tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
        name: "Evolved NFT Name"
        description: "Updated NFT Description"
        attributes: [{ trait_type: "Level", value: "Evolved" }]
        image: "ipfs://NEW_IPFS_HASH"
      }
    ) {
      success
      tx
    }
  }
`;

async function evolveNFT() {
  const response = await fetch(LAOS_API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: evolveMutation
    })
  });

  const data = await response.json();
  return data;
}
```

### 4. Handle the Response

The API will return a success status and transaction hash:

```javascript
{
  "data": {
    "evolve": {
      "success": true,
      "tx": "0x745e45f9649bade95ccefa69bb593d40d0171646f356e4f4e9787d180e670068"
    }
  }
}
```

## Important Notes


- All metadata fields (name, description, attributes, image) must be provided, even if only some are changing

:::warning
Contract addresses must currently be provided in lowercase format in all mutations. In future releases, address parsing will be case insensitive.
:::

:::info
Evolution allows you to update any aspect of the NFT's metadata, including its image, name, description, and attributes. This is a unique feature of LAOS NFTs.
:::