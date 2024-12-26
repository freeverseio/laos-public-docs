---
sidebar_position: 3
---
# Extending the Metadata of an Asset

Any web3 account use the `AssetMetadataExtender` interface to extend the metadata of any asset, in any chain, and evolve their extensions over time.&#x20;

The interface can be found in both Solidity and ABI json format [here](https://github.com/freeverseio/laos/tree/main/ownership-chain/precompile/asset-metadata-extender/contracts).  The interface is available at the contract address `0x0000000000000000000000000000000000000405.`

The main entry point is the `extendTokenURI` method:

```solidity
// Interace available at contract address 0x0000000000000000000000000000000000000405
function extendULWithExternalURI(
    string calldata _uloc,
    string calldata _tokenURI
) external;
```

The input parameters are:

* `_uloc`: the Universal Location identifying the asset in its corresponding chain,
* `_tokenURI`: the location where the metadata of the extension can be fetched; ideally, it should point to a permissionless decentralized system, such as IPFS, or its incentivized versions, such as Filecoin or Crust.

On success, this transaction emits a corresponding event:

```solidity
event ExtendedULWithExternalURI(
    address indexed _claimer,
    bytes32 indexed _universalLocationHash,
    string _universalLocation,
    string _tokenURI
);
```

Besides emitting the web3 account that created the extension (as `_claimer`), this method also includes the hash of the Universal Location that was extended (as `_universalLocationHash`). The latter parameter is indexed, which can be useful for DApps that query about events related to a particular asset.
