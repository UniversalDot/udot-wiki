---
sidebar_position: 1
---

# Architecture

This documents describes the major components of the software solution. These include:
- Substrate


## Substrate

Substrate was created by pioneers and veterans of the blockchain industry who set out to overcome the limitations of previous-generation blockchain networks. It was born from the vision that developers shouldn't have to recreate
fundamentals when building and optimizing a blockchain. As such it provides the needed tooling to quickly create decentralized applications.

### Main Features

- Flexible - a fully modular blockchain framework that unleashes developers instead of forcing them to work within the confines of others' design decisions.
  - Forkless: Substrate-based nodes take a different approach that enables automatic upgrades, no user intervention is required. 
  - Fast: Transaction latency can be alleviated through configurable block times, flexible transaction queues, and/or horizontal scaling. Transaction fees are configurable even to the point of feeless transactions.
- Open - uses familiar open protocols such as libp2p and JSON-RPC while letting the developer decide how much they want to customize their architecture.
  - Tooling: Great tooling enables faster development, deployment, and debugging. Not only does Substrate have comprehensive, high-quality tooling, it also enables developers to use tooling developed by others, since everything is based on the same underlying framework.
  - Community: Substrate has a large, active, and extremely helpful builder community. Many of the pallets have been created by the community itself.
 - Interoperable - Developers are often forced to make tradeoffs between compatibility, security, and efficiency to interact with data that exists off-chain and cross-chain. This has led to the creation of bridges, oracles, and other interoperability protocols, all with their own limitations.
    - Compatible: Substrate-based blockchain networks have the choice of either operating as a solo chain, a solo chain with a bridge, or integrating as a parachain. Integrating as a parachain enables independent Substrate-based blockchains to gain interoperability with the other independent blockchains. The secret sauce of parachain interoperability lies in XCMP (Cross-Chain Message Passing).
    - Secure: Substrate chains can inherit security from Substrate-based relay chains like Polkadot or Kusama. As a result, even a small blockchain network can gain billions of dollars in security guarantees.
    - Efficient: Because of Substrate’s modularity, gas is completely optional, and the introduction of off-chain features greatly reduces computation and storage costs.
- Future-proof - Blockchain technology is evolving at a rapid pace and has spurred innovation in other areas such as zero-knowledge, consensus mechanisms, cryptographic libraries, and much more. It's challenging enough to keep up with technology let alone integrate it. Substrate enables your blockchain to assimilate new technology as it comes along.
  - Upgradable: With any structure, the foundation is often the most difficult part to modify, and thus upgrade. For this reason, Substrate's base has intentionally been built on an extremely simple and unchanging foundation using the widely-accepted open protocol WebAssembly.
  - Composable: As a core design principle, composability enables developers to build a blockchain comprised of components specific to their needs on a battle-tested framework.
  - Adaptable: An ever-growing number of pallets are available, created by both Parity Technologies and the community. These can be combined in many combinations to fit the needs of the desired use case. 

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
