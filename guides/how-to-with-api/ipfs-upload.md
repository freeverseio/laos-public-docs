# Uploading asset metadata to IPFS

This guide walks you through uploading your NFT media to a decentralized storage platform (IPFS).

## Prerequisites

- IPFS pinning service (e.g., Pinata, Infura).
- Your NFT media files (images, videos, etc.)

## Steps

### 1. Select an IPFS service

   - If running your own IPFS node, ensure it is up and reachable.
   - Otherwise, register with a public pinning service like Pinata or Infura.

### 2. Upload your media files

   - Use your service’s UI or API to pin/upload each file (e.g., `my-cool-art.png`).
   - Save the resulting IPFS hash (CID), such as `Qmabc123xyz...`.

### 3. Obtain IPFS links
   - Your final IPFS link for the metadata might be `ipfs://Qmdef456uvw...`
   - This link can now be referenced in `tokenURI` when minting NFTs on the LAOS network.

## Next Steps

With your files and metadata on IPFS, you can move on to [Minting](/guides/how-to-with-api/minting), pointing your NFTs’ `tokenURI` to these IPFS links.
