let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomizer = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomizer];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();    

    if (playerSelection === "" ) {

        return ("empty string");

    } else if ((playerSelection !== "rock") && (playerSelection !=="paper") && (playerSelection !== "scissors")) {

        return ("Wrong input. Please use rock/paper/scissors only.");

    }

    computerSelection = getComputerChoice();

    if (playerSelection === "rock") {

        if (computerSelection === "rock") {

            return ("It's a TIE!");

        } else if (computerSelection === "paper") {

            return ("You lose. Paper beats rock!")

        } else {

            return ("You won. Rock beats scissors!")

        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "paper") {

            return ("It's a TIE!")

        } else if (computerSelection === "rock") {

            return ("You win. Paper beats rock!")

        } else {

            return ("You lose. Scissors beats paper!")

        } 
        } else {

            if (computerSelection === "scissors") {

                return ("It's a TIE!")

            } else if (computerSelection === "paper") {

                return ("You win. Scissors beats paper!")

            } else {

                return ("You lose. Rock beats scissors!")

            }
        } 

}

playerSelection = prompt("Game 1!\nEnter rock paper scissors");

function game() {

    let result = playRound(playerSelection, computerSelection);

    if (result === "empty string") {
        
        console.log("Empty String. Please input rock/paper/scissors.");
        return;
        
    } else if (result === "Wrong input. Please use rock/paper/scissors only.") {
        
        console.log("Wrong input. Only ROCK PAPER SCISSORS!")
        return;

    } else if (result === "It's a TIE!") {

        console.log("We've got a Tie! Another one!");

        return;

    } else if (result === "You win. Paper beats rock!" 
    || result === "You win. Scissors beats paper" 
    || result === "You won. Rock beats scissors!") {

        playerScore++;
        console.log("You won!")


    } else {

        computerScore++;
        console.log("Computer won!")

    }
    
}



for (let i = 1; i < 6; i++) {

    console.log(`Game number ${i}! ${5 - i} games to go!`);

    game();
    
    console.log(`Player score = ${playerScore}. Computer score = ${computerScore}`);

    i = i++;

    if (i == 4) {
        playerSelection = prompt("Last game!");
        console.log("last game!");
        game();
        break;
    }

    
    playerSelection = prompt("Another one!");

}

if (playerScore > computerScore) {
    console.log("YOU WON ! CONGRATZ!");
} else if (computerScore > playerScore) {
    alert("COMPUTER WON! ITS RANDOM!");
} else {
    alert("ITS A TIE! WHO THOUGHT?");
}
