---
title: Collection Setup
---

<!--
File 1: set-up-collection.md
-->

# 1. Set Up a Collection

This guide explains how to create a sibling collection in the LAOS blockchain. By the end of this step, you will have your own collection ready for minting and evolving NFTs in LAOS.

## Steps

1. **Get the LAOS network RPC**

   - A list of public LAOS RPCs can be found [here](/learn/introduction/laos-and-its-testnet)
   - For testing, it is recommended to use LAOS Sigma Testnet

2. **Prepare the transaction**

   - You can use your preferred Web3 library (e.g., ethers.js, web3.js) to interact with the `EvolutionCollectionFactory` interface at
     `0x0000000000000000000000000000000000000403`.
   - The relevant function is:
     ```solidity
     function createCollection(address _owner) external returns (address);
     ```
   - Set `_owner` to the address that will own the new collection (this address will be capable of minting and evolving assets).

3. **Send the `createCollection` transaction**

   - Once you call `createCollection(_owner)`, you’ll receive an event `NewCollection(owner, collectionAddress)` indicating the address of your new collection.
   - Record or store the `collectionAddress` value; you will need it to mint and evolve NFTs.

4. **Verify the transaction**
   - Use a [block explorer](https://sigma.explorer.laosnetwork.io/) or your Web3 library to confirm the transaction succeeded.
   - Check the logs for the `NewCollection` event:
     ```text
     event NewCollection(address indexed _owner, address _collectionAddress);
     ```
   - Once confirmed, you have successfully created your collection in LAOS.

---

## Next Steps

Now that you have your collection address in LAOS, proceed to [Upload Assets to IPFS](../upload-ipfs.md) so that you can reference them in your tokens’ metadata.
