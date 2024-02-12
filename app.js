function getComputerChoice() {
  var randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

const displayResult = document.querySelector('#result');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score')
const displayWinner = document.querySelector('#show-winner')

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');
  const resetButton = document.querySelector('#reset');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
  });

  resetButton.addEventListener('click', resetGame)
});

function playRound(playerChoice, computerChoice) {
  displayWinner.textContent = "";
  if (playerScore >= 5 || computerScore >= 5) {
    resetGame();
  }
  if (playerChoice === "rock" && computerChoice === "paper" || 
  playerChoice === "paper" && computerChoice === "scissors" || 
  playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    displayComputerScore.textContent = `Computer score: ${computerScore}`;
    displayResult.textContent = 'The pc won this round';
  } else if (playerChoice === computerChoice) {
    console.log("empate")
    displayResult.textContent = 'Draw';
  } else {
    playerScore++;
    displayPlayerScore.textContent = `Player score: ${playerScore}`;
    displayResult.textContent = 'You won this round';
  }
  checkGameEnd();
}

function checkGameEnd() { 
  if (computerScore >= 5) {
    displayWinner.textContent = "The computer won the best of 5";
  }
  if (playerScore >= 5) {
    displayWinner.textContent = "Congrats, you won the best of 5!";
  }
}

function resetGame() {
  playerScore = computerScore = 0;
  displayComputerScore.textContent = `Computer score: ${computerScore}`;
  displayPlayerScore.textContent = `Player score: ${playerScore}`;
  if (displayWinner.textContent != '') {
    displayWinner.textContent = '';
  }
  displayWinner.textContent = '';
  displayWinner.textContent = "The game has been reset";
}

let computerSelection = getComputerChoice();