---
sidebar_position: 1
---

# Profiles

Profile is essential part of the universaldot.me application. 

 The Profile is used to enrich the AccountID information with user specific metadata such as personal interests, name, reputation, etc. Each User can create a single user profile per AccountID.

By creating a profile, you are broadcasting to the network your self-assigned username and interests. Anyone is allowed to create a identity.


### Keys 

Before creating a profile, first you must create your own set of keys. 

The public/private key pair is how you authenticate your identity with the application. For more information on how to generate your keys, please refer to our [wallet](token/../../token/wallets.md) section.

We recommend the use of the chrome extension which automatically loads your keys into the application. An example of how your keys look like within the application is shown below.

![Account](https://ipfs.io/ipfs/QmR5CTTGG7wi1nHZeBVg7NQ85gkcRC7gZ9bLgswyJNVk7v?filename=Accounts.png)

### How To Create A Profile...

To create a profile is very straightforward. 

Just navigate to the Profile tab in the Menu bar and fill out your details. 

See the image bellow as an example.

![Profile Creation](https://ipfs.io/ipfs/QmcSqZLbHUW3boymgxF7PqUp3KXWHjoZueKhLJ3F2Wew7C?filename=profile.png)

### Profile Reputation

To ensure that every user acts with integrity, the system keeps track of reputation. Reputation is rewarded each time user contributes to a task, organization. Reputation is taken away when the user negatively contributes to previously established contracts. 

The following formula is used to calculate profile reputation when interacting with tasks.


![equation](https://latex.codecogs.com/svg.image?Reputation(s_{j})&space;=&space;\frac{\sum_{x=1}^{L}&space;(PersEval_{j}^{x})&space;*&space;C_{r}(x)}{\sum_{x=1}^{L}&space;C_{r}(x)})

where 
Reputation(sj) - the assessed reputation of sj as calculated by the service consumer and Cr(x) is the credibility of the service rater x as viewed by the service consumer. 

The credibility of a service rater lies in the interval [0,1] with 0 identifying a dishonest rater and 1 an honest one.

Source: https://www.researchgate.net/publication/220473549_RATEWeb_Reputation_Assessment_for_Trust_Establishment_among_Web_services 


## How to update a profile


## How to delete a profile


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





