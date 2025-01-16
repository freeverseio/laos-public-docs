# Uploading asset media files to IPFS

This guide walks you through uploading your NFT media to a decentralized storage platform (IPFS).

:::info
When using the API you only need to upload the NFT media (image, videos, etc.) to IPFS. The API will automatically upload the final json metadata to IPFS.
:::

## Prerequisites

- IPFS pinning service (e.g., [Pinata](https://pinata.cloud/)).
- Your NFT media files (images, videos, etc.).


## Steps

### 1. Select an IPFS service

   - If running your own IPFS node, ensure it is up and reachable.
   - Otherwise, register with a public pinning service like Pinata or Infura.
   - You can use the following example script to [upload NFT media and metadata to Pinata using API](https://github.com/freeverseio/laos-examples/blob/main/ipfs-uploader.js). Alternatively, you can follow the next steps to manually upload the media to IPFS.

### 2. Upload your media files

   - Use your service’s UI or API to pin/upload each file (e.g., `my-cool-art.png`).
   - Save the resulting IPFS hash (CID), such as `Qmabc123xyz...`.

### 3. Obtain IPFS links
   - Your final IPFS link for the media will be `ipfs://Qmdef456uvw...`
   - You can confirm that your data is correctly uploaded to IPFS by visiting:
   ```https://ipfs.io/ipfs/<YOUR_IPFS_LINK>```
   
   Example: https://ipfs.io/ipfs/QmR8HgbKrHys8QFtH99soGx9KreixpCXJqkFejJdhpyNGo

## Next Steps

With your files on IPFS, you can move on to [Minting](/guides/how-to-with-api/minting), pointing your NFTs’ `tokenURI` to these IPFS links.
