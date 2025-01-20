# Broadcast NFT Collection

Learn how to broadcast NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) to make them visible on marketplaces that don't yet support bridgeless minting natively. Broadcasting requires a one-time minimal on-chain transaction.

## Prerequisites

- [Minted NFTs](/guides/how-to-without-api/minting) on your collection
- TokenID(s) of the NFT(s) to broadcast
- Private key with sufficient funds for transaction fees

## Full Code Example

For the complete implementation, refer to this script:

- [Broadcast Implementation](https://github.com/freeverseio/laos-examples/blob/main/broadcast.js)

## Running the example

1. Create a .env file with your private key:
```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:
```bash
$ npm ci
```
3. Configure the target chain RPC URL, the ERC721 contract address, and the tokenId to broadcast

4. Run the script:
```
node broadcast.js
```

Keep your private key secure and never share it or commit it to version control.

:::info
NFTs that have been transferred at least once are automatically indexed by apps that do not support bridgeless minting. Broadcasting is not necessary in this case.
:::

## Next Steps

After broadcasting, view your NFT on marketplaces:
```
https://opensea.io/assets/matic/<YOUR_uERC721_ADDRESS>/<TOKEN_ID>
```