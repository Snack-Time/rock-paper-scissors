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
    console.log(computerSelection);
}