# Evolving Assets

After an asset is minted, the owner of the collection can modify it according to the rules that agreed upon off-chain, such as by using the asset in a videogame, or by providing proof of attendance to an event.

The following method implements asset evolution; like the minting counterpart, it is exposed at the `collectionAddress` obtained when [creating the collection](creating-a-sibling-collection-in-laos.md).

```solidity
function evolveWithExternalURI(
    uint256 _tokenId,
    string calldata _tokenURI
) external returns (uint256);
```

The input parameters are:

* \_tokenId: the id of the token resulting from the original mint transaction
* \_tokenURI: the new tokenURI that this asset will point to

Currently, this method returns the `tokenId` as output parameter.

An evolve transaction emits the following event:

```solidity
event EvolvedWithExternalURI(
    uint256 indexed _tokenId,
    string _tokenURI
);
```

This broadcasts all the input data of the transaction.
