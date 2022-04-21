---
sidebar_position: 3
---

# React

## Overview

React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

## Integration with Substrate

Communication with Substrate Nodes happens via Polkadot JS API. The API provides application developers the ability to query a node and interact with the Polkadot or Substrate chains using Javascript.

The API is split up into a number of internal packages -
- @polkadot/api The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- @polkadot/api-derive Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via api.derive.*)
- @polkadot/metadata Base extrinsic, storage and constant injectors for injection
- @polkadot/rpc-core Wrapper around all JSON-RPC methods exposed by a Polkadot network client
- @polkadot/rpc-provider Providers for connecting to nodes, including WebSockets and Http
Type definitions for interfaces as exposed by Polkadot & Substrate clients - 
- @polkadot/types Codecs for all Polkadot and Substrate primitives
