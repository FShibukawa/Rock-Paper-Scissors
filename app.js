function getComputerChoice() {
  var randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Rock";
  } else if (randomNumber < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let timesPlayerWon = 0;
let timesComputerWon = 0;

const displayResult = document.querySelector('#result');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score')
const displayWinner = document.querySelector('#show-winner')

document.addEventListener('DOMContentLoaded', function() {
  let rock = document.querySelector('#rock');
  let paper = document.querySelector('#paper');
  let scissors = document.querySelector('#scissors');
  let reset = document.querySelector('#reset')
  rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
  paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
  scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
  reset.addEventListener('click', resetGame)
});

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" || 
  playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" || 
  playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
    timesComputerWon++;
    displayComputerScore.innerHTML = `Computer score: ${timesComputerWon}`;
    displayResult.innerHTML = 'The pc won this round';
  } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
    console.log("empate")
    displayResult.innerHTML = 'Draw';
  } else {
    timesPlayerWon++;
    displayPlayerScore.innerHTML = `Player score: ${timesPlayerWon}`;
    displayResult.innerHTML = 'You won this round';
  }
  if (timesComputerWon >= 5) {
    displayWinner.innerHTML = "The computer won the best of 5";
  }
  if (timesPlayerWon >= 5) {
    displayWinner.innerHTML = "Congrats, you won the best of 5!";
  }
}

function resetGame() {
  timesPlayerWon = timesComputerWon = 0;
  displayComputerScore.innerHTML = `Computer score: ${timesComputerWon}`;
  displayPlayerScore.innerHTML = `Player score: ${timesPlayerWon}`;
  displayResult.innerHTML = '';
  displayWinner.innerHTML = '';
}

 
let computerSelection = getComputerChoice();
console.log("está é a escolha da máquina: " + computerSelection)