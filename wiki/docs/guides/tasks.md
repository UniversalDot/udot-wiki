---
sidebar_position: 2
---

# Tasks

### Overview
Users can interact with one another through Tasks.

There are two types of Users who can interact with tasks. We call them Initiators and Volunteers.

* Initiators are people who have the permission to Create and Remove Tasks.
* Volunteers are people who have the permission to Start and Complete Tasks.

Anybody can become an Initiator or Volunteer. In other words, one doesn’t need permission to become an Initiator or Volunteer.

When Tasks are created, there is some associated metadata that shall be defined. This includes the following:

* Task Title
* Task Specification (Defining the Task specification)
* Task Budget (The cost of completion for the Task)
* Task Deadline (The specified time until which the task should be completed)
Furthermore, budget funds are locked in escrow when task is created. Funds are removed from escrow when task is removed.

### How To Create a Task

To create Task is navigate to the `Organization` tab in the Menu and then select `Dao Kanban` in the sub-menu. This will a kanban Board. From there just click the `Add new task` button. 

See below for reference.

![Task](https://i.imgur.com/MGBufFQ.gif)


## How to Update A Task



## How to Delete A Task

## Data Model of a Task

| Characteristic | Description                                                                                                  | Type                                               | Entry             |
|----------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-------------------|
| TaskID         | Unique Identifier for each task                                                                              | Hash                                               | Automatic         |
| Title          | Task Title that describes the task                                                                           | String                                             | Manual, Mandatory |
| Requirements   | Definition that specifies the requirements of the task                                                       | String (RichTextEditor?: JSON-Strigify)            | Manual, Mandatory |
| Budget         | The budget for a task                                                                                        | Number                                             | Manual, Mandatory |
| Deadline       | Expected end time for the task                                                                               | Datetime                                           | Manual, Mandatory |
| Attachments    | Additional information that is relevant to a task.                                                           | File (Referenced by IPFS Hash)                     | Manual, Optional  |
| Keywords       | Few words used to filter the task (mainly used for the recommendation)                                       | Array of Strings                                   | Manual, Optional  |
| Feedback       | Comments that are added to the task. Intermediary steps of communication between the initiator and volunteer | String                                             | Manual, Optional  |
| Initiator?     | The User who created the task                                                                                | AccoundID                                          | Automatic         |
| Volunteer?     | The User who Volunteered for the task                                                                        | AccountID                                          | Automatic         |
| CurrentOwner   | The user who currently is working on the task and thus has ownership of it.                                  | AccountID                                          | Automatic         |
| Related        | Group of tasks that are related to the current task.                                                         | List of Tasks                                      | Manual            |
| Status         | The current status of the task                                                                               | Enum [Created, InProgress, Closed] To be expanded? | Automatic         |
| Created        | The time the task was created                                                                                | DateTime                                           | Automatic         |
| LastUpdated    | Time when the task has been updated                                                                          | DateTime                                           | Automatic         |
| Completed      | Time when the task was completed                                                                             | DateTime                                           | Automatic         |