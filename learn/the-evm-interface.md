# The EVM Interface


LAOS is a fully EVM-compliant blockchain. Its node is written in Rust using the Substrate framework, which enhances both performance and security. On top of this Rust foundation, the node exposes a standard Ethereum-compatible interface, allowing DApps familiar with EVM blockchains to seamlessly integrate with LAOS by simply connecting to the appropriate RPC endpoints.

Refer to the [Resources](../introduction/laos-and-its-testnet) section for details on public RPC nodes and chain IDs.

### Multi-Faceted Usage of LAOS

1. **Standard EVM Development**:  
   EVM developers can deploy their smart contracts on LAOS, interacting with the chain just as they would on Ethereum.

2. **Expanded EVM with Precompiled Contracts**:  
   LAOS extends the EVM with precompiled contracts that interface directly with protocol-optimized functionalities. These include scaling NFT-related operations on other chains, such as creating NFT collections, Bridgeless Minting, asset evolution, and more. These precompiles appear as regular contracts on hardcoded addresses.

3. **Substrate Functionality**:  
   Substrate users can interact with the broader chain functionalities using standard Polkadot tools. Use cases include participating in on-chain governance, staking, delegating, and more.

The EVM and precompiled contract design in LAOS leverages innovations by platforms such as [Moonbeam](https://docs.moonbeam.network/builders/pallets-precompiles/precompiles/) and [Astar](https://docs.astar.network/docs/build/EVM/precompiles/).

For comprehensive details on the EVM specification and usage, see [the EVM section](../../evm/introduction).
