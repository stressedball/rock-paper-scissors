let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomizer = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomizer];
    return computerChoice;
}
    
playerSelection = document.querySelectorAll('.button');

for (let i = 0; i < playerSelection.length; i++) {
    playerSelection[i].addEventListener('click', bottomMessages);

    function bottomMessages(e) {
        let roundResult = "";
        roundResult = document.querySelector('.leftPart');
        roundResult.textContent = `Round result : ${playRound(e)}`;

        let generalScore = 0;
        generalScore = document.querySelector('.rightPart');
        generalScore.textContent = `CPU score : ${computerScore} - ${playerScore} : Your Score`;
        
        if (computerScore === 5 || playerScore === 5) {
            playerSelection[i].removeEventListener('click', bottomMessages);
            funMessage();
        }
    }

    function playRound(e) {
        computerSelection = getComputerChoice();
        if (e.target.classList.contains('paper')) {
            if (computerSelection === 'paper') {
                return('ITS A TIE');
            } else if (computerSelection === 'rock') {
                playerScore++;
                return('PAPER BEATS ROCK, YOU WIN!');
            } else {
                computerScore++;
                return('SCISSORS BEATS PAPER, YOU LOSE!');
            }         
        } else if (e.target.classList.contains('rock')) {
            if (computerSelection === 'rock') {
                return('ITS A TIE');
            } else if (computerSelection === 'paper') {
                computerScore++;
                return('PAPER BEATS ROCK, YOU LOSE!');
            } else {
                playerScore++;
                return('ROCK BEATS SCISSORS, YOU WIN');
            }
        } else if (e.target.classList.contains('scissors')) {  
            if (computerSelection === 'scissors') {
                return('ITS A TIE');
            } else if (computerSelection === 'rock') {
                computerScore++;
                return('ROCK BEATS SCISSORS, YOU LOSE!');
            } else {
                playerScore++;
                return('SCISSORS BEATS PAPER, YOU WIN!');
            }
        }


    }  
}

function funMessage () {
    const funMessageVar = document.querySelector('.middlePart');
    if (computerScore === 5) {
        funMessageVar.textContent = 'CPU WON!';
    } else if (playerScore === 5) {
        funMessageVar.textContent = 'YOU WON!';
    }
    return funMessageVar;
}