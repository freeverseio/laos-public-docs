

# Creating a Collection

This guide walks you through creating a new NFT collection using LAOS API.


## Prerequisites
- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Address associated with the API key has enough LAOS and Polygon token balance.

## Steps

### 1. Prepare Your Environment

First, set up your GraphQL client with the appropriate endpoint and your API key:

```javascript
const LAOS_API_ENDPOINT = 'https://api.laosnetwork.io/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY'
};
```

### 2. Create the Collection

Use the following mutation to create your collection:

```javascript
const createCollectionMutation = `
  mutation CreateCollection {
    createCollection(
      input: {
        name: "My Collection Name"
        symbol: "MCN"
        chainId: "137"  // Polygon PoS Mainnet
      }
    ) {
      batchMinterAddress
      chainId
      contractAddress
      laosAddress
      name
      success
      symbol
    }
  }
`;

// Example implementation using fetch
async function createCollection() {
  const response = await fetch(LAOS_API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: createCollectionMutation
    })
  });

  const data = await response.json();
  return data;
}
```

### 3. Handle the Response

The API will return important addresses that you'll need for future operations:

```javascript
{
  "data": {
    "createCollection": {
      "batchMinterAddress": "0x0f3381eb41c24dd28c3f1a71e6dcfae6434da731",
      "chainId": "137",
      "contractAddress": "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3",
      "laosAddress": "0xfffffffffffffffffffffffe00000000000000da",
      "name": "My Collection Name",
      "success": true,
      "symbol": "MCN"
    }
  }
}
```

Make sure to store these addresses:
- `contractAddress`: Your uERC721 contract address on the target chain
- `laosAddress`: The underlying sibling collection in LAOS

:::warning
 Contract addresses must be provided in lowercase format in all mutations
:::

:::info
The creation process deploys smart contracts on both your target chain and LAOS. This is a one-time operation per collection.
:::