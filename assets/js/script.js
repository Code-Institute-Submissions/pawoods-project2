// Global variables
// Variable for game data
let gameCards = [];
let matchedPairs = [];
let currentTries = 0;
let maxTime = 30;
let elapsedTime = 0;
let timerInterval;
let bonusScore = 50;

// Variables for game memory
let cardsToCheckId = [];
let cardsToCheckValue = [];

// Root CSS variables
const r = document.querySelector(":root");

// Pairs of cards for each difficulty
const difficultyPairs = {
    "easy": 8,
    "medium": 10,
    "hard": 12,
    "extreme": 14
};

// Screens and containers
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");
const endScreen = document.querySelector(".end");
const contactScreen = document.querySelector(".contact");
const cardsBoard = document.querySelector(".cards-board");
const endMessage = document.querySelector(".message-container");
const modalBackground = document.querySelector(".modal");
const rulesModal = document.querySelector(".rules.modal-content");
const confirmationModal = document.querySelector(".confirmation.modal-content");
const errorModal = document.querySelector(".error.modal-content");
const errorMessage = document.querySelector(".error-message");

// Buttons
const themeButton = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-icon");
const homeButtons = document.querySelectorAll(".home");
const contactButtons = document.querySelectorAll(".contact-button");
const rulesButton = document.querySelector(".rules.button");
const modalClose = document.querySelectorAll(".close");
const difficultyButtons = document.querySelectorAll(".difficulty-buttons .button");
const extremeButton = document.querySelector(".extreme");

// Game counters
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");

// Event Listeners
themeButton.addEventListener("click", toggleTheme);
rulesButton.addEventListener("click", showRules);
homeButtons.forEach((button) => button.addEventListener("click", showHomeScreen));
contactButtons.forEach((button) => button.addEventListener("click", showContactScreen));
difficultyButtons.forEach((button) => button.addEventListener("click", function (e) {
    let difficulty = e.target.id;
    createGame(difficulty);
}));
modalClose.forEach((button) => button.addEventListener("click", closeModal));

// Functions

function toggleTheme() {
    if (themeIcon.classList.contains("light")) {
        themeIcon.classList.add("dark");
        themeIcon.classList.remove("light");
        themeIcon.innerHTML = `<i class="fa-solid fa-moon" aria-hidden="true"></i>`;
        r.style.setProperty("--background", "rgb(2, 33, 63)");
        r.style.setProperty("--screen", "rgb(2, 33, 63)");
        r.style.setProperty("--card-front", "rgb(60, 120, 120)");
        r.style.setProperty("--card-back", "rgb(15, 75, 95)");
        r.style.setProperty("--text", "rgb(255, 255, 255)");
    } else {
        themeIcon.classList.remove("dark");
        themeIcon.classList.add("light");
        themeIcon.innerHTML = `<i class="fa-solid fa-sun" aria-hidden="true"></i>`;
        r.style.setProperty("--background", "rgb(255, 255, 255)");
        r.style.setProperty("--screen", "rgb(220, 220, 220)");
        r.style.setProperty("--card-front", "rgb(155, 248, 255)");
        r.style.setProperty("--card-back", "rgb(157, 188, 191)");
        r.style.setProperty("--text", "rgb(2, 33, 63)");
    }
}
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
    extremeButton.classList.add("hidden");
}
// Clear pair check memory
function clearMemory() {
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
    for (let i = gameCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
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

    if (cardsToCheckValue.length === 2) {
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
        winScore.innerHTML = `Your Score: ${currentTries + elapsedTime}`;
        endMessage.appendChild(message);
        endMessage.appendChild(winScore);
        if (gameCards.length / 2 === difficultyPairs.extreme) {
            let extremeWin = document.createElement("p");
            extremeWin.innerHTML = `You beat the EXTREME bonus round!<br>
            Can you do it again?`;
            endMessage.appendChild(extremeWin);
        } else if (gameCards.length / 2 === difficultyPairs.hard) {
            checkBonus();
        } else {
            let tryHarder = document.createElement("p");
            tryHarder.innerHTML = `Try a harder difficulty for more of a challenge.<br>
            See if you can unlock the EXTREME bonus round!`;
            endMessage.appendChild(tryHarder);
        }
    } else {
        message.innerHTML = `You only found ${matchedPairs.length / 2} out of ${gameCards.length / 2} pairs<br>
                            Better luck next time!`;
        endMessage.appendChild(message);
    }
}
// Checks whether bonus round has been unlocked
function checkBonus() {
    let bonusMessage = document.createElement("p");
    bonusMessage.classList.add("bonus-message");

    if (currentTries + elapsedTime <= bonusScore) {
        console.log("BONUS!");
        bonusMessage.innerHTML = `You unlocked the EXTREME bonus round!<br>
        Prepare yourself, you only get one chance.<br>
        Good Luck!`;
        extremeButton.classList.remove("hidden");
    } else {
        console.log("NO BONUS!");
        bonusMessage.innerHTML = `Unlucky!<br>
        You scored ${currentTries + elapsedTime}.<br>
        Try hard mode again for ${bonusScore} points or less to unlock the EXTREME bonus round!`;
    }
    endMessage.appendChild(bonusMessage);
}
// Sends email from contact form learned from https://www.emailjs.com/docs/tutorial/creating-contact-form/
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButton = document.querySelector(".submit");
    submitButton.disabled = true;
    modalBackground.classList.remove("hidden");
    emailjs.send("pa.woods", "snap", {
        "user_name": this.user_name.value,
        "user_email": this.user_email.value,
        "user_message": this.user_message.value
    })
        .then(function () {
            console.log("Success");
            e.target.reset();
            showConfirmation();
            submitButton.disabled = false;
        },
            function (error) {
                console.log("Error", error);
                errorMessage = error;
                showError();
                submitButton.disabled = false;
            });
});
// Show rules modal
function showRules() {
    modalBackground.classList.remove("hidden");
    rulesModal.classList.remove("hidden");
    // confirmationModal.classList.add("hidden");
    // errorModal.classList.add("hidden");
}
//  Show thank you modal
function showConfirmation() {
    modalBackground.classList.remove("hidden");
    // rulesModal.classList.add("hidden");
    confirmationModal.classList.remove("hidden");
    // errorModal.classList.add("hidden");
}
//  Show error modal
function showError() {
    modalBackground.classList.remove("hidden");
    // rulesModal.classList.add("hidden");
    // confirmationModal.classList.add("hidden");
    errorModal.classList.remove("hidden");
}
// Close rules modal
function closeModal() {
    modalBackground.classList.add("hidden");
    rulesModal.classList.add("hidden");
    confirmationModal.classList.add("hidden");
    errorModal.classList.add("hidden");
}