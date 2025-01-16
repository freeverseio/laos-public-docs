# Create NFT Collection

Learn how to create an NFT collection on any EVM chain (Ethereum, Polygon, Arbitrum, etc.) with [Bridgeless Minting](/learn/bridgeless-minting/introduction).

This guide uses JavaScript examples, but the process works with any programming language.

By the end, you'll have your own collection ready for minting and evolving NFTs without paying fees on the chosen EVM chain.


## Prerequisites

- Private key with sufficient funds for transaction fees

## Full Code Example

For the complete implementation, refer to these scripts:

- [Setup Bridgeless Minting](https://github.com/freeverseio/laos-examples/blob/main/setup-bridgeless-minting.js)  
   - Includes steps for both [LAOS Collection Creation](https://github.com/freeverseio/laos-examples/blob/main/create-laos-collection.js) and [uERC721 Deployment](https://github.com/freeverseio/laos-examples/blob/main/deploy721.js).


### To run the example:

1. Create a .env file with your private key:

```
PRIVATE_KEY=your_private_key_here
```

2. Install dependencies:

```
npm install ethers axios dotenv
```

3.  Configure the LAOS and target chain RPC URLs

4. Run the scripts:

```
node setup-bridgeless-minting.js
```

Keep your private key secure and never share it or commit it to version control.

The creation process deploys smart contracts on both your target chain and LAOS. Store the returned addresses safely as you'll need them for future operations.



## Next Steps
Now that you have your collection address in LAOS, proceed to [Upload Assets to IPFS](/guides/how-to-without-api/ipfs-upload) so that you can reference them in your tokens’ metadata.