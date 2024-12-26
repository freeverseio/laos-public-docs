---
sidebar_position: 5
---
# Querying for Existing Extensions of an Asset

The following view methods can be used to find extensions about particular asset, or by a particular web3 address.

```solidity
// Returns the number of existing metadata extensions about the provided UL
function balanceOfUL(string calldata _uloc) external view returns (uint32);
```

Based on the number of extensions, the following two methods allow to query about the first one, the second one, and so on:

```solidity
// Returns the address of the account that made the extension
// of the asset at the provided Universal Location at the provided index
function claimerOfULByIndex(
    string calldata _uloc,
    uint32 _index
) external view returns (address);

// Returns the tokenURI of the extension of the asset
// at the provided Universal Location at the provided index
function extensionOfULByIndex(
    string calldata _uloc,
    uint32 _index
) external view returns (string memory);
```

Finally, the following methods allow to query the extension made by a particular address about a particular asset:

```solidity
// Returns the tokenURI for an extension about an asset at
// the provided Universal Location made by a given address
// Reverts if there is no such extension.
function extensionOfULByClaimer(
    string calldata _universalLocation,
    address _claimer
) external view returns (string memory);

// Returns true only if there exists an extension about an asset at
// the provided Universal Location made by a given address
function hasExtensionByClaimer(
    string calldata _universalLocation,
    address _claimer
) external view returns (bool);
```
