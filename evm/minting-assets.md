# Minting Assets

The owner of a collection in LAOS, can use the `EvolutionCollection` interface to mint an evolve assets. The interface is fully detailed in the [EVM Interface section](/learn/the-layer-1-node), and it is exposed at the `collectionAddress` obtained when [creating the collection](/evm/creating-a-sibling-collection-in-LAOS). The interface can be found in both Solidity and ABI json format [here].

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

* `_slot`: a number between 0 and 2**96-1 that distinguishes the NFTs minted for this recipient. You can use an incremental index, or a random number within the available range.

* `_tokenURI`: the location where the metadata of the token can be fetched; ideally, it should point to a permissionless decentralized system, such as IPFS, or its incentivized versions, such as Filecoin or Crust.

The returned parameter is the `tokenId` generated for this new NFT.

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

The `tokenId` can later be used to evolve the asset as many times as needed.
