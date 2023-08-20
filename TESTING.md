# Testing

## Manual Testing

Once I had a fucntioning game from start to finish with basic styling and structure in place, I send it out to friends and family to gather feedback. All feedback was positive and the game worked as expected and presented a challenge that kept people interested in playing.

## User Stories Testing

1. First Time User

| Test                                                                |                                                           Feature                                                           | Status |
| :------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------: | :----: |
| To have a clear guide on how to play the game.                      |                                   ![Hoe To Play](/assets/images/readmeImages/first-1.png)                                   | Passed |
| To have consistent ability to easily navigate around the site.      |                                   ![Nav Header](/assets/images/readmeImages/first-2.png)                                    | Passed |
| To have feedback on how they are scoring during and after the game. | ![In-game Score](/assets/images/readmeImages/first-3-a.png)<br>![End-game Score](/assets/images/readmeImages/first-3-b.png) | Passed |
| To find a responsive game that is easily playable on all devices.   |                          ![Multi-device View](/assets/images/readmeImages/multi-device-image.png)                           | Passed |

2. Returning User

| Test                                                              |                              Feature                               | Status |
| :---------------------------------------------------------------- | :----------------------------------------------------------------: | :----: |
| To be able to face a more challenging gaming experience.          |   ![Hard Game Screen](/assets/images/readmeImages/return-1.png)    | Passed |
| To be shown their score with the aim of improving.                |    ![End Game Score](/assets/images/readmeImages/return-2.png)     | Passed |
| To have a goal to aim towards to keep them returning to the game. | ![End Game Hard Message](/assets/images/readmeImages/return-3.png) | Passed |
| To be able to provide feedback to the game creators.              |    ![Contact Screen](/assets/images/readmeImages/return-4.png)     | Passed |

3. Site Admin

| Test                                                                                            |                               Feature                               | Status |
| :---------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------: | :----: |
| To be able to receive feedback from casual and regular players alike.                           | ![Email JS email received](/assets/images/readmeImages/admin-1.png) | Passed |
| To be able to easily update perameters; pairs of cards in each difficulty, game time limit etc. |     ![Game Parameters](/assets/images/readmeImages/admin-2.png)     | Passed |

## Code Validators

I ran the finished project files through the HTML and CSS validators and Javascript analyser.

### HTML

No errors or warnings were found in index.html.

![HTML Validator](/assets/images/readmeImages/html.png)

### CSS

No errors were found in style.css.

![CSS Validator](/assets/images/readmeImages/css.png)

### JavaScript

No errors were found in script.js. One undefined variable was found which came from the EmailJS function and did not effect the usability or functionality of the site.

![JS Hint Analysis](/assets/images/readmeImages/js-hint.png)

## Lighthouse

Once the project was completed, I ran it through the Chrome Dev Lighthouse tool on both Desktop and Mobile with high scores in all areas on both platforms.

- Desktop
  ![Lighthouse Desktop Scores](/assets/images/readmeImages/lighthouse-desktop.png)
- Mobile
  ![Lighthouse Mobile Scores](/assets/images/readmeImages/lighthouse-mobile.png)

[Back to README.md](README.md)
