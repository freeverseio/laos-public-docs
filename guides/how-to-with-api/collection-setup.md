# Create NFT Collection

This guide explains how to create a collection in any EVM chain (Ethereum, Polygon, Arbitrum, etc.) with [Bridgeless Minting](/learn/bridgeless-minting/introduction) enabled.

By the end of this tutorial, you will have your own collection ready for minting and evolving NFTs without having to pay fees in the target EVM chosen.

## Prerequisites
- You have an API key. Information on how to obatain an API key [here](/api/introduction).
- Address associated with the API key has enough balance in LAOS and Polygon.

## Steps

1. **Connect to API**

  - Execute the following mutation https://testnet.api.laosnetwork.io/graphql

3. **Send the `createCollection` transaction**

   - Once you call `createCollection(_owner)`, you’ll receive an event `NewCollection(owner, collectionAddress)` indicating the address of your new collection.
   - Record or store the `collectionAddress` value; you will need it to mint and evolve NFTs.
   - You can check a [block explorer](https://sigma.explorer.laosnetwork.io/) to confirm that the transaction succeeded.

4. **Deploy uERC-721 in your desired EVM chain**

   - Clone [laos-erc721](https://github.com/freeverseio/laos-erc721) repository.
   - Go to file **_scripts > deploy.ts_**
   - Modify constructor params to set your _collectionName_, _tokenSymbol_ and your LAOS _collection address_

   ```
   const collectionName = "<YOUR_COLLECTION_NAME>";
   const tokenSymbol = "<YOUR_TOKEN_SYMBOL>";
   const siblingCollectionInLAOS = "<YOUR_LAOS_COLLECTION>";
   ```

   - If you deployed the LAOS collection in Sigma LAOS testnet, you might need to adjust the useMainnet boolean. In our case since we will deploy the collection in LAOS mainnet by setting:

   ```
   const useLAOSMainnet = true;
   ```

   - Run the following command to a deploy the uERC-721 collection in your desired chain.
     For example, to deploy a contract in Polygon mainnet you need to run the command

   ```
   npx hardhat run --network polygonMainnet scripts/deploy.ts
   ```

:::warning
_**siblingCollectionInLAOS**_ must match the LAOS address you obtained in **Step 2**
:::

## Next Steps

Now that you have your collection address in LAOS, proceed to [Upload Assets to IPFS](/guides/how-to-without-api/ipfs-upload) so that you can reference them in your tokens’ metadata.
