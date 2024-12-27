# The EVM Interface

LAOS if a fully EVM compliant blockchain. Although the node is written in Rust using the Substrate framework, it exposes a standard Ethereum compatible interface, enabling all DApps already familiar with EVM blockchains to use LAOS by simply connecting to the appropriate RPC endpoints.

Check [this section](../introduction/resources.md) to consult the available public endpoints and the corresponding EVM chainIds.

Leveraging innovations by [Moonbeam](https://docs.moonbeam.network/builders/pallets-precompiles/precompiles/) and [Astar](https://docs.astar.network/docs/build/EVM/precompiles/), LAOS exposes some of the functionalities that are built in at protocol level via precompile contracts, accessible via a standard Solidity interface.

For example, the creation of collections in LAOS, that can be used as siblings for ERC721 contracts deployed in other chains, such as Ethereum, is done via the precompile at the following hardcoded address:

```
Creation of sibling collections in LAOS: 0x0000000000000000000000000000000000000403
```

&#x20;At this address, the following minimal interface is exposed:

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

When sibling collections are created, they are assigned a `collectionAddress`, which can be read from the emitted event, or from the return parameter of `createCollection`.  Only the provided `owner` can start minting and evolving in the newly created collection.

At each assigned `collectionAddress`, the following interface is available:

```solidity
interface EvolutionCollection {
    /// @notice Emitted when a new token is minted
    /// @notice The emitted tokenURI has not undergone any on-chain validation.
    /// @notice Users are fully responsible for accuracy,
    /// @notice authenticity and preventing potential misuse or exploits.
    /// @dev Id of the token is concatenation of `slot` and `to`
    /// @param _to the initial owner of the newly minted token
    /// @param _slot the slot of the token
    /// @param _tokenId the resulting id of the newly minted token
    /// @param _tokenURI the URI of the newly minted token
    event MintedWithExternalURI(
        address indexed _to,
        uint96 _slot,
        uint256 _tokenId,
        string _tokenURI
    );

    /// @notice Emitted when a token metadata is updated
    /// @notice The emitted tokenURI has not undergone any on-chain validation.
    /// @notice Users are fully responsible for accuracy,
    /// @notice authenticity and preventing potential misuse or exploits.
    /// @param _tokenId the id of the token for which the metadata has changed
    /// @param _tokenURI the new URI of the token
    event EvolvedWithExternalURI(uint256 indexed _tokenId, string _tokenURI);

    /// @notice Emitted when ownership of the collection changes
    /// @param _previousOwner the previous owner of the collection
    /// @param _newOwner the new owner of the collection
    event OwnershipTransferred(
        address indexed _previousOwner,
        address indexed _newOwner
    );

    /// @notice Owner of the collection
    /// @dev Call this function to get the owner of a collection
    /// @return the owner of the collection
    function owner() external view returns (address);

    /// @notice Provides a distinct Uniform Resource Identifier (URI) for a given token within a specified collection.
    /// @notice The tokenURI returned by this method has not undergone
    /// @notice any on-chain validation. Users are fully responsible for accuracy,
    /// @notice authenticity and preventing potential misuse or exploits.
    /// @dev Implementations must follow the ERC-721 standard for token URIs, which should point to a JSON file conforming to the "ERC721 Metadata JSON Schema".
    /// @param _tokenId The unique identifier of the token within the specified collection.
    /// @return A string representing the URI of the specified token.
    function tokenURI(uint256 _tokenId) external view returns (string memory);

    /// @notice Mint a new token
    /// @notice The tokenURI provided to this method does not undergo
    /// @notice any on-chain validation. Users are fully responsible for accuracy,
    /// @notice authenticity and preventing potential misuse or exploits.
    /// @dev Call this function to mint a new token, the caller must be the owner of the collection
    /// @param _to the owner of the newly minted token
    /// @param _slot the slot of the token
    /// @param _tokenURI the tokenURI of the newly minted token
    /// @return the id of the newly minted token
    function mintWithExternalURI(
        address _to,
        uint96 _slot,
        string calldata _tokenURI
    ) external returns (uint256);

    /// @notice Changes the tokenURI of an existing token
    /// @notice The tokenURI provided to this method does not undergo
    /// @notice any on-chain validation. Users are fully responsible for accuracy,
    /// @notice authenticity and preventing potential misuse or exploits.
    /// @dev Call this function to evolve an existing token, the caller must be the owner of the collection
    /// @param _tokenId the id of the token
    /// @param _tokenURI the new tokenURI of the token
    function evolveWithExternalURI(
        uint256 _tokenId,
        string calldata _tokenURI
    ) external;

    /// @notice Transfers ownership of the collection to a new account (`newOwner`).
    /// @dev Call this function to transfer ownership of the collection, the caller must be the owner of the collection
    /// @param _newOwner The address to transfer ownership to.
    function transferOwnership(address _newOwner) external;
}
```

This interface will continuously extend as new features are added to LAOS.
