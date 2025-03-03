# Broadcast

LAOS' Bridgeless Minting pattern is currently being integrated natively into marketplaces. To display these assets in marketplaces that are not yet compatible, a one-time minimal on-chain transaction is required on the chain where the ERC721 is managed.

This transaction, called "Broadcast," simply emits a standard transfer event, informing all marketplaces that index such events. The API allows broadcasting a large number of assets in a single transaction. The following example broadcasts two assets on a contract deployed on Polygon:

```graphql
mutation Broadcast {
  broadcast(
    input: {
    tokenIds: [
      "46231769497101023895754357762572931969783788518045090509665456129453327552117",
      "93666072995048189955115392031356951741507126618122077759684867447733822539334"]
    chainId: "137" 
    ownershipContractAddress: "0xc7471bab04d2f53f6e79c754e19fdbd1e5a4a3c3" 
    type: "SELF"
    }
) {
    tokenIds
    success
  }
}

```

**type (optional):**  "SELF" | "MINT" (default: "SELF").

Depending on the marketplace you’re targeting, you may need to use a specific type. Selecting the type `"MINT"` will produce transfer events where the sender (`from` parameter) is the null address. Selecting the type `"SELF"` will set `to` to the current owner, effectively simulating a transfer to themselves.

Expected response:

```graphql
{
  "data": {
    "broadcast": {
      "tokenIds": [
        "46231769497101023895754357762572931969783788518045090509665456129453327552117",
        "93666072995048189955115392031356951741507126618122077759684867447733822539334"],
      "success": true
    }
  }
}
```
