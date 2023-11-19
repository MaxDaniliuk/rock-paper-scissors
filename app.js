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



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with a ${computerSelection}`);
        return "Tie"

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "Win";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        return "Lose";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return "Win";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return "Lose";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        return "Win";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "Lose";
    }
}


//Compares the paramaeters and return the result - for example, "You Lose! Paper beats Rock". 
// Done

//Write a function called game()
//

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result === "Win") {
            playerScore += 1;
            
            if (playerScore == 5) {
                console.log("You win!");
                console.log(`Player: ${playerScore} Computer: ${computerScore}`)
                return false;
            }
        } else if (result === "Lose") {
            computerScore += 1; 
            
            if (computerScore == 5) {
                console.log("You lose!");
                console.log(`Player: ${playerScore} Computer: ${computerScore}`)
                return false;
            }
        } else {
            continue;
        }
    }    
    
}

game()




