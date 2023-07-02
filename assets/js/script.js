// Screens
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");
const endScreen = document.querySelector(".end");
const contactScreen = document.querySelector(".contact");

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
    console.log("HOME!");
}
// Show only game screen
function showGameScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.add("hidden");
    console.log("GAME!");
}
// Show only end screen
function showEndScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    contactScreen.classList.add("hidden");
    console.log("END!");
}
// Show only contact screen
function showContactScreen() {
    startScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.remove("hidden");
    console.log("CONTACT!");
}
// Create game from chosen difficulty
function createGame(difficulty) {
    console.log(difficulty);
}