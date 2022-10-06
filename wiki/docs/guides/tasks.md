---
sidebar_position: 2
---

# Tasks

### Overview

Users can interact with one another through Tasks.

There are two types of Users who can interact with tasks. We call them Initiators and Volunteers.

* Initiators are people who have the permission to Create Tasks.
* Volunteers are people who have the permission to Complete Tasks.

Anybody can become an Initiator or Volunteer. In other words, one doesn’t need permission to become an Initiator or Volunteer.


![Task](https://ipfs.io/ipfs/QmWVYPFZCbymXztFM83H8nxSoxyFjRPegLsMZ2a47kT6G7?filename=tasks.png#center)




### How To Create a Task

To create Task is navigate to the `Organization` tab in the Menu and then select `Tasks` in the sub-menu. From there just click the `Create Task` button. 

When Tasks are created, there is some associated metadata that shall be defined. This includes the following:

- **Title** - The title of the task
- **Specification** - Detailed specification of what is needed for the task.
- **Budget** - Assigned budget to the task. Once the task is created, the budget fund are reserved into an escrow which is released upon task completion.
- **Deadline** - The specified time until which the task should be completed.
- **Attachments** - Optional attachments and files that further help define the task.
- **Keywords** - Keywords that summarized the task in few words.


See below the window used to create a task.

![Task](https://ipfs.io/ipfs/QmRtrWuf23v8HDHtC2DknRnPUsXJALgemdX3vSqYEf1E2M?filename=Create_Task.png#center)


## How to Start A Task

To start a task, navigate to the Dashboard menu. There you will see a list of task recommended to you based on your profile information. 

Once you find a task that you would like to work on, just click on the top left corner toast icon. This will prompt you for an action to start a task. See image below. 

![Task](https://ipfs.io/ipfs/QmTyXQpR432PXM4QUVf2JnW4itm1SdWRrydrvFtwDK6MJC?filename=StartTask.png#center)

## How to Complete A Task

To complete a task, first navigate to your Dashboard. From there, find the task that you wish to complete. 

Click on the action to complete a task. After the completion, you should see a notification that the task completion was successful. 

Also, the tasks status should turn green with status `Completed`. 

![Task](https://ipfs.io/ipfs/QmTyXQpR432PXM4QUVf2JnW4itm1SdWRrydrvFtwDK6MJC?filename=StartTask.png#center)

## How to Update A Task

To update an already created and existing task, navigate to the Organization tab and then select Tasks from the sub-menu.

In the list of tasks, find the task you wish to update and click the Update action. See image below as an example.

![Task](https://ipfs.io/ipfs/QmTjnrcJhbv8uCvRCCxsieg366AniY4A4qgGRC7gQURc29?filename=UpdateTask.png#center)

## How to Remove A Task

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