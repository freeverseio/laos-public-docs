# Broadcasting NFTs

Learn how to broadcast NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) to make them visible on marketplaces.
Broadcasting requires a one-time minimal on-chain transaction and is only necessary for marketplaces that 
don't yet support bridgeless minting natively. 

## Prerequisites

- [Minted NFTs](/guides/evm/minting) on your collection, along with their corresponding `tokenIDs`.

## Full Code Example

The code corresponding to this example can be found [here](https://github.com/freeverseio/laos-examples/blob/main/evm/broadcast.js).

## Running the example

1. Set up the private key and install dependencies as in the previous steps.

2. Configure the target chain RPC URL, the ERC721 contract address, and the `tokenId` of the NFT to be broadcast.

3. Run the script:
```bash
$ node broadcast.js
```

:::info
NFTs that have been transferred at least once are automatically indexed by apps; broadcasting is not necessary in this case.
:::

## Broadcasting in Batches

Hundreds of NFTs can be minted in a single transaction by utilizing the batch versions of the broadcast
methods provided by the [uERC721 interface](https://github.com/freeverseio/laos-erc721/blob/main/contracts/IERC721Broadcast.sol#L57).
Simply supply an array of tokenIDs as input to the batch methods.

## Next Steps

After broadcasting, NFTs will appear in all marketplaces that operate on the selected EVM chain.
For example, if the chosen EVM chain is Polygon, the following link would display the asset on Opensea:
```
https://opensea.io/assets/matic/<ERC721_ADDRESS>/<TOKEN_ID>
```
Here's an [example](https://opensea.io/assets/matic/0x2f40c1f77ea0634ac917dec84b1f81ce15168f60/86651101796081652033016986086165155778491717863179337049323432681988042343796)
of an asset minted using Bridgeless Minting.