

# Creating a Collection

This guide walks you through creating a new NFT collection using LAOS API.

It explains how to create a collection in Polygon but it can be extended to any other supported EVM chain (Ethereum, etc.).


## Prerequisites
- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Address associated with the API key has enough LAOS and Polygon token balance.

## Steps

### 1. Prepare Your Environment

First, set up your env variables with the appropriate endpoint and your API key:

```javascript
const LAOS_API_ENDPOINT = 'https://api.laosnetwork.io/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY'
};
```

### 2. Create the Collection

Provide your collection name and symbol in the following mutation:

```javascript
const createCollectionMutation = `
  mutation CreateCollection {
    createCollection(
      input: {
        name: "My Collection Name"
        symbol: "MCN"
        chainId: "137"
      }
    ) {
      chainId
      contractAddress
      laosAddress
      name
      success
      symbol
    }
  }
`;


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
- `contractAddress`: Your uERC721 contract address on the target chain. This is the only address that external users will interact with.
- `laosAddress`: The underlying sibling collection in LAOS.


### Full code example
```js
import fetch from "node-fetch";

const LAOS_API_ENDPOINT = "https://testnet.api.laosnetwork.io/graphql";
const API_KEY = "<YOUR_API_KEY>"; // Replace with your actual API key

const headers = {
  "Content-Type": "application/json",
  "x-api-key": `${API_KEY}`,
};

const createCollectionMutation = `
  mutation CreateCollection {
    createCollection(
      input: {
        name: "My Collection Name"
        symbol: "MCN"
        chainId: "137"
      }
    ) {
      chainId
      contractAddress
      laosAddress
      name
      success
      symbol
    }
  }
`;

async function createCollection() {
  try {
    const response = await fetch(LAOS_API_ENDPOINT, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query: createCollectionMutation,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("Error creating collection:", data.errors);
      return;
    }

    console.log("Collection created successfully:", data.data.createCollection);
  } catch (error) {
    console.error("Error making API request:", error);
  }
}

createCollection();

```
To run example: 
1. Copy and paste code into a file and name it **createCollection.js**
2. Install "node-fetch"
```
npm i node-fetch
```
3. Run command
```
node createCollection.js
```

:::warning
 Contract addresses must be provided in lowercase format in all mutations
:::

:::info
The creation process deploys smart contracts on both your target chain and LAOS. This is a one-time operation per collection.
:::