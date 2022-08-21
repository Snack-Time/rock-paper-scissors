let playerSelection = '';
let computerSelection = '';
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    let cpuRandomChoice = Math.floor(Math.random()*3) + 1;
    if (cpuRandomChoice === 1) {
        cpuRandomChoice = "rock";
    }
    else if (cpuRandomChoice === 2) {
        cpuRandomChoice = "paper";
    }
    else if (cpuRandomChoice === 3) {
        cpuRandomChoice = "scissors";
    }
    else {
        cpuRandomChoice = "gun";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) { 
    console.log('You drew! No one wins!')
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log(`Your ${playerSelection} loses to the computer's ${computerSelection}. LOSER! YOU'RE A LOSER! ARE YOU FEELING SORRY FOR YOURSELF?`)
    computerWins = ++computerWins
    return computerWins;
    }

    else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
    console.log(`Your ${playerSelection} beats the computer's ${computerSelection}. You're winner!`)
    playerWins = ++playerWins
    return playerWins;
    }
}

function game() {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}