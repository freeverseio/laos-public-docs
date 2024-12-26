---
sidebar_position: 2
---
# Universal Location for DAME

While a [previous section](../bridgeless-minting/universal-location-for-bridgeless-minting.md) detailed the usage of Universal Location for Bridgeless Minting, allowing any chain to point to a LAOS sibling collection, we hereby discuss the second main usage, serving DAME, allowing LAOS to point to any asset in any chain.

### Universal Location to be Used as Asset Selector

Following the spec drafted in this [Github issue](https://github.com/freeverseio/laos/issues/177), the following Universal Location string can be used to point to any asset on any EVM chain:

```
uloc://GlobalConsensus(7:chainId)/AccountKey20(0xabc....def)/GeneralKey(666)
```

This string would point to:

* an asset with `tokenId = 666`,
* in an ERC721 collection at `contractAddress = 0xabc....def,`
* in the EVM chain with the provided `chainId`, for example,
  * `chainId = 1` for Ethereum,
  * `chainId = 127` for Polygon,
  * `chainId = 42161` for Arbitrum One,
  * `chainId = 56` for Binance Smart Chain.

Note that the number `7` in the `GlobalConsensus` junction specifies that the chain is EVM. Check [Chainlist](https://chainlist.org/) for other chainId options.

:::warning
It is important to include the `uloc://` prefix when using Universal Location in the context of DAME.
:::
