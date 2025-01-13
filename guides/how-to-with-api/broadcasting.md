# Broadcasting

Broadcasting in the context of LAOS refers to exposing a LAOS minted NFT to other apps (e.g., marketplaces) that do not support natively bridgeless minting.

Broadcasting triggers a standard ERC721 `Transfer` event, which these marketplaces use to index NFTs. You can broadcast in “MINT” mode (emitting a transfer event from `address(0)`), or in “SELF” mode (emitting a self-transfer event from the current owner to themselves).

## Prerequisites

- You have [minted](/guides/how-to-without-api/minting) one or more NFTs
- You know the `tokenId`(s) of the NFT(s) that you wish to broadcast.
- You have access to your uERC-721 collection contract, which includes the interface:
  ```solidity
  function broadcastMintBatch(uint256[] calldata tokenIds) external;
  function broadcastSelfTransferBatch(uint256[] calldata tokenIds) external;
  ```

## Steps

1. **Choose the broadcast type**

   - **MINT**

     - Emits a standard `Transfer` event from the zero address (`from = address(0)`) to the current owner, matching a “freshly minted” event signature.

   - **SELF**
     - Emits a “transfer” event from the owner to themselves, effectively “self-transferring” the NFT to broadcast its existence.

2. **Prepare the broadcast transaction**

   - **MINT**

     ```js
     const tokenIds = [
       92762087543321243492858811692430517458298127117648518661922453704541876652031,
       46231769497101023895754357762572931969783788518045090509665456129453327552117,
     ]; // example batch of tokenIds

     const tx = await collectionContract.broadcastMintBatch(tokenIds);
     const receipt = await tx.wait();
     // Each tokenId will emit a "Transfer" event from address(0) to its owner
     ```

   - **SELF**

     ```js
     const tokenIds = [
       92762087543321243492858811692430517458298127117648518661922453704541876652031,
       46231769497101023895754357762572931969783788518045090509665456129453327552117,
     ];

     const tx = await collectionContract.broadcastSelfTransferBatch(tokenIds);
     const receipt = await tx.wait();
     // Each tokenId will emit a "Transfer" event from the owner to themselves
     ```

3. **Check for success**

   - After the transaction is mined, each token in your list has now emitted a standard ERC721 `Transfer` event.
   - You can verify these events in the `receipt.events` array, or by looking them up in a block explorer.

:::info
NFTs that have been transferred at least once are automatically indexed by apps that do not support bridgeless minting. In this case, broadcasting is not necessary.
:::
