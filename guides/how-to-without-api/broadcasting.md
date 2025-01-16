# Broadcasting

LAOS' Bridgeless Minting pattern is currently being integrated natively into marketplaces. To display these assets in marketplaces that are not yet compatible, a one-time minimal on-chain transaction is required on the chain where the ERC721 is managed.

This transaction, called "Broadcast," simply emits a standard transfer event, informing all marketplaces that index such events.

## Prerequisites

- You have [minted](/guides/how-to-without-api/minting) one or more NFTs
- You know the `tokenId`(s) of the NFT(s) that you wish to broadcast.

## Steps

### 1. Choose the broadcast type

- **MINT**

Emits a standard `Transfer` event from the zero address (`from = address(0)`) to the current owner, matching a “freshly minted” event signature. The mint broadcast is detected by marketplaces like Rarible.

- **SELF**

Emits a “transfer” event from the owner to themselves, effectively “self-transferring” the NFT to broadcast its existence. The mint broadcast is detected by marketplaces like Opensea.

### 2. Prepare Your Environment

Set up your environment variables and imports:

```javascript
require("dotenv").config();
const { ethers } = require("ethers");
const axios = require("axios");

// Target chain RPC (e.g. Polygon)
const PROVIDER_URL = "https://polygon.drpc.org";
const { PRIVATE_KEY } = process.env;

// Your ERC721 contract on target chain
const uERC721Address = "<YOUR_ERC721_ADDRESS>";
// Token ID to broadcast
const tokenId = "<YOUR_TOKEN_ID>";
```

### 3. Set Up Contract Interface

Initialize the contract connection:

```javascript
const CONTRACT_ABI_URL =
  "https://github.com/freeverseio/laos-erc721/blob/main/abi/contracts/ERC721Universal.sol/ERC721Universal.json?raw=true";
const response = await axios.get(CONTRACT_ABI_URL);
const contractABI = response.data;

const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(uERC721Address, contractABI, wallet);
```

### 4. Broadcast Function

Function to broadcast an NFT:

```javascript
async function broadcastNFT() {
  console.log(`Broadcasting asset with TokenId: ${tokenId}`);
  const tx = await contract.broadcastSelfTransfer(tokenId);

  console.log("Transaction sent. Waiting for confirmation...");
  const receipt = await tx.wait();

  const event = receipt.logs.find(
    (log) => log.address.toLowerCase() === uERC721Address.toLowerCase()
  );

  if (event) {
    const iface = new ethers.Interface(contractABI);
    const decodedEvent = iface.decodeEventLog(
      "Transfer",
      event.data,
      event.topics
    );
    console.log(`Broadcasted asset with Token ID: ${decodedEvent.tokenId}`);
  }
}
```

## Full Code Example

For complete implementation:

[Broadcast code example](https://github.com/freeverseio/laos-examples/blob/main/broadcast.js)

### To run the example:

1. Create a `.env` file:

   ```env
   PRIVATE_KEY=your_private_key_here
   ```

2. Install dependencies:

   ```bash
   npm install ethers axios dotenv
   ```

3. Run the script:

   ```bash
   node broadcast.js
   ```

After successful broadcast, your NFT should be visible on marketplaces. For example, if using Polygon, you can view it on OpenSea at:

```
https://opensea.io/assets/matic/<YOUR_ERC721_ADDRESS>/<TOKEN_ID>
```

:::info
NFTs that have been transferred at least once are automatically indexed by apps that do not support bridgeless minting. In this case, broadcasting is not necessary.
:::
