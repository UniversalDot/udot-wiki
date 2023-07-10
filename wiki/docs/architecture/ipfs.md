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

## IPFS Integration

Integrating IPFS within the UniversalDot application via the **ipfs-http-client** opens up new possibilities for decentralized and resilient data management. The **ipfs-http-client** is a library that provides a convenient HTTP interface to interact with IPFS nodes. By integrating this client into our front-end, the application gains the ability to interact with the IPFS network, leverage its features, and enhance the overall user experience.

With the integration of **ipfs-http-client**, UniversalDot can easily upload and retrieve files to and from the IPFS network. Users can securely store their files on IPFS, taking advantage of its distributed storage infrastructure and content-based addressing. This ensures that files are accessible even if the original hosting server becomes unavailable. By using IPFS for file storage, UniversalDot can also benefit from the inherent versioning and deduplication capabilities of IPFS. This allows users to track changes, revert to previous versions, and save storage space by eliminating redundant content.

Furthermore, integrating IPFS within UniversalDot via the **ipfs-http-client** can enable seamless sharing and collaboration among users. Files stored on IPFS can be easily shared by generating unique IPFS links that reference the content's hash. These links can be shared with others, enabling them to directly access and download the file from IPFS, regardless of their geographical location. This decentralized sharing approach eliminates the need for centralized servers and provides a more resilient and censorship-resistant method of content distribution. By leveraging IPFS's peer-to-peer network, UniversalDot can enhance collaboration and foster a more inclusive and accessible platform for its users.

## IPFS Design Document

For more details regarding integration, please refer to the official published [IPFS-Design Document](https://drive.google.com/file/d/1ov7jfAPMTuotbHRwTMIRvLKomt1c1e3f/view?usp=sharing). 