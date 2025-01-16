# Evolving NFTs

This guide explains how to evolve (modify) existing NFTs using LAOS API.

## Prerequisites

- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Collection contract address from your previously [created collection using API](/guides/how-to-with-api/collection-setup.md)
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
## Full code example
Below is a complete example demonstrating how to evolve (update) NFTs using the LAOS API in a Node.js environment.

```javascript
import fetch from "node-fetch";

// 1. Prepare Your Environment
const LAOS_API_ENDPOINT = "https://testnet.api.laosnetwork.io/graphql"; // or mainnet
const API_KEY = "<YOUR_API_KEY>"; // Replace with your actual API key

const headers = {
  "Content-Type": "application/json",
  "x-api-key": `${API_KEY}`,
};

// 2. Prepare Updated Metadata
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

// 3. Construct the Evolve Mutation
const evolveMutation = `
  mutation EvolveNFT {
    evolve(
      input: {
        chainId: "137"
        contractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3" // Must be lowercase
        tokenId: "46231769497101023895754357762572931969783788518045090509665456129453327552117"
        name: "${updatedMetadata.name}"
        description: "${updatedMetadata.description}"
        attributes: ${JSON.stringify(updatedMetadata.attributes)}
        image: "${updatedMetadata.image}"
      }
    ) {
      success
      tx
    }
  }
`;

// 4. Execute the Mutation
async function evolveNFT() {
  try {
    const response = await fetch(LAOS_API_ENDPOINT, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query: evolveMutation,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("Error evolving NFT:", data.errors);
      return;
    }

    console.log("NFT evolved successfully:", data.data.evolve);
  } catch (error) {
    console.error("Error making API request:", error);
  }
}

// Run the evolveNFT function
evolveNFT();
````

### To run the Example:
1. Copy the code into a file named evolveNFT.js

2. Install node-fetch:
```
npm i node-fetch
```
3. Run the Script
```
node evolveNFT.js
```

## Important Notes

- All metadata fields (name, description, attributes, image) must be provided, even if only some are changing

:::warning
 Contract addresses must be provided in lowercase format in all mutations
:::
