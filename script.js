let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomizer = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomizer];
    return computerChoice;
}
    
paperButton = document.querySelector('.button.paper');
rockButton = document.querySelector('.button.rock');
scissorsButton = document.querySelector('.button.scissors');

playerSelection = document.addEventListener('click', playRound);

let roundResult = "";
roundResult = document.querySelector('.roundResult');
let generalScore = 0;
generalScore = document.querySelector('.score');
let gameResult; //make this a splashscreen por favor

function playRound(e) {    
    computerSelection = getComputerChoice();
    if (e.target === paperButton) {
        if (computerSelection === 'paper') {
            roundResult.textContent = 'IT\'S A TIE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else if (computerSelection === 'rock') {
            playerScore++;
            roundResult.textContent = 'PAPER BEATS ROCK, YOU WIN!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else {
            computerScore++;
            roundResult.textContent = 'SCISSORS BEATS PAPER, YOU LOSE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        }
    } else if (e.target === rockButton) {
        if (computerSelection === 'rock') {
            roundResult.textContent = 'IT\'S A TIE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else if (computerSelection === 'paper') {
            computerScore++;
            roundResult.textContent = 'PAPER BEATS ROCK, YOU LOSE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else {
            playerScore++;
            roundResult.textContent = 'ROCK BEATS SCISSORS, YOU WIN';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        }
    } else if (e.target === scissorsButton) {
        if (computerSelection === 'scissors') {
            roundResult.textContent = 'IT\'S A TIE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else if (computerSelection === 'rock') {
            computerScore++;
            roundResult.textContent = 'ROCK BEATS SCISSORS, YOU LOSE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else {
            playerScore++;
            roundResult.textContent ='SCISSORS BEATS PAPER, YOU WIN!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        }
    }

    if (computerScore === 1)  {
        generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        //gameResult.textContent = "COMPUTER WON"
        playerSelection = document.removeEventListener('click', playRound);
        playAgain();
    } else if (playerScore === 1) {
        generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        //gameResult.textContent = "YOU WON"
        playerSelection = document.removeEventListener('click', playRound);
        playAgain();
    }
}

let playAgainButton = document.querySelector('.again');;
function playAgain() {
    let againContainer = document.querySelector('.againContainer');
    playAgainButton.textContent = "Wanna go again?";
    playAgainButton.style.fontSize = '20px';
    //playAgainButton.style.alignSelf = 'center';
    playAgainButton.style.textAlign = 'center';
    playAgainButton.style.paddingBottom = '20px';
    playAgainButton.style.paddingTop = '20px';
    playAgainButton.style.backgroundColor = '#b2b2b2'
    playAgainButton.style.border = '2px solid';
    playAgainButton.style.width = '300px';
    againContainer.appendChild(playAgainButton);
}

playAgainClick = document.addEventListener('click', newRound);
function newRound(e) {
    if (e.target === playAgainButton) {
        computerScore = 0, playerScore = 0;
        roundResult.textContent = "Let's go again!";
        generalScore.textContent = "Waiting for round to start to display score.";
        //gameResult.textContent = "";
        playerSelection = document.addEventListener('click', playRound);
        playAgainButton.parentElement.removeChild(playAgainButton);
    }
}