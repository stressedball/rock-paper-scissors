function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomizer = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomizer];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Enter rock paper scissors");
    playerSelection = playerSelection.toLowerCase();    

    if (playerSelection === "" ) {

        alert("Please input something");
        return;

    } else if ((playerSelection !== "rock") && (playerSelection !=="paper") && (playerSelection !== "scissors")) {

        alert("Please use rock/paper/scissors only.");
        return;

    }

    computerSelection = getComputerChoice();

    if (playerSelection === "rock") {

        if (computerSelection === "rock") {

            alert("it's a TIE");

        } else if (computerSelection === "paper") {

            alert("you lose");

        } else {

            alert("you win");

        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "paper") {
            alert("it's a TIE");

        } else if (computerSelection === "rock") {

            alert("you won");

        } else {

            alert("you lost");

        } 
        } else {

            if (computerSelection === "scissors") {
                alert("it's a tie");

            } else if (computerSelection === "paper") {

                alert("you won");

            } else {

                alert("you lost");

            }
        } 

}

playRound();
