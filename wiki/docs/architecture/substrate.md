---
sidebar_position: 2
---

# Substrate

Substrate was created by pioneers and veterans of the blockchain industry who set out to overcome the limitations of previous-generation blockchain networks. It was born from the vision that developers shouldn't have to recreate
fundamentals when building and optimizing a blockchain. As such it provides the needed tooling to quickly create decentralized applications.

### Main Features

- **Flexible** - a fully modular blockchain framework that unleashes developers instead of forcing them to work within the confines of others' design decisions.
  - **Forkless**: Substrate-based nodes take a different approach that enables automatic upgrades, no user intervention is required. 
  - **Fast**: Transaction latency can be alleviated through configurable block times, flexible transaction queues, and/or horizontal scaling. Transaction fees are configurable even to the point of feeless transactions.
- **Open** - uses familiar open protocols such as libp2p and JSON-RPC while letting the developer decide how much they want to customize their architecture.
  - **Tooling**: Great tooling enables faster development, deployment, and debugging. Not only does Substrate have comprehensive, high-quality tooling, it also enables developers to use tooling developed by others, since everything is based on the same underlying framework.
  - **Community**: Substrate has a large, active, and extremely helpful builder community. Many of the pallets have been created by the community itself.
 - **Interoperable** - Developers are often forced to make tradeoffs between compatibility, security, and efficiency to interact with data that exists off-chain and cross-chain. This has led to the creation of bridges, oracles, and other interoperability protocols, all with their own limitations.
    - **Compatible**: Substrate-based blockchain networks have the choice of either operating as a solo chain, a solo chain with a bridge, or integrating as a parachain. Integrating as a parachain enables independent Substrate-based blockchains to gain interoperability with the other independent blockchains. The secret sauce of parachain interoperability lies in XCMP (Cross-Chain Message Passing).
    - **Secure**: Substrate chains can inherit security from Substrate-based relay chains like Polkadot or Kusama. As a result, even a small blockchain network can gain billions of dollars in security guarantees.
    - **Efficient**: Because of Substrate’s modularity, gas is completely optional, and the introduction of off-chain features greatly reduces computation and storage costs.
- **Future-proof** - Blockchain technology is evolving at a rapid pace and has spurred innovation in other areas such as zero-knowledge, consensus mechanisms, cryptographic libraries, and much more. It's challenging enough to keep up with technology let alone integrate it. Substrate enables your blockchain to assimilate new technology as it comes along.
  - **Upgradable**: With any structure, the foundation is often the most difficult part to modify, and thus upgrade. For this reason, Substrate's base has intentionally been built on an extremely simple and unchanging foundation using the widely-accepted open protocol WebAssembly.
  - **Composable**: As a core design principle, composability enables developers to build a blockchain comprised of components specific to their needs on a battle-tested framework.
  - **Adaptable**: An ever-growing number of pallets are available, created by both Parity Technologies and the community. These can be combined in many combinations to fit the needs of the desired use case. 

## UDOT Addition to Substrate

Substrate is built using **FRAME** which is an extensible framework that composes pallets to create the initial blockchain infrastructure. The Framework for Runtime Aggregation of Modularized Entities (FRAME) is a set of modules and support libraries that simplify runtime development. In Substrate, these modules are called Pallets, each hosting domain-specific logic to include in a chain's runtime. 

UDOT application incorporates many of these Pallets within its runtime. Reusing these pallets enables faster development time, shared security, and communication with other parachains.

At the highest level of abstraction, Substrate has been used within the UDOT application to enable the decentralization and trust features. Many of the composable pallets have been used as-is and we benefit from the added security of the Polkadot and Kusama Ecosystem. 

Few layers of custom business logic are developed by the UniversalDot Foundation which enables the creation of profiles, tasks,  and DAOs. This functionality is developed through pallets which is a composite unit of work within the Substrate Framework.  



