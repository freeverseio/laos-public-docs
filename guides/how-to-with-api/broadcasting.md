# Broadcasting NFTs

This guide explains how to broadcast LAOS-minted NFTs to ensure visibility on traditional marketplaces and applications.

## Prerequisites

- LAOS API key
- Collection contract address
- Token ID(s) of the NFT(s) to broadcast
- Chain ID where the NFTs exist

## Understanding Broadcast Types

LAOS supports two types of broadcasting:

1. **MINT** - Emits a transfer event from the zero address (`address(0)`), simulating a fresh mint
2. **SELF** - Emits a transfer event from the current owner to themselves

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
        type: "MINT"  // or "SELF"
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

## Choosing Between MINT and SELF

- Use **MINT** when:
  - You want the NFT to appear as freshly minted in marketplaces
  - The marketplace specifically requires transfer events from the zero address

- Use **SELF** when:
  - You want to maintain the existing ownership history
  - The marketplace accepts any transfer event for indexing

## Important Notes

- Broadcasting is only needed for marketplaces that don't natively support bridgeless minting
- A single broadcast transaction can handle multiple token IDs
- Contract addresses must be in lowercase format
- Broadcasting doesn't affect ownership or metadata
- NFTs that have been transferred naturally don't need broadcasting

:::info
Once an NFT has been broadcast or naturally transferred, it doesn't need to be broadcast again unless specifically required by a new marketplace integration.
:::