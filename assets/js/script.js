// Variable for game data
let gameCards = [];

// Variables for game memory
let cardsToCheckId = [];
let cardsToCheckValue = [];

// Pairs of cards for each difficulty
const difficultyPairs = {
    "easy": 8,
    "medium": 10,
    "hard": 12,
    "extreme": 14
}

// Screens and containers
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");
const endScreen = document.querySelector(".end");
const contactScreen = document.querySelector(".contact");
const cardsBoard = document.querySelector(".cards-board");

// Buttons
const themeButton = document.querySelector(".theme");
const homeButtons = document.querySelectorAll(".title");
const contactButtons = document.querySelectorAll(".contact-button");
const difficultyButtons = document.querySelectorAll(".difficulty-buttons .button");

// Event Listeners
homeButtons.forEach((button) => button.addEventListener("click", showHomeScreen));
contactButtons.forEach((button) => button.addEventListener("click", showContactScreen));
difficultyButtons.forEach((button) => button.addEventListener("click", function(e) {
    let difficulty = e.target.id;
    createGame(difficulty);
}));

// Functions
// Show only home screen
function showHomeScreen() {
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.add("hidden");
}
// Show only game screen
function showGameScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.add("hidden");
}
// Show only end screen
function showEndScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    contactScreen.classList.add("hidden");
}
// Show only contact screen
function showContactScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.remove("hidden");
}
// Clear game data 
function clearGame() {
    gameCards = [];
    cardsBoard.innerHTML = "";
}
// Clear pair check memory
function clearMemory(){
    cardsToCheckId = [];
    cardsToCheckValue = [];
}
// Create and shuffle game cards from chosen difficulty 
function createGame(chosenDifficulty) {
    clearGame();
    clearMemory();
    let gamePairs = difficultyPairs[chosenDifficulty];
    // For loop creates two cards with same value but unique id's
    for (let i = 1; i <= gamePairs; i++) {
        let pair1 = {};
        pair1.id = i;
        pair1.value = i;

        let pair2 = {};
        pair2.id = i + gamePairs;
        pair2.value = i;

        gameCards.push(pair1, pair2);
    }
    // Fisher Yates shuffle method, learned through https://www.w3schools.com/js/js_array_sort.asp
    for (let i = gameCards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = gameCards[i];
        gameCards[i] = gameCards[j];
        gameCards[j] = k;
    }
    showGameScreen();
    renderCards();
}
// Render cards within game screen and adds event listeners for highlighting
function renderCards() {
    for (let i = 0; i < gameCards.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card-container");

        let cardFront = document.createElement("div");
        cardFront.classList.add("card", "front", "hidden");
        cardFront.innerHTML = gameCards[i].value;

        let cardBack = document.createElement("div");
        cardBack.classList.add("card", "back");
        cardBack.innerHTML = "?";
        cardBack.id = gameCards[i].id;

        cardsBoard.appendChild(card);
        card.appendChild(cardFront);
        card.appendChild(cardBack);

        addCardEvents(cardBack);
    }
}
// Adds showCard function to card passed when clicked
function addCardEvents(card) {
    card.addEventListener("click", showCard);
}
// Removes showCard function from card passed so it will not be turned when clicked
function removeCardEvents(card) {
    card.removeEventListener("click", showCard);
}
// Shows value on hidden side of card, populates game memory arrays
function showCard(e) {
    let cardBack = e.target;
    let id = cardBack.id;
    let cardFront = e.target.parentNode.querySelector(".front");
    let value = cardFront.innerHTML;

    cardBack.classList.toggle("hidden");
    cardFront.classList.toggle("hidden");

    cardsToCheckId.push(id);
    cardsToCheckValue.push(value);

    if(cardsToCheckValue.length === 2) {
        let unturned = document.querySelectorAll(".back");
        unturned.forEach((card) => removeCardEvents(card));
        setTimeout(checkCards, 300);
    }
}
// Checks cards saved to game memory for matching values
function checkCards() {
    console.log("CHECK!");
}