# SNAP!

SNAP! is a game where cards are displayed face down on a game board, players must look to uncover all pairs as quickly and in as little moves as possible.

The name SNAP! was chosen as both a nod towards the classic playing card pair matching game and also as a short sharp title to nicely reflect the quick nature of the game.

Incorporating multiple difficulties, SNAP! appeals to players of all ages and skill levels, from those looking for a quick and fun game to pass the time to those looking for a more challenging experience with the inclusion of an unlockable EXTREME bonus round.

As well as being a fun and challenging player experience, SNAP! also tests mental agility, requiring quick reactions and accurate memory whilst playing against the clock.

<!-- INSERT AM I RESPONSIVE IMAGE -->

[Click to view live site.](https://pawoods.github.io/project2/)

---

## Table of contents

- [UX](#ux)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
    - [Visual Design](#visual-design)
    - [Functional Components](#functional-components)
  - [Themes](#themes)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Icons](#icons)
  - [Features](#features)
    - [Current Features](#current-features)
    - [Future Features](#future-features)
- [Development](#development)
  - [Languages](#languages)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [User Stories Testing](#user-stories-testing)
  - [Code Testing](#code-testing)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
  - [Live Deployment](#live-deployment)
  - [Local Deployment](#local-deployment)
- [Credits](#credits)

---

## UX

As this project is very heavily reliant upon user interactions, the first consideration during the planning phase was how the site would both look and perform from a user perspective. I created the below user stories as a guide on what each would expect to find from the site in order to create a good overall user experience.

### User Stories

1. First time user would expect:

   - To have a clear guide on how to play the game.
   - To have consistent ability to easily navigate around the site.
   - To have feedback on how they are scoring during and after the game.
   - To find a responsive game that is easily playable on all devices.

2. Returning user would expect:

   - To be able to face a more challenging gaming experience.
   - To be shown their score with the aim of improving.
   - To have a goal to aim towards to keep them returning to the game.
   - To be able to provide feedback to the game creators.

3. Site administrator would expect:
   - To be able to receive feedback from casual and regular players alike.
   - To be able to easily update perameters.

### Wireframes

Prior to beginning coding, I used [Balsamiq](https://balsamiq.com/) to create wireframes, planning out both the functional components and visual design that I wanted to incorporate into the site on various device types.

#### Visual Design

For visual design wireframes on all device sizes, please see [WIREFRAMES.md](WIREFRAMES.md).

#### Functional Components

Alongside the wireframes for the visual design, I decided to create a wireframe mockup of how each screen within the site would link with eachother, including the planned end of game scenarios that could result from playing the game through to completion. This served as an initial guide on setting up the basic HTML, CSS, and JS structure of the project.

![Functionality flow](/assets/images/readmeImages/functionalityFlow.png)

### Themes

As one of the features was to be a light/dark mode theme toggle button, I wanted to use a colour pallette that was both complimentary and also added enough contrast to be able to be inverted in the dark mode while retaining the overall look of the site and the necessary contrast for ease of visibility.

#### Colours

This was the colour pallete I settled on, generated using [coolors.co](https://coolors.co/). This enabled me to begin with a light mode, using a white background, dark blue text and outlining and a bright contrast yellow for highlighting and then inverting these colours to create a dark mode so as not to strain the eyes while playing in the dark.

![Coolors Colour Pallette](/assets/images/readmeImages/coolors.png)

#### Fonts

With the title SNAP! in mind, this stylised title was input into [Google Fonts](https://fonts.google.com) to search for a font to use for the site titles, card backs and numbers. I settled on "Satisfy" as it brought a nice, cursive style to the site whilst also remaining fully readable. This was important to make the numbers as easy to read to maintain a positive user experience.

![Satisfy Font](/assets/images/readmeImages/satisfy.png)

For the remaining site text, I chose "Pathway Extreme" as it has a fairly spaced out, rounded style which nicely compliments the title font whilst also being easy to read in larger blocks of text.

![Pathway Extreme Font](/assets/images/readmeImages/pathwayExtreme.png)

#### Icons

Icons are used throughout the site using [Font Awesome](https://fontawesome.com/). These were especially useful when implementing the light/dark mode toggle as I could hide or show the sun/moon depending on the currently selected theme.

![Site Icons](/assets/images/readmeImages/icons.png)

A favicon is also included which matches the question mark used on the unturned cards within the game to keep the continuity of the site font and colours. This was created using [favicon.io](https://favicon.io/favicon-generator/).

![Site Favicon](/assets/images/favicon/android-chrome-192x192.png)

### Features

The site is made up of just one page with a consistent header and footer visible throughout the various screens. Each screen is shown or hidden depending on user interactions with buttons, or game ending scenarios. I decided to complete the project in this way to challenge my ability to manipulate the DOM with JS but also to make the experience as reactive as possible for users as a SPA (Single Page Application) eliminates loading times between pages.

#### Current Features

| Location          | Features                                                                                                                                                                                                                                                                                                                                                                                                                       | Screenshot                                                                                                              |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| Header & Footer   | 1. Stylised title logo that serves as a consistent home button across the site.<br>2. Light/dark theme toggle button.<br>3.Envelope logo which brings up the contact form page.<br>- Dark header showing dark icon moon logo.                                                                                                                                                                                                  | ![Header](/assets/images/readmeImages/headerFeatures.png)<br>![Dark Header](/assets/images/readmeImages/headerDark.png) |
| Footer            | 1. Social media links which each open in a new tab.                                                                                                                                                                                                                                                                                                                                                                            | ![Footer](/assets/images/readmeImages/footerFeatures.png)                                                               |
| Start Screen      | 1. Welcome title and brief description of the game.<br>2. "How to play" button which opens up a modal showing all game rules.<br>3. Difficulty selection section with distinct buttons for each of the regularly accessible difficulties.                                                                                                                                                                                      | ![Start Screen](/assets/images/readmeImages/startScreenFeatures.png)                                                    |
| How To Play Modal | 1. Title matching the clicked button text and bullet point list of game rules.<br>2. "X" close button to remove modal and return to screen underneath.                                                                                                                                                                                                                                                                         | ![How To Play Modal](/assets/images/readmeImages/howToPlayFeatures.png)                                                 |
| Game Screen       | 1. Timer with incrementing count in seconds counting towards the 30 seconds game time limit.<br>2. Score with incrementing count which adds 1 for each second and 1 for each attempt at making a pair.<br>3. Distinguishable game cards with the recognisable theme "?" and a box shadow present when hovered over.                                                                                                            | ![Game Screen](/assets/images/readmeImages/gameScreenFeatures.png)                                                      |
| End Screen        | 1. Win or lose message, depending on whether all pairs were found.<br>2. Personalised final score count.<br>3. Further encouragement/information message, depending on difficulty and win/lose/final score.<br>4. Extreme bonus round start button, only unlocked by completing hard mode with a score of 50 or less.<br>5. Home button to encourage continuation of the experience and be taken back to chosing a difficulty. | ![End Screen](/assets/images/readmeImages/gameEndFeatures.png)                                                          |
| Contact Screen    | 1. Message encouraging user interaction and simple, clear contact form requesting name, email, and feedback message.<br>2. Buttons to either submit or clear form. Submit button is differently coloured to further encourage user interaction.<br>3. Home button to once again, return the user to the start of the game once the form is submitted.                                                                          | ![Contact Screen](/assets/images/readmeImages/contactScreenFeatures.png)                                                |
| Submission Modal  | 1. Title matching the site theme text and message either confirming submission or letting user know of an error.<br>2. "X" close button to remove modal and return to screen underneath.                                                                                                                                                                                                                                       | ![Submission Modal](/assets/images/readmeImages/submissionFeatures.png)                                                 |

#### Future Features

Below are the features that I would like to add to this project in the future

1. A leaderboard, keeping high scores for each difficulty to give players a goal to aim for when playing.

2. A continuous play mode where completion of each level triggers the next level to begin with further card pairs added.

3. A free play mode that removes the time limit to give a more casual and relaxing gaming experience.

4. An automatic redirect within the form submission modal to take users directly back to the start screen.

---

## Development

### Languages

---

## Testing

### Manual Testing

### User Stories Testing

1. First Time User

| Test                                                                | Feature | Status |
| :------------------------------------------------------------------ | :-----: | :----: |
| To have a clear guide on how to play the game.                      |         |        |
| To have consistent ability to easily navigate around the site.      |         |        |
| To have feedback on how they are scoring during and after the game. |         |        |
| To find a responsive game that is easily playable on all devices.   |         |        |

2. Returning User

| Test                                                              | Feature | Status |
| :---------------------------------------------------------------- | :-----: | :----: |
| To be able to face a more challenging gaming experience.          |         |        |
| To be shown their score with the aim of improving.                |         |        |
| To have a goal to aim towards to keep them returning to the game. |         |        |
| To be able to provide feedback to the game creators.              |         |        |

3. Site Admin

| Test                                                                  | Feature | Status |
| :-------------------------------------------------------------------- | :-----: | :----: |
| To be able to receive feedback from casual and regular players alike. |         |        |
| To be able to easily update perameters.                               |         |        |

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

4. Bug found when `renderCards` function was called, it would add a new set of cards to the inner HTML of the cards board, not replacing the previous set.

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

| Source                                           | Use                                                                               |
| :----------------------------------------------- | :-------------------------------------------------------------------------------- |
| [Balsamiq](https://balsamiq.com/)                | Visual design and funtional component flow wireframes.                            |
| [Coolors](https://coolors.co/)                   | Creation of colour palette.                                                       |
| [Google Fonts](https://fonts.google.com/)        | "Satisfy" and "Pathway Extreme" fonts across entire site.                         |
| [Font Awesome](https://fontawesome.com/)         | Icons across entire site. "sr-only" class for use of screen reader only elements. |
| [Favicon](https://favicon.io/favicon-generator/) | Creation of stylised favicon.                                                     |
