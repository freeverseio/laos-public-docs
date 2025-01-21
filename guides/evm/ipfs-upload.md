# Uploading Metadata to IPFS

Learn how to upload your NFT media and metadata to a decentralized storage platform (IPFS) for secure and reliable storage.

This guide uses JavaScript examples, but the process works with any programming language.
By the end, you'll have your NFT media and metadata securely hosted on IPFS, ready to be referenced in your future mints.


## Prerequisites

- An IPFS pinning service (e.g., [Pinata](https://pinata.cloud/)).
- Your NFT media files (images, videos, etc.) and metadata descriptions in JSON format ready.

## Full Code Example

The code corresponding to this example, which uses [Pinata](https://pinata.cloud/) as IPFS service,
can be found and executed [here](https://github.com/freeverseio/laos-examples/blob/main/ipfs-uploader.js). 


## Running the example

1. Create a `.env` file with your Pinata API key and secret:
```
PINATA_API_KEY=your_api_key_here
PINATA_API_SECRET=your_api_secret_here
```
:::warning
Keep this info secure and never share it or commit it to version control.
:::

2. Install dependencies (if not done before):
```bash
$ npm ci
```

3. Define the image and metadata for your NFT. The example provided in the code is:

```Javascript
const imagePath = 'imgs/weapon.jpg';
const imageHash = await uploadToIPFS(imagePath);
const metadata = {
   name: 'Your NFT Name',
   description: 'Description of your NFT',
   image: `ipfs://${imageHash}`,
   attributes: [
      { trait_type: 'Attr 1', value: 'Value 1' },
      { trait_type: 'Attr 2', value: 'Value 2' },
   ],
};
```

4. Run the script to upload files:
```bash
$ node ipfs-uploader.js
```

5. Verify your uploads:

- Check the IPFS hashes (CIDs) returned by the script. You will see:
  - one CID for the uploaded image, this CID is referenced inside the JSON metadata ([example](https://ipfs.io/ipfs/Qmez6DyLMxPoFxUNbVYyGFMtCztQjDvhGxaGTiFUMzX4ee));
  - one CID for the uploaded JSON metadata, to be used in the future mint transaction ([example](https://ipfs.io/ipfs/QmNiyMshCSeiDd2CAkkgkK5t7eDj5DpbZtiKpWbKXKkLWn)).

- Confirm that both CIDs are propagated across the decentralized IPFS network. For example,
they should eventually be accessible using the popular public `ipfs.io` gateway at: `https://ipfs.io/ipfs/<YOUR_CID>`.

## Next Steps

With the data already hosted on IPFS, everything is ready to send the mint transaction, where the minted NFTs’ `tokenURI` will point to the IPFS metadata CID.