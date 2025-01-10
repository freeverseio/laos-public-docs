# 1. Set Up a Collection

This guide explains how to create a collection in any EVM chain (Ethereum, Polygon, Arbitrum, etc.) with [Bridgeless Minting](/learn/bridgeless-minting/introduction) enabled.

By the end of this tutorial, you will have your own collection ready for minting and evolving NFTs without having to pay fees in the target EVM chosen.

## Steps

1. **Get the LAOS network RPC**
   - A list of public LAOS RPCs can be found [here](/learn/introduction/laos-and-its-testnet)
   - For testing, it is recommended to use LAOS Sigma Testnet

2. **Prepare the transaction**
   - Interact with the `EvolutionCollectionFactory` interface at
     `0x0000000000000000000000000000000000000403`.
   - The relevant function is:
     ```solidity
     function createCollection(address _owner) external returns (address);
     ```
   - Set `_owner` to the address that will own the new collection (this address will be capable of minting and evolving assets).

3. **Send the `createCollection` transaction**
   - Once you call `createCollection(_owner)`, you’ll receive an event `NewCollection(owner, collectionAddress)` indicating the address of your new collection.
   - Record or store the `collectionAddress` value; you will need it to mint and evolve NFTs.
   - You can check a [block explorer](https://sigma.explorer.laosnetwork.io/) to confirm that the transaction succeeded.

4. **Deploy uERC-721 in your desired EVM chain**

   - Clone [laos-erc721](https://github.com/freeverseio/laos-erc721) repository.
   - Go to file *scripts > deploy.ts*
   - Modify constructor params to set your collectionName, tokenSymbol and your collection address you created in LAOS  
   ```
   const collectionName = "<YOUR_COLLECTION_NAME>";
   const tokenSymbol = "<YOUR_TOKEN_SYMBOL>";
   const siblingCollectionInLAOS = "<YOUR_LAOS_COLLECTION>";
   ```
  
   - If you deployed the LAOS collection in Sigma LAOS testnet, you might need to adjust the deploment parameter. In our case since we have deployed the collection in LAOS mainnet we will leave it as true
   ```
   const useLAOSMainnet = true;
   ```
   - For example, to deploy a contract in Polygon mainnet you need to run the command
   ```
   npx hardhat run --network polygonMainnet scripts/deploy.ts
   ```
   
:::warning
_**siblingCollectionInLAOS**_ must match the LAOS address you obtained in **Step 2**
:::

---

## Next Steps

Now that you have your collection address in LAOS, proceed to [Upload Assets to IPFS](../upload-ipfs.md) so that you can reference them in your tokens’ metadata.
