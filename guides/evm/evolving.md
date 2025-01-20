# Evolving NFTs

Learn how to evolve NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) by updating their metadata in the LAOS sibling collection.

## Prerequisites

- A previously [minted NFT on your LAOS collection](/guides/evm/minting.md).
- The [IPFS link of the updated metadata](/guides/evm/ipfs-upload.md).

## Full Code Example

The code corresponding to this example can be found [here](https://github.com/freeverseio/laos-examples/blob/main/evolve.js).

## Running the example

1. Set up the private key and install dependencies as in the previous steps.

2. Upload to IPFS the new metadata that fully describes the new asset. In addition to a new JSON file describing its attributes, you may also include a new image.

3. Configure the LAOS sibling collection and the previously minted `tokenId`, then set the `tokenURI` to point to the newly uploaded metadata CID on IPFS.

4. Run the script:
```bash
$ node evolve.js
```
