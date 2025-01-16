# Evolving an NFT

LAOS supports evolving NFTs, allowing you to update their metadata. This step explains how to change your NFT's metadata in your LAOS collection.

## Prerequisites

- A previously [minted NFT on your LAOS collection](/guides/how-to-without-api/minting.md).
- The [IPFS link of the updated metadata](/guides/how-to-without-api/ipfs-upload.md) you wish to attach.
- Private key with enough funds for transaction fees.

## Steps

### 1. Prepare Your Environment

Set up your environment variables and imports:

```javascript
require("dotenv").config();
const { ethers } = require("ethers");
const axios = require("axios");

const PROVIDER_URL = "https://rpc.laossigma.laosfoundation.io";
const { PRIVATE_KEY } = process.env;

// Your collection address in LAOS
const laosCollectionAddr = "<YOUR_COLLECTION_ADDRESS>";
// The token ID to evolve
const tokenID = "<YOUR_TOKEN_ID>";
// Your new IPFS metadata URI
const tokenURI = "ipfs://QmPuwGA4tHHdog5R4w1TUGjVGf2zd1v6fXJZhiXgJ8a1Tj";
```

### 2. Set Up Contract Interface

Initialize the contract connection:

```javascript
const CONTRACT_ABI_URL =
  "https://github.com/freeverseio/laos/blob/main/pallets/laos-evolution/src/precompiles/evolution_collection/contracts/EvolutionCollection.json?raw=true";
const response = await axios.get(CONTRACT_ABI_URL);
const contractABI = response.data;

const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(laosCollectionAddr, contractABI, wallet);
```

### 3. Evolve Function

Function to evolve an NFT:

```javascript
async function evolveNFT() {
  console.log(`Evolving asset with Token ID: ${tokenID}`);
  const tx = await contract.evolveWithExternalURI(tokenID, tokenURI);

  console.log("Transaction sent. Waiting for confirmation...");
  const receipt = await tx.wait();

  const event = receipt.logs.find(
    (log) => log.address.toLowerCase() === laosCollectionAddr.toLowerCase()
  );

  if (event) {
    const iface = new ethers.Interface(contractABI);
    const decodedEvent = iface.decodeEventLog(
      "EvolvedWithExternalURI",
      event.data,
      event.topics
    );
    console.log(
      `Evolved Token ID: ${decodedEvent._tokenId} to tokenURI ${decodedEvent._tokenURI}`
    );
  }
}
```

## Full Code Example

For complete implementation:

- [Evolution code example](https://github.com/freeverseio/laos-examples/blob/main/evolve.js)

### To run the example:

1. Create a .env file:

```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:

```
npm install ethers axios dotenv
```

3. Run the script:

```
node evolve.js
```

Make sure to keep your private key secure and never share it or commit it to version control.
