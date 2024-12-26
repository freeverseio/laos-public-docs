---
sidebar_position: 4
---
# Updating a Previous Extension of an Asset

Existing metadata extensions can be updated by the same web3 accounts that created them.

The corresponding method is `updateExtendedTokenURI`:&#x20;

```solidity
// Interace available at contract address 0x0000000000000000000000000000000000000405
function updateExtendedULWithExternalURI(
    string calldata _uloc,
    string calldata _tokenURI
) external;
```

The input parameters are:

* `_uloc`: the Universal Location identifying the asset in its corresponding chain,
* `_tokenURI`: the location where the updated metadata of the extension can be fetched.

On success, this transaction emits a corresponding event:

```solidity
event UpdatedExtendedULWithExternalURI(
    address indexed _claimer,
    bytes32 indexed _universalLocationHash,
    string _universalLocation,
    string _tokenURI
);
```

Besides emitting the web3 account that created the extension (as `_claimer`), this method also includes the hash of the Universal Location that was extended (as `_universalLocationHash`). The latter parameter is indexed, which can be useful for DApps that query about events related to a particular asset.
