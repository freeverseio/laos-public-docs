# Create NFT Collection

This guide explains how to create a collection in any EVM chain (Ethereum, Polygon, Arbitrum, etc.) with [Bridgeless Minting](/learn/bridgeless-minting/introduction) enabled.

These examples are done in JavaScript, but the process can be implemented in any programming language.

By the end of this tutorial, you will have your own collection ready for minting and evolving NFTs without having to pay fees in the target EVM chosen.

## Steps

### 1. Prepare Your Environment

First, set up your environment variables and required imports:

```javascript
require('dotenv').config();
const { ethers } = require('ethers');
const axios = require('axios');

const PROVIDER_URL = 'https://rpc.laossigma.laosfoundation.io';
const { PRIVATE_KEY } = process.env;
```

### 2. Connect to LAOS Network
Create a wallet instance connected to the LAOS network:
```javascript
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const CONTRACT_ABI_URL = 'https://github.com/freeverseio/laos/blob/main/pallets/laos-evolution/src/precompiles/evolution_collection_factory/contracts/EvolutionCollectionFactory.json?raw=true';
const COLLECTION_FACTORY_ADDR = '0x0000000000000000000000000000000000000403';
```
### 3. Create the Collection
Use the EvolutionCollectionFactory contract to create your collection:
```javascript
async function createLAOSCollection(wallet) {
  const response = await axios.get(CONTRACT_ABI_URL);
  const contractABI = response.data;
  const contract = new ethers.Contract(COLLECTION_FACTORY_ADDR, contractABI, wallet);
  
  const tx = await contract.createCollection(wallet.address);
  const receipt = await tx.wait();
  
  const event = receipt.logs.find(
    (log) => log.address.toLowerCase() === COLLECTION_FACTORY_ADDR.toLowerCase()
  );
  const iface = new ethers.Interface(contractABI);
  const decodedEvent = iface.decodeEventLog('NewCollection', event.data, event.topics);
  return decodedEvent._collectionAddress;
}
```
### 4. Deploy uERC721 Contract
Deploy the uERC721 contract on your target EVM chain:
```javascript
const PROVIDER_URL = 'https://polygon-bor-rpc.publicnode.com'; // Example for Polygon

async function deploy721(laosSiblingCollection, wallet) {
  const CONTRACT_ABI_URL = 'https://github.com/freeverseio/laos-erc721/blob/main/artifacts/contracts/ERC721Universal.sol/ERC721Universal.json?raw=true';
  const response = await axios.get(CONTRACT_ABI_URL);
  const contractData = response.data;
  
  const contractFactory = new ethers.ContractFactory(
    contractData.abi,
    contractData.bytecode,
    wallet
  );

  const baseURI = buildBaseURI(laosSiblingCollection);
  const instance = await contractFactory.deploy(
    wallet.address, 
    "Your Collection Name", 
    "SYMBOL", 
    baseURI
  );
  
  await instance.waitForDeployment();
  return instance.getAddress();
}
```
### Full Code Example
For the complete implementation:

1. [LAOS Collection Creation](https://github.com/freeverseio/laos-examples/blob/main/create-laos-collection.js)
2. [uERC721 Deployment](https://github.com/freeverseio/laos-examples/blob/main/deploy721.js)

To run the example:

Create a .env file with your private key:
```
PRIVATE_KEY=your_private_key_here
```
Install dependencies:

```
npm install ethers axios dotenv
```
Run the scripts:

```
node create-laos-collection.js
node deploy721.js
```

Keep your private key secure and never share it or commit it to version control.

The creation process deploys smart contracts on both your target chain and LAOS. Store the returned addresses safely as you'll need them for future operations.

Now that you have your collection address in LAOS, proceed to [Upload Assets to IPFS](/guides/how-to-without-api/ipfs-upload) so that you can reference them in your tokens’ metadata.
