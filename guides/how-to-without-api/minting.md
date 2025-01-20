# Mint NFT Collection

Learn how to mint NFTs on any EVM chain (Ethereum, Polygon, Arbitrum, etc.), either one at a time, or in batches of many.

## Prerequisites

- A LAOS Sibling collection address. Check the [setup phase](/how-to-without-api/collection-setup.md) to obtain one.
- The IPFS CID corresponding to the NFT metadata. Check [IPFS upload](/how-to-without-api/collection-setup.md) to obtain one.

## Full Code Example

The code corresponding to minting examples can be found at:
- For a one at at time: [here](https://github.com/freeverseio/laos-examples/blob/main/mint.js).
- For minting in batches: [here](https://github.com/freeverseio/laos-examples/blob/main/mint-in-batches.js).

## Running the example

1. Setup the private key and install dependencies as in the previous steps.

2. Configure the LAOS sibling collection, recipient, and the tokenURI, in the corresponding lines of the chosen example.

3. Run the scripts:

```bash
$ node mint.js
```
or for batch minting
```bash
$ node mint-in-batches.js
```

4. TODO Check the `tokenID` generated for each of the minted NFTs. These ID can be used.... for example... to send it

5. TODO you can send them (must have contract address, tokenId) --- explain import to MMask and send. TODO explain that to show on opensea you stil need broadcasting (link here)


## Next Steps

Minted NFTs can be evolved by the owner of the LAOS sibling collection and traded... TODO: reference both options here (evolve and broadcast)