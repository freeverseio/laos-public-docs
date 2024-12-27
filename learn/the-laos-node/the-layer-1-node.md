# The Layer-1 Node

The LAOS rust-based layer-1 node is developed in this [main open-source repository](https://github.com/freeverseio/laos).&#x20;

The quickest entry point to run your own LAOS Parachain node is by using Docker:

```
$ docker run freeverseio/laos-node:<release> --chain=<chain_name>
```

using  `chain_name = laos` / `chain_name = laos-sigma` for Mainnet / Testnet, correspondingly. Available releases published [here](https://github.com/freeverseio/laos/releases) can also be specified.



## Minimum Hardware Requirements

To run a LAOS node, the following minimum hardware specifications are recommended:

* **CPU**: 8 cores, at 3.00 GHz or higher per core;
* **RAM**: 16 GB;
* **Storage**: Minimum of 1 TB disk space.

