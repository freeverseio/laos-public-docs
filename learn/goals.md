# Goals & Vision

LAOS is the first Layer 1 blockchain connected to Ethereum, Polygon, BSC, Base, L2s in general, and any EVM-compatible chains **without bridges**, aiming to become the protocol used by major ecosystems to offload **more than 20% of all transactions**, eliminating the need for insecure bridges or wrapped currencies.

Offloading through LAOS' [Bridgeless Pattern](./bridgeless-minting-intro.md) is a novel process where **gas fees for certain types of transactions are paid within the LAOS consensus system**, while the created assets remain on the blockchain of choice, ensuring they are accessible where liquidity resides. Using this pattern, **games** and **Real World Assets applications** can scale **without forcing users to migrate away from main ecosystems, use bridges, or wrap currencies**. 

<figure><img src="/img/laos-connect.png" alt=""></img><figcaption></figcaption></figure>

In other words, LAOS enables the [heavily underutilized bandwidth of Polkadot](https://polkadot.com/spammening) to be leveraged for scaling highly congested blockchains, without the need for bridges.


## Bridgeless and Security

Since LAOS is used to scale other blockchains, it is natural to compare it to current **Layer-2 (L2) solutions**, such as those operating on Ethereum. The latter **pay a severe price in security and centralization** due to their reliance on **bridges**.  

Check the excellent work by [L2Beat](https://l2beat.com/scaling/risk) in monitoring these trade-offs, and you’ll find—across all major L2s—one or more of the following issues:
*"Only a handful of whitelisted actors can submit transactions."*, *"User withdrawals can be censored by the permissioned operators"*, *"There is no way to verify the system"*,
*"Proof construction relies fully on data that is NOT published on-chain"*, *"Data depends on a Data Availability Committee with a threshold of 5/7."*  

In sharp constrast, with Bridgeless Minting, no bridge needs to be maintained. [No extra trust assumptions](https://github.com/freeverseio/laos-whitepaper/blob/main/laos.pdf) are required. **No separate infrastructure** is needed. DApps only need access to **both consensus systems** (e.g., Ethereum and LAOS), without relying on anyone to maintain additional off-chain components.  

Since bridges are eliminated, one key question remains for users and developers wanting to scale Ethereum: *How secure is LAOS itself?*. This is where **Polkadot** plays a crucial role. As a **Parachain on Polkadot**, LAOS **inherits all the security guarantees of the Polkadot network**. On the one hand, every **single transaction** processed on LAOS is verified by **Polkadot's relay chain validators**. Including a **malicious transaction** on LAOS would require **hacking one of the most secure blockchains**, rivaled only by **Bitcoin and Ethereum**. 

On the other hand, **Data Availability** is enforced by Polkadot’s architecture, meaning **data is available by construction** and can be fetched permissionlessly, for example, by anyone running a permissionless node.  

## Bridgeless and User Experience


For users, no bridges means a seamless experience, a major improvement over onboarding onto an L2: all assets minted via Bridgeless Minting are **immediately available** on the chosen chain.  

For example, when scaling **Ethereum**, minted assets can appear in MetaMask like any other ERC721 token, can be traded on OpenSea, and can be used in Ethereum’s DeFi ecosystem (e.g., lending, staking).  

Users don’t need to learn about **wrapped currencies** or deal with sites offering bridging currencies. They don’t even need to know that LAOS was involved in the minting process.  

For developers, [LAOS is fully EVM-compatible](../evm/introduction), meaning they can keep using familiar tools like Hardhat, MetaMask, and Web3 libraries without learning new frameworks.  

