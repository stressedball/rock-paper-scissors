alert("Let's play rock paper scissors!");

let userInput = prompt("Play");

const possibleChoices = ["rock", "paper", "scissors"];

let userScore = 0, cpuScore = 0;


/* ROUND RESULT */
function roundResult() {

    let userInputCorrected = userInput.toLowerCase();
    console.log(userInputCorrected);

    /* make sure user input is correct by game rules */
    if ((userInputCorrected !== "rock") && (userInputCorrected !=="paper") && (userInputCorrected !== "scissors")) {

        alert("Please use rock/paper/scissors only.");
        userInput = prompt("Play again");

    } else if (userInputCorrected === "" ) {

        alert("Please input something");
        userInput = prompt("Play again");

    }

    let cpuChoice = getCpuChoice();
    console.log(cpuChoice);

    /* just alerting, don't think anything is returned */
    if (userInputCorrected === "rock") {

        if (cpuChoice === "rock") {

            alert("it's a TIE");

        } else if (cpuChoice === "paper") {

            alert("you lose");
            cpuScore++;

        } else {

            alert("you win");
            userScore++;

        }

    } else if (userInputCorrected === "paper") {

        if (cpuChoice === "paper") {
            alert("it's a TIE");

        } else if (cpuChoice === "rock") {

            alert("you won");
            userScore++;

        } else {

            alert("you lost");
            cpuScore++;

        } 
        } else {

            if (cpuChoice === "scissors") {
                alert("it's a tie");

            } else if (cpuChoice === "paper") {

                alert("you won");
                userScore++;

            } else {

                alert("you lost");
                cpuScore++;

            }
        } 

    userInput = prompt("Another game. First to 5!");
}


/* generate random choice */
function getCpuChoice() {
    const computerGuess = (Math.floor(Math.random() * 3));
    const compGuessToString = possibleChoices[computerGuess];
    return compGuessToString;
}

/* make a game of 5 & track score */
while (userScore < 6 && cpuScore < 6) {

    roundResult();

}