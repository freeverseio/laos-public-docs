---
id: introduction-evm
---
# Introduction

LAOS if a fully EVM compliant blockchain. The node is written in Rust using the Substrate framework, and it exposes a standard Ethereum compatible interface, enabling all DApps already familiar with EVM blockchains to use LAOS by simply connecting to the appropriate RPC endpoints.

Check [this section](/learn/introduction/laos-and-its-testnet) to consult the available public endpoints and the corresponding EVM chainIds.

Leveraging innovations within the Polkadot ecosystem, especially by [Moonbeam](https://docs.moonbeam.network/builders/ethereum/precompiles/) and [Astar](https://docs.astar.network/docs/build/EVM/precompiles/), LAOS exposes some of the functionalities that are built in at protocol level via precompile contracts, accessible via a standard Solidity interface.

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