# Uploading Asset Metadata to IPFS

Learn how to upload your NFT media and metadata to a decentralized storage platform (IPFS) for secure and reliable storage.

This guide uses JavaScript examples, but the process works with any programming language.

By the end, you'll have your NFT media and metadata securely hosted on IPFS, ready to integrate into your NFT collection.


## Prerequisites

- IPFS pinning service (e.g., [Pinata](https://pinata.cloud/)).
- Your NFT media files (images, videos, etc.) and metadata JSONs ready.

## Full Code Example

For the complete implementation using [Pinata](https://pinata.cloud/), refer to this script:
- [IPFS Uploader](https://github.com/freeverseio/laos-examples/blob/main/ipfs-uploader.js)

### To run the example:

1. Create a `.env` file with your Pinata API key and secret:
```
PINATA_API_KEY=your_api_key_here
PINATA_API_SECRET=your_api_secret_here
```

2. Install dependencies (if not done before):
```
npm install axios dotenv
```

3. Define the image and metadata for your NFT.

4. Run the script to upload files:
```
node ipfs-uploader.js
```

5. Verify your uploads:

- Check the IPFS hashes (CIDs) returned by the script.  
- Confirm the data is accessible using a public IPFS gateway, e.g., `https://ipfs.io/ipfs/<YOUR_CID>`.

Keep your API keys secure and never share or commit them to version control.

## Step-by-Step Explanation

### 1. Choose an IPFS Service

   - Use your own IPFS node (ensure it is running and accessible).  
   - Alternatively, register with a public pinning service like [Pinata](https://pinata.cloud/).  

### 2. Upload Media Files

   - Upload each media file (e.g., images, videos) via the service’s UI or API.  
   - Save the resulting IPFS hash (CID), such as `Qmabc123xyz...`.  

### 3. Create Metadata JSON

   - Use the standard NFT metadata structure:
     ```json
     {
       "name": "My Cool NFT",
       "description": "A description of my cool NFT",
       "image": "ipfs://<CID-for-my-cool-image.png>",
       "attributes": [
         { "trait_type": "Background", "value": "Blue" },
         { "trait_type": "Rarity", "value": "Rare" }
       ]
     }
     ```
   - Replace `<CID-for-my-cool-image.png>` with the CID of your uploaded media file.

### 4. Upload Metadata JSON

   - Pin/upload your metadata file (e.g., `metadata.json`) to IPFS.  
   - Note the resulting CID, such as `Qmdef456uvw...`.  

### 5. Get IPFS Links

   - Your metadata IPFS link will be `ipfs://<CID>` (e.g., `ipfs://Qmdef456uvw...`).  
   - Use this link as the `tokenURI` when minting NFTs on the LAOS network.  
   - Verify the upload using a public gateway, e.g.:  
     `https://ipfs.io/ipfs/<CID>`  

     Example: [https://ipfs.io/ipfs/QmR8HgbKrHys8QFtH99soGx9KreixpCXJqkFejJdhpyNGo](https://ipfs.io/ipfs/QmR8HgbKrHys8QFtH99soGx9KreixpCXJqkFejJdhpyNGo)

## Next Steps

With your files and metadata hosted on IPFS, proceed to [Minting](/guides/how-to-without-api/minting) to link your NFTs’ `tokenURI` to these IPFS links.

