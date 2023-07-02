# Title

---
## Table of contents
- [Design](#design)
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
## Design

### User Stories

#### Current Features

#### Future Features

### Wireframes

#### Functional Components

#### Visual Design

### Themes

#### Colours

#### Icons

## Development

### Languages

## Testing

### Manual Testing

### Bugs

#### Fixed Bugs
1. Bug found where calling any show**Screen function would hide the contact button in the header.
- Fixed by changing the class name from "contact" to "contact-button" as the contact screen had the class "contact".
---
2. Bug found where calling createGame would give an error when selecting "medium" difficulty but not on any other.
- Fixed by removing an accidental space found in "medium" button id.
---
3. Bug found where half the cards created within createGame function were given an id but weren't given a value.
- Fixed by identifying that the id had been set twice on the first card of each pair instead of an id and a value. pair1.id changed to pair1.value.
---
4. Bug found when renderCards function was called, it would add a new set of cards to the inner HTML of the cards board.
- Fixed by adding a clearing line of code within clearGame function to set innerHTML to "".
---


#### Unfixed Bugs

## Deployment

### Live Deployment

### Local Deployment

## Credits