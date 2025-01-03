---
title: Minting
---

<!--
File 3: minting.md
-->

# 3. Minting

Now that you have your collection in LAOS and your assets uploaded to IPFS, you can mint your first NFT on LAOS. Minting in LAOS is done through the `EvolutionCollection` interface, using the `mintWithExternalURI` method.

---

## Prerequisites

- A collection address in LAOS (from [Step 1](../set-up-collection.md)).
- An IPFS link to your NFT metadata (from [Step 2](../upload-ipfs.md)).
- The `EvolutionCollection` interface, which is exposed at your collection’s address.

---

## Steps

1. **Obtain the contract interface**

   - Your newly created collection at `collectionAddress` exposes:
     ```solidity
     function mintWithExternalURI(
         address _to,
         uint96 _slot,
         string calldata _tokenURI
     ) external returns (uint256);
     ```
   - Also note the emitted event:
     ```solidity
     event MintedWithExternalURI(
         address indexed _to,
         uint96 _slot,
         uint256 _tokenId,
         string _tokenURI
     );
     ```

2. **Prepare the mint transaction**

   - `_to`: The recipient’s EVM address.
   - `_slot`: A number to distinguish the NFTs minted for this recipient (e.g., an incremental index).
   - `_tokenURI`: Your IPFS link, e.g. `ipfs://Qmdef456uvw...` pointing to the metadata JSON.

3. **Send the transaction**

   - Use your Web3 library (e.g., ethers.js) to call `mintWithExternalURI` on the `collectionAddress`.
   - Example (pseudo-code):
     ```js
     const tx = await collectionContract.mintWithExternalURI(
       "0xRecipientAddress",
       1,
       "ipfs://Qmdef456uvw..."
     );
     const receipt = await tx.wait();
     ```
   - Check the logs or `receipt.events` for the `MintedWithExternalURI` event to confirm.

4. **Retrieve the `tokenId`**

   - The function returns `tokenId`, and also emits it in the `MintedWithExternalURI` event.
   - Store this `tokenId` in your application, as you’ll need it to evolve the NFT or reference it later.

5. **Verify on LAOS**
   - Use a block explorer or a LAOS-compatible explorer to check that the mint transaction succeeded.
   - Confirm that you see the newly minted token with your IPFS-based `tokenURI`.

---

## Next Steps

With your NFT minted, you can now proceed to [Evolving](../evolving.md) it, updating its metadata as needed over time.
