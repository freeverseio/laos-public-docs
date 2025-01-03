---
title: Broadcasting
---

<!--
File 5: broadcasting.md
-->

# 5. Broadcasting

Broadcasting in the context of LAOS refers to sharing or exposing your LAOS-based NFT data (collection, tokens, updated states) to other networks, applications, or marketplaces.

---

## Overview

- **Bridgeless Minting**: By leveraging LAOS’s universal location (uloc://) scheme, your LAOS NFT metadata can be recognized across different EVMs and marketplaces without a traditional bridge.
- **Universal Location**: A `uloc://` string can point to your LAOS collection and a specific token. Public gateways such as `https://uloc.io` can resolve these references.

---

## Steps to Broadcast / Expose Your NFT

1. **Use the Universal Location**

   - When you deployed your LAOS sibling collection, you can pair it with an ERC721 on another EVM by setting the `baseURI` to the LAOS universal location (or the public gateway).
   - Example for LAOS Sigma Testnet:
     ```
     https://uloc.io/GlobalConsensus(0:0x77afd6...)/Parachain(4006)/PalletInstance(51)/AccountKey20(0xYOUR_COLLECTION_ADDRESS)/
     ```
   - This ensures that NFT marketplaces or explorers on EVM chains can retrieve the LAOS data from the universal location.

2. **Deploy a `uERC721` in another EVM chain (optional)**

   - If you want a 1:1 sibling collection on Ethereum, Polygon, or another chain, you can use the `uERC721` template contract.
   - Provide the LAOS-based `baseURI` to let external marketplaces fetch the actual metadata from LAOS.

3. **Update or Lock the baseURI**

   - You may update the `baseURI` to switch from the `https://uloc.io` gateway to `uloc://` directly (for deeper interoperability).
   - If supported by your contract, once you finalize your metadata references, consider locking them to prevent further changes.

4. **Share with Marketplaces and DApps**

   - Provide the contract address (e.g., your `uERC721` in Ethereum) or the universal location link to marketplaces like OpenSea.
   - They will fetch the NFT metadata from LAOS via the public gateway or the `uloc://` protocol.

5. **Monitor Cross-Chain Tools**
   - Many third-party tools (explorers, indexers, or bridging services) are implementing universal location resolution.
   - Check the LAOS Foundation’s documentation or community resources for the latest integrations.

---

## Conclusion

By following these five steps—creating a collection, uploading assets to IPFS, minting, evolving, and broadcasting—you can fully leverage LAOS’s capabilities. The universal location system enables seamless cross-chain or cross-platform recognition of your NFTs, without relying on traditional bridging mechanisms.

**Happy building on LAOS!**
