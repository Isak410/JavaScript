// Get DOM elements
const gameScreen = document.getElementById("game-screen");
const crashCircle = document.getElementById("crash-circle");
const betInput = document.getElementById("bet-input");
const startButton = document.getElementById("start-button");
const cashOutButton = document.getElementById("cash-out-button");
const gameResult = document.getElementById("game-result");

// Set up game variables
let gameState = "ready"; // ready, playing, cashedOut
let currentBet = 0;
let currentMultiplier = 1;

// Set up event listeners
startButton.addEventListener("click", () => {
  if (gameState === "ready") {
    startGame();
  }
});

cashOutButton.addEventListener("click", () => {
  if (gameState === "playing") {
    cashOut();
  }
});

// Set up game functions
function startGame() {
  // Get bet amount from input
  currentBet = parseInt(betInput.value);
  if (isNaN(currentBet) || currentBet <= 0) {
    alert("Please enter a valid bet amount.");
    return;
  }

  // Set up game state
  gameState = "playing";
  startButton.style.display = "none";
  cashOutButton.style.display = "block";

  // Animate crash circle
  animateCircle();
}

function animateCircle() {
  // Generate random multiplier between 1.5 and 3
  currentMultiplier = Math.floor(Math.random() * 15) / 10 + 1.5;

  // Calculate distance to travel
  const distance = gameScreen.clientHeight - crashCircle.clientHeight;

  // Calculate animation duration based on current multiplier
  const duration = distance / currentMultiplier;


}
  // Animate circle to top of screen
  //crashCircle.style.display