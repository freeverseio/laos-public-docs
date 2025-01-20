# Evolve NFT Collection

Learn how to evolve NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) by updating their metadata in your LAOS collection.

## Prerequisites

- A previously [minted NFT on your LAOS collection](/guides/how-to-without-api/minting.md)  
- The [IPFS link of the updated metadata](/guides/how-to-without-api/ipfs-upload.md)
- Private key with sufficient funds for transaction fees and owner of the collection

## Full Code Example

For the complete implementation, refer to this script:

- [Evolution Implementation](https://github.com/freeverseio/laos-examples/blob/main/evolve.js)

## Running the example

1. Create a .env file with your private key:
```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:
```bash
$ npm ci
```

3. Configure the LAOS sibling collection, tokenId, and the new tokenURI

4. Run the script:
```
node evolve.js
```

Keep your private key secure and never share it or commit it to version control.

## Next Steps

Now that you know how to evolve NFTs, you can proceed to [Broadcast your NFTs](/guides/how-to-without-api/broadcasting) to move them between wallets.