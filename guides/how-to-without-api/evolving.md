# Evolving an NFT

LAOS supports evolving NFTs, allowing you to update their metadata on-chain. This step explains how to change your NFT’s metadata via the `evolveWithExternalURI` method in your LAOS collection.

## Prerequisites

- A previously [minted NFT](/guides/how-to-without-api/minting) on your LAOS collection.
- The updated metadata or IPFS link you wish to attach.

## Steps

1. **Update or create your new metadata**

   - If your NFT’s visual or attributes need to change, [upload a new metadata JSON to IPFS](/guides/how-to-without-api/ipfs-upload)
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

   - Example:
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
