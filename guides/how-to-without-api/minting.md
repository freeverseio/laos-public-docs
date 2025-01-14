# Minting an NFT

Now that you have your collection and your assets uploaded to IPFS, you can mint your first NFT on LAOS. Minting on LAOS is done through the `EvolutionCollection` interface, using the `mintWithExternalURI` method.

## Prerequisites

- A [collection address](/guides/how-to-without-api/collection-setup.md) in LAOS.
- An [IPFS link to your NFT metadata](/guides/how-to-without-api/ipfs-upload).

## Steps

### 1. Obtain the contract interface

   - Your newly created collection at `collectionAddress` exposes:
     ```solidity
     function mintWithExternalURI(
         address _to,
         uint96 _slot,
         string calldata _tokenURI
     ) external returns (uint256);
     ```

### 2. Prepare the mint transaction

   - `_to`: The recipient’s EVM address.
   - `_slot`: A number to distinguish the NFTs minted for this recipient (e.g., an incremental index).
   - `_tokenURI`: Your IPFS link, e.g. `ipfs://Qmdef456uvw...` pointing to the metadata JSON.

### 3. Send the transaction

   - Use your Web3 library (e.g., ethers.js) to call `mintWithExternalURI` on the `collectionAddress`.
   - Example:
     ```js
     const tx = await collectionContract.mintWithExternalURI(
       "0xRecipientAddress",
       1,
       "ipfs://Qmdef456uvw..."
     );
     const receipt = await tx.wait();
     ```
   - Check the logs or `receipt.events` for the `MintedWithExternalURI` event to confirm.

### 4. Retrieve the `tokenId`

   - The function returns `tokenId`, it is also emitted in the `MintedWithExternalURI` event.
   - Store this `tokenId` in your application, as you’ll need it to evolve the NFT or reference it later.

## Next Steps

With your NFT minted, you can now proceed to [Evolving](/guides/how-to-without-api/evolving) it, updating its metadata as needed over time.
