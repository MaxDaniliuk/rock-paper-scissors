let computerScore = 0;
let playerScore = 0;

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function getPlayerChoice () {
    let btns = document.querySelectorAll('.play-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {     
        playRound(this.innerText.toLowerCase(), getComputerChoice())   
        })
    });
} 

function getRoundResult (str) {
    let roundOutput = document.querySelector('.round-output');
    roundOutput.innerHTML = "";
    roundOutput.appendChild(document.createTextNode(str));
}

function updateScore (score, tag) {
    let currentScore = document.querySelector(tag);
    currentScore.innerHTML = "";
    currentScore.appendChild(document.createTextNode(score)); 
}

function activateModal (modalText) {
    let resultMsg = document.querySelector('.modal .modal-text');
    resultMsg.innerHTML = '';
    resultMsg.appendChild(document.createTextNode(modalText));
    modal.showModal();
    closeModal.addEventListener('click', () => {
        modal.close();
        document.location.reload();
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        getRoundResult("It's a tie!");

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        getRoundResult("You Win! Rock beats Scissors");
        playerScore += 1;
        updateScore(playerScore, '.player-score');

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        getRoundResult("You Lose! Scissors are defeated by Rock")
        computerScore += 1;
        updateScore(computerScore, '.computer-score');

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        getRoundResult("You Win! Paper beats Rock");
        playerScore += 1;
        updateScore(playerScore, '.player-score');

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        getRoundResult("You Lose! Rock is defeated by Paper");
        computerScore += 1;
        updateScore(computerScore, '.computer-score');

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        getRoundResult("You Win! Scissors beats Paper");
        playerScore += 1;
        updateScore(playerScore, '.player-score');

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        getRoundResult("You Lose! Paper is defeated by Scissors");
        computerScore += 1;
        updateScore(computerScore, '.computer-score');
    }

    if (playerScore == 5) {
        activateModal("You won!")
    } else if (computerScore == 5) {
        activateModal("You lost...")
    }
}

getPlayerChoice();