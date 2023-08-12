# SNAP!

SNAP! is a game where cards are displayed face down on a game board, players must look to uncover all pairs as quickly and in as little moves as possible.

Incorporating multiple difficulties, SNAP! appeals to players of all ages and skill levels, from those looking for a quick and fun game to pass the time to those looking for a more challenging experience with the inclusion of an unlockable EXTREME bonus round.

As well as being a fun and challenging player experience, SNAP! also tests mental agility, requiring quick reactions and accurate memory whilst playing against the clock.

<!-- INSERT AM I RESPONSIVE IMAGE -->

[Click to view live site.](https://pawoods.github.io/project2/)

---

## Table of contents

- [UX](#ux)
  - [User Stories](#user-stories)
    - [Current Features](#current-features)
    - [Future Features](#future-features)
  - [Wireframes](#wireframes)
    - [Functional Components](#functional-components)
    - [Visual Design](#visual-design)
  - [Themes](#themes)
    - [Colours](#colours)
    - [Icons](#icons)
- [Development](#development)
  - [Languages](#languages)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
  - [Live Deployment](#live-deployment)
  - [Local Deployment](#local-deployment)
- [Credits](#credits)

---

## UX

### User Stories

#### Current Features

#### Future Features

### Wireframes

Prior to beginning coding, I used Balsamiq to create wireframes, planning out both the functional components and visual design that I wanted to incorporate into the site on various device types.

#### Functional Components

#### Visual Design

For visual design wireframes on all device sizes, please see [WIREFRAMES.md](WIREFRAMES.md).

### Themes

#### Colours

#### Icons

---

## Development

### Languages

---

## Testing

### Manual Testing

### Code Testing

For all code testing, please see [TESTING.md](TESTING.md).

### Bugs

During the coding process, I made sure to test each new addition to the functionailty through Chrome Dev Tools. I made a note of any bugs found and the measures implemented to fix them below.

#### Fixed Bugs

1. Bug found where calling any `showScreen` function would hide the contact button in the header.

   - Fixed by changing the class name from `"contact"` to `"contact-button"` as the contact screen had the class `"contact"`.

2. Bug found where calling `createGame` would give an error when selecting `"medium"` difficulty but not on any other.

   - Fixed by removing an accidental space found in `"medium"` button id.

3. Bug found where half the cards created within createGame function were given an id but weren't given a value.

   - Fixed by identifying that the id had been set twice on the first card of each pair instead of an id and a value. `pair1.id` changed to `pair1.value`.

4. Bug found when `renderCards` function was called, it would add a new set of cards to the inner HTML of the cards board, not relacing the previous set.

   - Fixed by adding a clearing line of code within `clearGame` function to set innerHTML to and empty string.

5. Bug found where current tries count wasn't reset when a new game was restarted.

   - Fixed by resetting `currentTries` variable to `0` within `clearGame` function.

6. Bug found where interval would be set twice within `startTimer` function, incrementing the seconds count twice as quickly as intended.

   - Fixed by declaring the `timeInterval` variable globally and clearing the interval before setting it within the `startTimer` function.

#### Unfixed Bugs

There are no unfixed bugs that I am aware of.

---

## Deployment

### Live Deployment

The site was deployed to Github pages using the following steps to deploy:

1. From the [GitHub Repository](https://github.com/pawoods/project2), select the "Settings" option.
2. In the "Code and Automation" section, choose the "Pages" option.
3. Select "Deploy from a branch" from the "Source" menu.
4. Select "Main" from the "Branch" menu.
5. Click "Save" to confirm, the page will then be deployed.

Link to live site - https://pawoods.github.io/project2/

### Local Deployment

To access this [GitHub Repository](https://github.com/pawoods/project2) locally, you can follow the below guides to either clone or fork the repo.

#### Cloning

Cloning this repository will pull down a full copy to a local computer or remote virtual machine within a codespace. You can then `push` or `pull` your own or other users changes to the original repo. To clone this repo, follow the below step by step instructions:

1. Navigate to the [GitHub Repository](https://github.com/pawoods/project2) for this project.
2. Click the `<> Code` button above the list of files.
3. Chose whether to clone using HTTPS, SSH, or GitHub CLI and copy the URL.
4. Open Git Bash or Terminal.
5. Change the current working directory to the location where you want the cloned repo.
6. Use the `git clone` command followed by the copied URL.
   ```
   git clone https://github.com/pawoods/project2.git
   ```
7. Press enter to create your local clone.

### Forking

Forking this repository will create a parallel version in your own GitHub account, allowing changes to be made with no change to the original repo. To fork this repo, follow the below step by step instructions:

1. Navigate to the [GitHub Repository](https://github.com/pawoods/project2) for this project.
2. Click `Fork` button in top right under main navigation bar.
3. A copy of this repo should now exist in your GitHub account.

---

## Credits
