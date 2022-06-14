---
sidebar_position: 3
---

# Organizations

### Overview

The DAO organizes People with a common Vision to work on projects. The DAO works as an extension to the Task module since it enables the creation of large projects which collect many tasks.

A visionary user is able to propose a Vision for the future. Within the vision, a specified Roadmap is created that is broken down into tasks. Thus a DAO is a collection of tasks who are undertaken by people that believe in the vision of the Founder.

Users support a Vision by signing a vision document. Signing a vision document enables users to be added to a DAO where they will be able to create/fulfill tasks in support of the overall vision.

For completion of tasks, users are rewarded tokens and increased reputation.

### How To Create An Organization (DAO)

To create your own DAO navigate to the `Organization` tab in the menu and then click on `Own organization`. Here you will be given several action options which include the following

* Create Vision
* Remove Vision
* Create Organization
* Remove Organization
* Add member
* Remove members
* Add task
* Remove task

Clicking on `Create organization` open a modal dialog where you can fill out organizational details.

See example in the image below.

![Task](https://i.imgur.com/U1UW4mW.gif)

## Data Model of a Organization

| Characteristic | Description                                                                                                                             | Type                           | Entry                |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|
| ID             | Unique identifier for an organization                                                                                                   | UUID or similar                | Automatic            |
| Name           | The name of the organization                                                                                                            | String                         | Manual, Mandatory    |
| Description    | Basic description regarding the organization, industry, and goals                                                                       | String                         | Manual, Optional     |
| Owner          | The account that owns the organization. The initial owner is the founder. Ownership should be able to be transferred to other accounts. | Account ID                     | Automatic, Mandatory |
| Vision         | Document that describes company Vision                                                                                                  | String (Hash to IPFS Document) | Manual, Mandatory    |
| Members        | Members that belong to an organization                                                                                                  | Array of AccountID             | Manual, Mandatory    |
| Tasks          | Tasks that belong to a certain Organization                                                                                             | Array of TaskID                | Manual, Mandatory    |
| Applicants     | Users that have applied to join to a certain organization                                                                               | Array of AccountID             | Automatic            |
| Created        | The date when the organization was created                                                                                              | DateTime, Block                | Automatic            |
| LastUpdated    | The date when the organization had an update                                                                                            | DateTime, Block                | Automatic            |
| Properties     | Custom collection of properties that can be added.                                                                                      | An array of Objects            | Manual, Optional     |
|                |                                                                                                                                         |                                |                      |
|                |                                                                                                                                         |                                                          |                      |

