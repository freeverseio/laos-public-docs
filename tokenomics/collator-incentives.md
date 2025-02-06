# 🌐 Collator Incentives

**Collators are the cornerstone of the LAOS Parachain**, ensuring data availability, lack of censorship, and overall system robustness. While collators also validate transactions, the final validation of each block is ultimately confirmed by the Polkadot Relay Chain. Incentivization is crucial to attract and retain a competent set of collators.

To produce blocks, collators are incentivized via _collator incentives_ as well as _transaction fees_.  As detailed [here](inflation-and-fee-model.md), during the first two years, the main source of collator incentives will be paid out programmatically, upon block production, by a especifically allocated **sub-pool of the Community Incentives Pool,** originally set out to an approximate 7.5% of the total genesis supply annually. These incentives are allocated for the initial lease period of the parachain slot and inflationary tokens will be used for collator incentives once inflation begins after the first two years.

Collators retain a percentage of these rewards, which is initially set to 20%, and the rest is shared among those that delegated on them, proportionally to the amount delegated.

Additionally, _transaction fees_ will be allocated to the block producing collators, as a means to incentivize inclusion of transactions and disincentivize censorship.

With the current setting, these rewards are allocated between collators and delegators in a 20%/80% split. The tokens come from a 150M pool intended to last for at least two years (see [Token Distribution](token-distribution). As the third year approaches, governance may need to consider introducing inflation mechanisms if necessary.

**Important.** A [vote on August 14th, 2024](https://snapshot.org/#/laosnetwork.eth/proposal/0x21f60d2538a79e4c85f2f7700aa69ece05703fbffbf7b645c898fd72bcee3fda), reduced the 7.5% rate until collators could join permissionlessly, and the token was more broadly available, being listed on a CEX or DEX. This required the Network to implement several initial roadmap features, specifically: i) enabling permissionless transfers of the LAOS token, ii) enabling permissionless participation of collators, and iii) facilitating the acquisition of LAOS tokens on CEXs/DEXs. These milestones were reached towards the end of Q4 2024. The community, which voted to reduce the rate to 0.5% during this phase, has now the ability to call for a vote to potentially change the rate again.

