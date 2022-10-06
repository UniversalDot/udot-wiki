---
sidebar_position: 1
---

# Profiles

Profile is essential part of the application. Profile is used to create your onchain identity.

The Profile is used to enrich the AccountID information with user specific metadata such as **personal interests, name, reputation**, etc. Each User can create a single user profile per AccountID.

By creating a profile, you are broadcasting to the network your self-assigned username and interests. 

*Anyone is allowed to create a profile.*

![Profile](https://ipfs.io/ipfs/QmcSqZLbHUW3boymgxF7PqUp3KXWHjoZueKhLJ3F2Wew7C?filename=profile.png#center)

### Keys 

Before creating a profile, first you must create your own set of keys. 

The **public/private key pair** is how you authenticate your identity with the application. For more information on how to generate your keys, please refer to our [wallet](token/../../token/wallets.md) section.

We recommend the use of the *polkadot.js* chrome extension which automatically loads your keys into the application. An example of how your keys look like within the application is shown below.

![Account](https://ipfs.io/ipfs/QmR5CTTGG7wi1nHZeBVg7NQ85gkcRC7gZ9bLgswyJNVk7v?filename=Accounts.png#center)

### How To Create A Profile...

To create a profile is very straightforward. 

Just navigate to the Profile tab in the Menu bar and fill out your details.

You need to fill in some basic information such as:

- **Username**: The name under which you want to be known. (can be pseudonymous)
- **Interests**: Things you enjoy doing. Your interests will be used to recommend tasks and organizations to you.
- **Availability**: The amount of hours you are available per week.
- **Other Information**: Any other information you would want to share.

After writing your information, click on *Create Profile* button. You should receive a notification that your profile has been successfully created.

![Profile Creation](https://ipfs.io/ipfs/QmYhfzW7irRdki5yqKtGL7yMYXrrtaN3L5YgcGNCRptfTV?filename=Createprofile.png#center)
 
## How to update a profile

When you want to update your profile, simply navigate back to your profile 
page and input the new information. Once you are done editing, click the Save Changes button as shown below.

![Profile](https://ipfs.io/ipfs/QmUHSWJP4txcD2zpCjY6kJJjDDVxXy9jb2wSYgq5xn5FNu?filename=Update.png#center)


## How to delete a profile

To delete your profile and all its associated data, just click on the *Delete Profile* button.

![Profile](https://ipfs.io/ipfs/QmUHSWJP4txcD2zpCjY6kJJjDDVxXy9jb2wSYgq5xn5FNu?filename=Update.png#center)
## Profile Reputation

To ensure that every user acts with integrity, the system keeps track of reputation. Reputation is rewarded each time user contributes to a task, organization. Reputation is taken away when the user negatively contributes to previously established contracts. 

The following formula is used to calculate profile reputation when interacting with tasks.


![equation](https://latex.codecogs.com/svg.image?Reputation(s_{j})&space;=&space;\frac{\sum_{x=1}^{L}&space;(PersEval_{j}^{x})&space;*&space;C_{r}(x)}{\sum_{x=1}^{L}&space;C_{r}(x)})

where 
Reputation(sj) - the assessed reputation of sj as calculated by the service consumer and Cr(x) is the credibility of the service rater x as viewed by the service consumer. 

The credibility of a service rater lies in the interval [0,1] with 0 identifying a dishonest rater and 1 an honest one.

Source: https://www.researchgate.net/publication/220473549_RATEWeb_Reputation_Assessment_for_Trust_Establishment_among_Web_services

## Data Model of a Profile

| Characteristic  | Description                                                                | Type                                        | Entry             |
|-----------------|----------------------------------------------------------------------------|---------------------------------------------|-------------------|
| AccountID       | Primary ID for a profile. One profile per AccountID                        | Pub key                                     | Automatic         |
| Username        | Personal description of profile                                            | String                                      | Manual, Mandatory |
| Interests       | Personal interests of the user. Can incorporate skills, preferences, etc.  | Array of Strings                            | Manual, Mandatory |
| Reputation      | Score of points that the User has earned                                   | Number                                      | Automatic         |
| Balance         | Cryptocurrency balance in the native chain coin                            | Number                                      | Automatic         |
| Portfolio       | User can showcase personal portfolio, additional description, etc          | String (may contain list of IPFS documents) | Manual, Optional  |
| Availability    | Hours per week the User is Available                                       | Number (approx. Or list of 10hr,20hr,30hr)  | Manual, Mandatory |
| Profile History | Previous work history of the User                                          | Array of Tasks                              | Automatic         |





