---
sidebar_position: 7
---
# Read Only Queries

The rest of the interface exposed at the `collectionAddress` obtained when [creating the collection](creating-a-sibling-collection-in-laos.md) contains the following read-only methods.

```solidity
function owner() external view returns (address);
function tokenURI(uint256 _tokenId) external view returns (string memory);
```

The first one returns the owner of the collection, and the second one, the current location where the metadata of a given `tokenId` points to.
