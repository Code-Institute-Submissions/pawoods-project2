// Global variables
// Variable for game data
let gameCards = [];
let matchedPairs = [];
let currentTries = 0;
let maxTime = 30;
let elapsedTime = 0;
let timerInterval;

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
const endMessage = document.querySelector(".message-container");

// Buttons
const themeButton = document.querySelector(".theme");
const homeButtons = document.querySelectorAll(".title");
const contactButtons = document.querySelectorAll(".contact-button");
const difficultyButtons = document.querySelectorAll(".difficulty-buttons .button");

// Game counters
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");

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
    matchedPairs = [];
    currentTries = 0;
    elapsedTime = 0;
    timer.innerHTML = elapsedTime;
    score.innerHTML = 0;
    endMessage.innerHTML = "";    
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
    startTimer();
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
// Timer function learned through https://www.w3schools.com/js/js_timing.asp
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(addSeconds, 1000);
    function addSeconds() {
        if (matchedPairs.length === gameCards.length) {
            console.log("WINNER!");
            clearInterval(timerInterval);
            endGame();
        } else if (gameScreen.classList.contains("hidden")) {
            console.log("QUITTER!");
            clearInterval(timerInterval);
        } else if (elapsedTime === maxTime) {
            console.log("LOSER!");
            clearInterval(timerInterval);
            endGame();
        } else {
            elapsedTime++;
            timer.innerHTML = elapsedTime;
            score.innerHTML = elapsedTime + currentTries;
        }
    }
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
        currentTries++;
    }
}
// Checks cards in game memory for matching values
function checkCards() {
    let value1 = cardsToCheckValue[0];
    let value2 = cardsToCheckValue[1];
    let id1 = cardsToCheckId[0];
    let id2 = cardsToCheckId[1];
    let card1 = document.getElementById(`${id1}`).parentNode.querySelectorAll(".card");
    let card2 = document.getElementById(`${id2}`).parentNode.querySelectorAll(".card");

    if (value1 === value2) {
        matchedPairs.push(value1, value2);
    } else {
        card1.forEach((side) => side.classList.toggle("hidden"));
        card2.forEach((side) => side.classList.toggle("hidden"));
    }
    clearMemory();
    let unturned = document.querySelectorAll(".back");
    unturned.forEach((card) => addCardEvents(card));
}
// Shows end screen
function endGame() {
    showEndScreen();

    let message = document.createElement("p");
    message.classList.add("message");

    let winScore = document.createElement("p");
    winScore.classList.add("winning-score");

    if (matchedPairs.length === gameCards.length) {
        message.innerHTML = `Well done, you found all ${matchedPairs.length / 2} pairs!`;
        winScore.innerHTML = `Your Score: ${currentTries}`;
        endMessage.appendChild(message);
        endMessage.appendChild(winScore);
    } else {
        message.innerHTML = `You only found ${matchedPairs.length / 2} out of ${gameCards.length / 2} pairs<br>
                            Better luck next time!`
        endMessage.appendChild(message);
    }
}