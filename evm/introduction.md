# Introduction

LAOS is a fully EVM-compliant blockchain. Its node is written in Rust using the Substrate framework, which enhances both performance and security. On top of this Rust foundation, the node exposes a standard Ethereum-compatible interface, allowing DApps familiar with EVM blockchains to seamlessly integrate with LAOS by simply connecting to the appropriate RPC endpoints.

Refer to the [Resources](../learn/laos-and-its-testnet) section for details on public RPC nodes and chain IDs.

LAOS extends the standard EVM with precompiled contracts that interface directly with protocol-optimized functionalities. These include scaling NFT-related operations on other chains, such as creating NFT collections, Bridgeless Minting, asset evolution, and more. These precompiles appear as regular contracts on hardcoded addresses.

For example, the creation of collections on LAOS, ready to be used as siblings for ERC721 contracts deployed in other chains, such as Ethereum, is done via a precompile at the following hardcoded address:

```solidity
// Address of precompile for creation of collections on LAOS
0x0000000000000000000000000000000000000403
```
At this address, the following interface is exposed:
```solidity
interface EvolutionCollectionFactory {
    /// @notice Event emitted when a new collection is created
    /// @param _owner the owner of the newly created collection
    /// @param _collectionAddress the address of the newly created collection
    event NewCollection(address indexed _owner, address _collectionAddress);

    /// @notice Creates a new collection
    /// @dev Call this function to create a new collection
    /// @param _owner the owner of the newly created collection
    /// @return the address of the newly created collection
    function createCollection(address _owner) external returns (address);
}
```
The rest of this section details all precompiles currently available on LAOS.