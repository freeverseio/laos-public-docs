# Mint NFT Collection

Learn how to mint NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) with both single and batch minting approaches.

## Prerequisites

- Collection contract addresses from your [created collection](/guides/how-to-without-api/collection-setup.md)
- IPFS metadata URI for your NFTs
- Private key with sufficient funds for transaction fees and ownership of the collection

## Full Code Example

For the complete implementation, refer to these scripts:

- [Single Mint Implementation](https://github.com/freeverseio/laos-examples/blob/main/mint.js)
- [Batch Mint Implementation](https://github.com/freeverseio/laos-examples/blob/main/mint-in-batches.js)

### To run the example:

1. Create a .env file with your private key:

```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:

```
npm install ethers axios dotenv
```

3. Configure the LAOS sibling collection, recipient, and the tokenURI

4. Run the scripts:

```
node mint.js
```
or for batch minting
```
node mint-in-batches.js
```

Keep your private key secure and never share it or commit it to version control.

## Next Steps

Now that you know how to mint NFTs, you can proceed to [Evolve NFTs](/guides/how-to-without-api/evolving) to update their metadata and properties.