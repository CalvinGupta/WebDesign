let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  if (Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
    return true;
  }
  else {
    return false;
  }
}

function updateScore(winner) {
  if (winner == "human") {
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}