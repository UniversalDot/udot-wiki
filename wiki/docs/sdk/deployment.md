---
sidebar_position: 1
---

# Deployment

The UDOT Application exists and can be deployed in two version.  

## Full Node

A Full Node contains all application components in a single node locally. 

As such it contains the following:
- Substrate Node
- IPFS Cluster
- IPFS Node
- Tensorflow Serving
- dApp Front-end Application

All these components are deployed locally, and connect to external full nodes.

To install a Full Node, please follow these [instructions](docker.md). 

## Light Node

A Light Node contains only essential components locally.

These include:
- IPFS Node
- dApp Front-end Application

The Light Node connect with external Full nodes via REST to enable additional functionality.

To install a Light Node, please follow these [instructions](docker.md). 

### Ansible

We also provide deployment of a blockchain Node via Ansible. 

For instructions on how to install and setup Ansible playbook, please refer to our [Ansible](https://github.com/UniversalDot/ansible) Github repository.