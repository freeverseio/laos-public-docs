# Deploying a uERC721 in any EVM chain

Once a sibling collection has been created, its assigned contractAddress in LAOS can be used to deploy an ERC721 collection, in any EVM blockchain of choice (such as Ethereum or Polygon), which will be paired with the sibling collection.

The pairing is established by using the Universal Location, a feature of Polkadot's Cross-Consensus Messaging version 3. Check the videos linked in the [Resources section](../introduction/resources.md) for a deeper understanding of the Universal Location.

### The uERC721 contract

The open-source [uERC721 template contract](https://github.com/freeverseio/laos-erc721) may be used as a starting point to deploy a collection in any EVM of choice. This contract minimally extends the default, audited and widely used ERC721 [implementation by OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721); the _**u**_ prefix in uERC721 stands for such a _Universal_ extension.

The extension follows the specification detailed in this [Github issue](https://github.com/freeverseio/laos-erc721/issues/9), which will soon be submitted as an ERC proposal.

:::info
The only mandatory difference between an ERC721 ready for bridgeless minting and any other ERC721 is that the `tokenURI` must point to the LAOS consensus system. All other aspects of the uERC721 template are optional. You can use your existing contracts, wrappers, etc., as long as the `tokenURIs` point to LAOS
:::

The template contract requires a key parameter in its constructor: `baseURI`. This `string` specifies the Universal Location of the sibling collection in LAOS. As explained [here](universal-location-for-bridgeless-minting.md), the baseURI that would point to a sibling collection in [LAOS Sigma Testnet](../introduction/laos-and-its-testnet.md) at a given `contractAddress` is:

```
https://uloc.io/GlobalConsensus(0:0x77afd6190f1554ad45fd0d31aee62aacc33c6db0ea801129acb813f913e0764f)/Parachain(4006)/PalletInstance(51)/AccountKey20(contractAddress)/
```

:::warning
Do not forget the trailing slash `/` at the end of the string
:::

In this particular implementation, the `baseURI` can be changed by the owner of the contract, which is an address provided in the constructor too, by calling the `updateBaseURI` method.

The contract also allows the owner to relinquish this privilege and permanently lock the current baseURI by calling the `lockBaseURI` method.

Please consider this implementation as a template. Feel free to modify and extend its logic to suit your particular needs.



