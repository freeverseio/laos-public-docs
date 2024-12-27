---
id: creating-a-sibling-collection-in-laos
sidebar_position: 2
---
# Creating a Sibling Collection in LAOS

The creation of a sibling collection in LAOS just requires one transaction, which can be sent from any web3 address. The transaction must specify the owner of collection, i.e. the address that will be capable of minting and evolving assets within it.&#x20;

### Add the Network to your web3 wallet&#x20;

Ensure your web3 wallet (e.g., MetaMask) is configured for the LAOS network. For first-time users, we recommend using the LAOS Testnet. You can find the necessary network details, including the public RPC endpoint and chainID[ here](../introduction/laos-and-its-testnet.md).

### Send a CreateCollection Transaction

Use your preferred web3 library to execute the `createCollection` transaction, available at the hardcoded contract address `0x...403`, as detailed in the [EVM Interface section](../the-laos-node/the-evm-interface.md):

```solidity
// this interface is available at the hardcoded address:
// 0x0000000000000000000000000000000000000403

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

When sibling collections are created, they are assigned a `collectionAddress`, which can be read from the emitted event, or from the return parameter of `createCollection`.  Only the provided `owner` can start minting and evolving in the newly created collection.

### An example

The following [createCollection transaction](https://sigma.explorer.laosnetwork.io/tx/0x14047e03cfc1553e547ec4b85bfed585b5038099db92006a00ad307401174ff1) in LAOS Sigma (Testnet) serves as an example to explore its anatomy, as well as the event it emitted, which includes the owner and the collection address.

<figure><img src="/img/createCollectionTx.png" alt=""></img><figcaption></figcaption></figure>

### Transferring Ownership of a Collection

The owner of a collection in LAOS can transfer its ownership to a different account by simply using the following method:

```solidity
/// @notice Transfers ownership of the collection to a new account (`newOwner`).
/// @dev Call this function to transfer ownership of the collection, the caller must be the owner of the collection
/// @param _newOwner The address to transfer ownership to.
function transferOwnership(address _newOwner) external;
```

which emits the corresponding event:

```solidity
/// @notice Emitted when ownership of the collection changes
/// @param _previousOwner the previous owner of the collection
/// @param _newOwner the new owner of the collection
event OwnershipTransferred(
    address indexed _previousOwner,
    address indexed _newOwner
);
```