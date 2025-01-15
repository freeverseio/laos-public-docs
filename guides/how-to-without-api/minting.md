# Minting an NFT

This guide shows you how to mint NFTs on LAOS. It covers both single minting and batch minting approaches.

## Prerequisites

- Collection contract address from your previously [created collection](/guides/how-to-without-api/collection-setup.md).
- [IPFS for NFT metadata](/guides/how-to-without-api/ipfs-upload.md).
- Private key with enough funds for transaction fees

## Steps

### 1. Prepare Your Environment

Set up your environment variables and imports:

```javascript
require("dotenv").config();
const { ethers } = require("ethers");
const axios = require("axios");

const PROVIDER_URL = "https://rpc.laossigma.laosfoundation.io";
const { PRIVATE_KEY } = process.env;

// The contract address of your collection in LAOS
const laosCollectionAddr = "<YOUR_COLLECTION_ADDRESS>";
// The recipient address
const recipient = "<RECIPIENT_ADDRESS>";
// Your IPFS metadata URI
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

### 3. Single Mint Function

Function to mint a single NFT:

```javascript
async function mintSingle() {
  // Generate a random slot number
  const slot =
    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) ** 2n %
    BigInt(2n ** 96n - 1n);

  console.log(`Minting asset to recipient: ${recipient}`);
  const tx = await contract.mintWithExternalURI(recipient, slot, tokenURI);

  console.log("Transaction sent. Waiting for confirmation...");
  const receipt = await tx.wait();

  const event = receipt.logs.find(
    (log) => log.address.toLowerCase() === laosCollectionAddr.toLowerCase()
  );

  if (event) {
    const iface = new ethers.Interface(contractABI);
    const decodedEvent = iface.decodeEventLog(
      "MintedWithExternalURI",
      event.data,
      event.topics
    );
    console.log(`New Token ID: ${decodedEvent._tokenId}`);
  }
}
```

### 4. Batch Minting

For minting multiple NFTs in batches:

```javascript
const BATCH_SIZE = 700;
const MAX_NUM_TXS_WAITING = 15;

async function deployBatchMinter(wallet) {
  const CONTRACT_ABI_URL =
    "https://github.com/freeverseio/laos-smart-contracts/blob/main/batch-minter/artifacts/contracts/LaosBatchMinter.sol/LaosBatchMinter.json?raw=true";
  const response = await axios.get(CONTRACT_ABI_URL);
  const contractData = response.data;

  const contractFactory = new ethers.ContractFactory(
    contractData.abi,
    contractData.bytecode,
    wallet
  );

  const instance = await contractFactory.deploy(wallet.address);
  await instance.waitForDeployment();
  return instance;
}

async function batchMint(assets) {
  const batchMinter = await deployBatchMinter(wallet);
  console.log("BatchMinter deployed at:", await batchMinter.getAddress());

  let currentIndex = 0;
  let nonce = await provider.getTransactionCount(wallet.address);
  const gasLimit = 13000000;

  while (currentIndex < assets.length) {
    const batch = assets.slice(currentIndex, currentIndex + BATCH_SIZE);
    const recipients = batch.map((asset) => asset.recipient);
    const uris = batch.map((asset) => asset.tokenURI);
    const slots = randomSlotArray(batch.length);

    await batchMinter.mintWithExternalURIBatch(recipients, slots, uris, {
      nonce: nonce++,
      gasLimit,
    });

    currentIndex += BATCH_SIZE;
  }
}
```

## Full Code Examples

For complete implementations:

- [Single Mint code example](https://github.com/freeverseio/laos-examples/blob/main/mint.js)
- [Batch Mint code example](https://github.com/freeverseio/laos-examples/blob/main/mint-in-batches.js)

### To run the examples:

1. Create a .env file:

```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:

```
npm install ethers axios dotenv
```

3. Run the scripts:

```
node mint.js
node mint-in-batches.js
```

Make sure to keep your private key secure and never share it or commit it to version control.
