// Screens
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".game");
const endScreen = document.querySelector(".end");
const contactScreen = document.querySelector(".contact");

// Buttons
const themeButton = document.querySelector(".theme");
const homeButtons = document.querySelectorAll(".title");
const contactButtons = document.querySelectorAll(".contact");
const difficultyButtons = document.querySelectorAll(".difficulty-buttons .button");

// Event Listeners
homeButtons.forEach((button) => button.addEventListener("click", showHomeScreen));

// Functions
function showHomeScreen() {
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    contactScreen.classList.add("hidden");
    console.log("HOME!");
}