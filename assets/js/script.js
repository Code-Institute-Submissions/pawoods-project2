//Variable for game data
let gameCards = [];

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
// Create and shuffle game cards from chosen difficulty 
function createGame(chosenDifficulty) {
    clearGame();
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
        card.id = gameCards[i].id;
        card.innerHTML = `<div class="card back">?</div>
                        <div class="card front hidden">${gameCards[i].value}</div>`;
        cardsBoard.appendChild(card);
    }
}