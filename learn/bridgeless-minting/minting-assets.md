---
sidebar_position: 5
---
# Minting Assets

The owner of a collection in LAOS, can use the `EvolutionCollection` interface to mint an evolve assets. The interface is fully detailed in the [EVM Interface section](../the-laos-node/the-evm-interface.md), and it is exposed at the `collectionAddress` obtained when [creating the collection](creating-a-sibling-collection-in-laos.md). The interface can be found in both Solidity and ABI json format [here](https://github.com/freeverseio/laos/tree/main/pallets/laos-evolution/src/precompiles/evolution_collection/contracts).&#x20;

The main entry point is the `mintWithExternalURI` method:

```solidity
function mintWithExternalURI(
    address _to,
    uint96 _slot,
    string calldata _tokenURI
) external returns (uint256);
```

The input parameters are:

* `_to`: the EVM address of the recipient of the NFT
* `_slot`: a number between `0` and `2**96-1` that distinguishes the NFTs minted for this recipient. You can use an incremental index, or a random number within the available range.
* `_tokenURI`: the location where the metadata of the token can be fetched; ideally, it should point to a permissionless decentralized system, such as IPFS, or its incentivized versions, such as Filecoin or Crust.

The returned parameter is the `tokenId` generated for this new NFT.&#x20;

A minting transaction emits the following event:

```solidity
event MintedWithExternalURI(
    address indexed _to,
    uint96 _slot,
    uint256 _tokenId,
    string _tokenURI
);
```

This broadcasts all the input data of the transaction, as well as the output `tokenId`.

The `tokenId` can later be used to [evolve the asset](evolving-assets.md) as many times as needed.
