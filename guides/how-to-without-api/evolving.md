---
title: Evolving
---

<!--
File 4: evolving.md
-->

# 4. Evolving

LAOS supports evolving NFTs, allowing you to update their metadata on-chain. This step explains how to change your NFT’s metadata via the `evolveWithExternalURI` method in your LAOS collection.

---

## Prerequisites

- A previously minted NFT on your LAOS collection (from [Step 3](../minting.md)).
- The updated metadata or IPFS link you wish to attach.

---

## Steps

1. **Update or create your new metadata**

   - If your NFT’s visual or attributes need to change, upload a new metadata JSON to IPFS (just as in Step 2).
   - Obtain the IPFS CID for your updated JSON.

2. **Prepare the evolve transaction**

   - Your collection at `collectionAddress` provides:
     ```solidity
     function evolveWithExternalURI(
         uint256 _tokenId,
         string calldata _tokenURI
     ) external returns (uint256);
     ```
   - `_tokenId`: The token you want to evolve.
   - `_tokenURI`: The new IPFS link, e.g. `ipfs://QmnewCid...`

3. **Send the transaction**

   - Example (pseudo-code):
     ```js
     const tx = await collectionContract.evolveWithExternalURI(
       tokenId,
       "ipfs://QmnewCid..."
     );
     const receipt = await tx.wait();
     ```
   - Upon success, the `EvolvedWithExternalURI` event will be emitted:
     ```solidity
     event EvolvedWithExternalURI(
       uint256 indexed _tokenId,
       string _tokenURI
     );
     ```

4. **Confirm the evolution**

   - Use a block explorer or a LAOS-compatible explorer to check the updated metadata for your NFT.
   - The `tokenURI(_tokenId)` should now return your new IPFS link.

5. **Consider locking baseURI (optional)**
   - If you’re using a custom version of the contract that allows locking updates (like in the `uERC721` template), you may finalize the metadata to prevent further changes.

---

## Next Steps

Once your NFT is evolved and reflects the new metadata, you can [Broadcast](../broadcasting.md) your collection or tokens to other chains or services if needed.
