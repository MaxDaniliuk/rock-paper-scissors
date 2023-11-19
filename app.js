console.log("Rock-Paper-Scissors Game");


// Get the computer to make a choice
// Computer should randomly return ‘Rock’, ‘Paper’ or ‘Scissors’
// Done ! 

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

// Play a single round
// Here, you have two parameters, one is yours and the second is computer's
// Yours choice must be case insensitive

function getPlayerChoice () {
    let playerChoice = prompt("Make your move").toLowerCase();
    while (true) {
        if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper") {
            return playerChoice
        } else {
            playerChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();
        }  
    } 
}       
// When GUI will be created make 'const playerSelection = prompt("Make your move").toLowerCase();' instead of getPlayerChoice function.
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with a ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }
}

console.log(playRound(playerSelection, computerSelection));

//Compares the paramaeters and return the result - for example, "You Lose! Paper beats Rock". 






