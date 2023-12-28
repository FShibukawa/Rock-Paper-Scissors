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
var playerSelection = prompt("Choose rock, paper or scissors:");

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() != "rock" && 
  playerSelection.toLowerCase() != "paper" && 
  playerSelection.toLowerCase() != "scissors") {
    return "Do you know how to play?"
  } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" || 
  playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" || 
  playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    timesComputerWon++;
    return "The computer won!";
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw!";
  } else {
    timesPlayerWon++
    return "You won!"
  }
}
 
// const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

function game() {
  timesComputerWon = 0
  timesPlayerWon = 0
  for (var i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose rock, paper or scissors:");
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("The computer won " + timesComputerWon + " times")
  console.log("The player won " + timesPlayerWon + " times")
  if (timesComputerWon > timesPlayerWon) {
    return "Computer won the best of 5"
  } else if ((timesComputerWon < timesPlayerWon)) {
    return "Player won the best of 5"
  } else {
    return "Draw"
  }
}

