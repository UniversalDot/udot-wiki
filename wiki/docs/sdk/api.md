---
sidebar_position: 2
---

# API

We are exposing `typescript` based API which allows developers to interact with our nodes. 

## Install

A pre-requisite tool for interacting with our node is [ts-node](https://www.npmjs.com/package/ts-node).

You can install it with the following command:

```bash
npm i ts-node
```
then install all npm packages

```bash
npm install
```
Optionally, in order to verify that you can connect with our node, run:

```bash
npm run dev
```

## Import Provider

To run **console** in interactive mode, run:

```
npx ts-node -i
```
Then, we import api dependencies and connect with our node by running:
```javascript
import { ApiPromise, WsProvider } from "@polkadot/api";
const provider = new WsProvider("ws://109.235.70.27:9944");
const api = await ApiPromise.create({ provider });
```

After this, we are able to interact with the API via api variable.

## Example API calls

```javascript
(await api.query.profile.profileCount()).toJSON()
```
Returns the number of profiles.

```javascript
(await api.query.task.tasksOwned('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')).toJSON()
```
Returns the tasks owner by a specified address.

```javascript
 (await api.query.task.tasks.entries()).toString()
```
Returns all entries of Tasks
