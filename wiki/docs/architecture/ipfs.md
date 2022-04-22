---
sidebar_position: 5
---

# IPFS

## Overview


IPFS is a **peer-to-peer (p2p) storage network**. Content is accessible through peers located anywhere in the world who might relay information, store it, or do both. IPFS knows how to find what you ask for using its content address rather than its location.

There are **three fundamental principles** to understanding IPFS:
* Unique identification via content addressing
* Content linking via directed acyclic graphs (DAGs)
* Content discovery via distributed hash tables (DHTs)

These three principles build upon each other to enable the IPFS ecosystem.

IPFS is a natural fit for blockchain use cases. The common state of the chain is distributed on-chain among participants, and specific data is stored on IPFS. Thanks to content addressing, the blockchain only needs to store the IPFS multi hash, and users are sure to fetch correct data from any of their peers. This architecture is becoming the de facto standard for blockchain applications.

## Offchain::IPFS

offchain::ipfs allows you to account for your data transactions and DHT status in the blockchain. These on-chain insights can serve as a foundation for incentivized data storage and replication. This means no separate executable: both blockchain and distributed storage are together in one.

By including the **Rust implementation IPFS** in the native Substrate runtime, and by allowing pass-through wasm calls via Substrate's Off-chain Workers, we enable a powerful and familiar subset of the **IPFS APIs**, including
* ipfs add - Write data to IPFS
* ipfs cat - Read data from IPFS
* ipfs dht findpeer - Discover peers
* ipfs dht findprovs - Discover content
* ipfs swarm connect/disconnect - Swarm with other IPFS peers
* ipfs pin add / rm - Pin and unpin content