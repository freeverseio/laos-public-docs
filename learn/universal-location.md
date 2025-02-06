# Universal Location for Bridgeless Minting

The spec for constructing Universal Locations was drafted in this [Github issue](https://github.com/freeverseio/laos/issues/177).

In this section we illustrate its usage for Bridgeless Minting, allowing any chain to point to a LAOS sibling collection. The [second main usage](../dame/universal-location-for-dame) serves DAME, allowing LAOS to point to any asset in any chain.

### Universal Location to be used as BaseURI

The specification of the Universal Location, to be used as the returned string in `tokenURI` queries to ERC721 contracts, beyond the Polkadot ecosystem, is drafted in this [Github issue](https://github.com/freeverseio/laos/issues/177).  The specific strings to be used for LAOS Mainnet and Testnet are detailed [here](./laos-and-its-testnet).

As a summary, the following Universal Location string:

```
uloc://GlobalConsensus(0:0x77afd6190f1554ad45fd0d31aee62aacc33c6db0ea801129acb813f913e0764f)/Parachain(4006)/PalletInstance(51)/AccountKey20(0xabc....def)/GeneralKey(666)
```

would refer to:

* an asset with `tokenId = 666`,
* in the sibling collection at `contractAddress = 0xabc....def,`
* in the LAOS Sigma Testnet chain, which is always specified by providing the same triplet:
  * `GlobalConsensus = 0:0x77a...64f` (Testnet Paseo Relay Chain),
  * `Parachain = 4006`,
  * `PalletInstance = 51`.

The template contract described above takes care to append the `/GeneralKey(tokenId)` suffix to the  current value of `baseURI`.

### The `uloc://` prefix and public gateways

The `uloc://` prefix tag serves the same purposes as, for example, the `ipfs://` tag, indicating how the rest of the string is to be interpreted.

Services ready to interpret and operate with these standards are free to **permissionlessly** implement their own means to resolve and deal with these locations.

For example, in the IPFS case, some services resolve `ipfs://`  to popular public gateways, such as `https://ipfs.io.`

Likewise, the public `https://uloc.io` gateway, maintained by the LAOS Foundation, can be used to resolve `uloc://` prefixed locations. Check [this example](https://uloc.io/GlobalConsensus\(2\)/Parachain\(3370\)/PalletInstance\(51\)/AccountKey20\(0xFffFFFFFFfFfFFFFfFFfFFFe0000000000000000\)/GeneralKey\(2117177865313235697172373569158509151370659628068\)).

Until Bridgeless Minting and Evolution becomes more widely adopted by the ecosystem, it is advisable to use the public gateway instead of the prefix tag as `baseURI`. The uERC721 template provides the option to migrate from the former to the latter in the future, and lock its value to the prefix tag.
