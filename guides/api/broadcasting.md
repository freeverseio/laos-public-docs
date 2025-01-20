# Broadcasting NFTs

This guide explains how to broadcast LAOS-minted NFTs to ensure they are detected by marketplaces and applications that do not support natively bridgeless minting.

## Prerequisites

- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Collection contract address from your previously [created collection using API](/guides/api/collection-setup.md)
- Token IDs of the NFT to be broadcasted

## Understanding Broadcast Types

LAOS supports two types of broadcasting. Depending on the marketplace you’re targeting, you may need to use a specific type.

1. **MINT** - Emits a transfer event from the zero address (`address(0)`), simulating a fresh mint
2. **SELF** - Emits a transfer event from the current owner to themselves

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
        type: "MINT"
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

:::warning
Contract addresses must currently be provided in lowercase format in all mutations. In future releases, address parsing will be case insensitive.
:::

:::info
NFTs that have been transferred at least once are automatically indexed by apps that do not support bridgeless minting. In this case, broadcasting is not necessary.
:::