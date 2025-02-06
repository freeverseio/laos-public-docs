# Introduction

The metadata of an asset is normally assigned during the minting process, and is fully determined by the asset creator. If the NFT has evolving features, the metadata can be modified, usually by changing the IPFS address in an on-chain TX, or in less secure flows, by altering the content returned by private servers.

There exist several proposals, implementations, and patterns, that allow the original creator to grant other accounts permission to determine the metadata during the mint process, or to modify it afterwards.

These approaches are not standardised, and often result in cumbersome flows with multiple (sometimes a large number of) on-chain transactions required.



<figure style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "auto" }}>
  <img src="/img/dame.avif" alt="universal" width="247" />
  <figcaption></figcaption>
</figure>
The LAOS project introduces the concept of **Decentralized Asset Metadata Extensions** (DAME), drawing from the philosophy of the well-known Decentralized ID (DID) pattern.

In DAME, the asset creator is viewed as one of the accounts that describes what an asset is. It's akin to an account making a claim about itself: _"I am ..."_. Of course, in the context of an NFT, the metadata provided by the asset creator stands out as the most relevant one.

However, DAME allows every web3 account to permissionlessly add metadata to any asset, in any blockchain. In a DID context, it is the equivalent of an account making claims about another account. As with DID, each DApp and user decides how much relevance to give to the metadata extensions made by different web3 accounts.

With DAME, every extension of an asset's metadata is recorded on-chain, along with the account that made the extension. Once created, the extension can be updated only by the corresponding account,  leaving an on-chain trace, as usual.

With Universal Location, LAOS enables extensions for any asset located on any chain. DApps, marketplaces and games, can permissionlessly query about extensions available for any asset they display to their users.   
