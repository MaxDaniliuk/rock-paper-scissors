
function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function getPlayerChoice () {
    let btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {    
        playRound(this.innerText.toLowerCase(), getComputerChoice())
            
            
        })
    });
    /*
    let playerChoice = prompt("Make your move").toLowerCase();
    while (true) {
        if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper") {
            return playerChoice
        } else {
            playerChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();
        }  
    } 
    */
} 

function getRoundResult (str) {
    let roundOutput = document.querySelector('.round-output');
    roundOutput.innerHTML = "";
    roundOutput.appendChild(document.createTextNode(str));
}

// When GUI will be created make 'const playerSelection = prompt("Make your move").toLowerCase();' instead of getPlayerChoice function.

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        getRoundResult("It's a tie!");
        //return "Tie"
        

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        getRoundResult("You Win! Rock beats Scissors");
        //return "Win";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        getRoundResult("You Lose! Scissors are defeated by Rock")
        //return "Lose";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        getRoundResult("You Win! Paper beats Rock");
        //return "Win";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        getRoundResult("You Lose! Rock is defeated by Paper");
        //return "Lose";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        getRoundResult("You Win! Scissors beats Paper");
        //return "Win";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        getRoundResult("You Lose! Paper is defeated by Scissors");
        //return "Lose";
    }
}

getPlayerChoice()

/*
function playGame() {
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

playGame()
*/



