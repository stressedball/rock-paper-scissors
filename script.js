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

function playRound(e) {
    let roundResult = "";
    roundResult = document.querySelector('.leftPart');
    
        
    let generalScore = 0;
    generalScore = document.querySelector('.rightPart');

    let gameResult = "";
    gameResult = document.querySelector('.middlePart');
    
    
    if (e.target === paperButton) {
        computerSelection = getComputerChoice();
        if (computerSelection === 'paper') {
            roundResult.textContent = 'Round result : IT\'S A TIE!';
        } else if (computerSelection === 'rock') {
            playerScore++;
            roundResult.textContent = 'Round result : PAPER BEATS ROCK, YOU WIN!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        } else {
            computerScore++;
            roundResult.textContent = 'SCISSORS BEATS PAPER, YOU LOSE!';
            generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        }
    } else if (e.target === rockButton) {
        if (computerSelection === 'rock') {
            roundResult.textContent = 'Round result : IT\'S A TIE!';
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
            return('ITS A TIE');
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

    if (computerScore === 5)  {
        generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        gameResult.textContent = "COMPUTER WON"
        playerSelection = document.removeEventListener('click', playRound);
    } else if (playerScore === 5) {
        generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        gameResult.textContent = "YOU WON"
        playerSelection = document.removeEventListener('click', playRound);
    }
}

