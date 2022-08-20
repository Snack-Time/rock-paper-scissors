function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random()*3) + 1;
    if (cpuChoice === 1) {
        computerSelection = "rock";
    }
    else if (cpuChoice === 2) {
        computerSelection = "paper";
    }
    else if (cpuChoice === 3) {
        computerSelection = "scissors";
    }
    else {
        computerSelection = "gun";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) { 
     console.log('You drew! No one wins!')
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    
    console.log("LOSER! YOU'RE A LOSER! ARE YOU FEELING SORRY FOR YOURSELF?") }

    else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
    console.log("You're winner!") }
    
}