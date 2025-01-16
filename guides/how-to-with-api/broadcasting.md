# Broadcasting NFTs

This guide explains how to broadcast LAOS-minted NFTs to ensure they are detected by marketplaces and applications that do not support natively bridgeless minting.

## Prerequisites

- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Collection contract address from your previously [created collection using API](/guides/how-to-with-api/collection-setup.md)
- Token IDs of the NFT to be broadcasted

## Understanding Broadcast Types

LAOS supports two types of broadcasting. Depending on the marketplace you’re targeting, you may need to use a specific type.

- **MINT**

Emits a standard `Transfer` event from the zero address (`from = address(0)`) to the current owner, matching a “freshly minted” event signature. The mint broadcast is detected by marketplaces like Rarible.

- **SELF**

Emits a “transfer” event from the owner to themselves, effectively “self-transferring” the NFT to broadcast its existence. The mint broadcast is detected by marketplaces like Opensea.

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

### 2. Execute the Broadcast

Use the following mutation to broadcast your NFTs:

```javascript
const broadcastMutation = `
  mutation BroadcastBatch {
    broadcastBatch(
      input: {
        tokenIds: [
          "46231769497101023895754357762572931969783788518045090509665456129453327552117",
          "93666072995048189955115392031356951741507126618122077759684867447733822539334"
        ]
        chainId: "137"
        ownershipContractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"
        type: "SELF"
      }
    ) {
      tokenIds
      success
    }
  }
`;

async function broadcastNFTs() {
  const response = await fetch(LAOS_API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: broadcastMutation
    })
  });

  const data = await response.json();
  return data;
}
```

### 3. Handle the Response

The API will confirm the broadcast:

```javascript
{
  "data": {
    "broadcastBatch": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "93666072995048189955115392031356951741507126618122077759684867447733822539334"
      ],
      "success": true
    }
  }
}
```

## Full Code Example
Below is a complete Node.js example demonstrating how to broadcast NFTs using the LAOS API.

```javascript
import fetch from "node-fetch";

// 1. Prepare Your Environment
const LAOS_API_ENDPOINT = "https://testnet.api.laosnetwork.io/graphql"; // or mainnet
const API_KEY = "<YOUR_API_KEY>"; // Replace with your actual API key

const headers = {
  "Content-Type": "application/json",
  "x-api-key": `${API_KEY}`,
};

// 2. Construct the Broadcast Mutation
// Replace tokenIds, chainId, ownershipContractAddress, and type as needed
const broadcastMutation = `
  mutation BroadcastBatch {
    broadcastBatch(
      input: {
        tokenIds: [
          "46231769497101023895754357762572931969783788518045090509665456129453327552117",
          "93666072995048189955115392031356951741507126618122077759684867447733822539334"
        ]
        chainId: "137"
        ownershipContractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3"  // must be lowercase
        type: "SELF"
      }
    ) {
      tokenIds
      success
    }
  }
`;

async function broadcastNFTs() {
  try {
    const response = await fetch(LAOS_API_ENDPOINT, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query: broadcastMutation,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("Error broadcasting NFTs:", data.errors);
      return;
    }

    console.log("Broadcasted NFTs response:", data.data.broadcastBatch);
  } catch (error) {
    console.error("Error making API request:", error);
  }
}

// 3. Run the broadcast function
broadcastNFTs();
```
### How to Run the Example
1. Copy the Code into a file named broadcastNFTs.js

2. Install node-fetch:
```
npm i node-fetch
```

3. Run the Script
```
node broadcastNFTs.js
```

After successful broadcast, your NFT should be visible on marketplaces. For example, if using Polygon, you can view it on OpenSea at:

```
https://opensea.io/assets/matic/<YOUR_ERC721_ADDRESS>/<TOKEN_ID>
```

:::warning
 Contract addresses must be provided in lowercase format in all mutations
:::

:::info
NFTs that have been transferred at least once are automatically indexed by apps that do not support bridgeless minting. In this case, broadcasting is not necessary.
:::