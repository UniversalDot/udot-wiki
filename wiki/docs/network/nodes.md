---
sidebar_position: 1
---

# Nodes

Nodes are decentralized systems that provide compute resources that keep the network running. 

Nodes provide computational resources that process transactions and store data.

## Setup a Node

There are two types of Nodes:
- Full Node: Contains the complete technology stack.
- Light Node: Contains a limited set of essential components to run the application.
  
For detail steps on how to deploy your own Full of Light node, please refer to the [Deployment](sdk/deployment.md) Page.

## Connect to a Node

In cases you are running a Light Node, there are some configuration parameters that might need to be configured for the application to connect correctly. 

```js title="configuration parameters"
IPFS CLUSSTER = {HOST IP}
SUBSTRATE = {HOST IP}
TENSORFLOW = {HOST IP}
```
## Validator

As a validator, you can provide computing resources to the application. The recommended spec for running a validator are the following:

```
CPU - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
Storage - An NVMe solid state drive of 1 TB (As it should be reasonably sized to deal with blockchain growth).
Memory - 64GB ECC.
```

For a step-by-step guide on how to setup your own validator, please refer to the [Deployment](sdk/deployment.md) page

