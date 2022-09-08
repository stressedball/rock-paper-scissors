alert("Let's play rock paper scissors!");

let userInput = prompt("Play");

let userInputCorrected = userInput.toLowerCase();
console.log(userInputCorrected);

const possibleChoices = ["rock", "paper", "scissors"];

function getCpuChoice() {
    const computerGuess = (Math.floor(Math.random() * 3));
    const compGuessToString = possibleChoices[computerGuess];
    return compGuessToString;
}

if ((userInputCorrected !== "rock") && (userInputCorrected !=="paper") && (userInputCorrected !== "scissors")) {

    alert("Please use rock/paper/scissors only.");
    userInput = prompt("Play again");

} else if (userInputCorrected === "" ) {

    alert("Please input something");
    userInput = prompt("Play again");

}

let userScore = 0, cpuScore = 0;

let cpuChoice = getCpuChoice();
console.log(cpuChoice);

if (userInputCorrected === "rock") {
    if (cpuChoice === "rock") {
        alert("it's a TIE");
    } else if (cpuChoice === "paper") {
        alert("you lose");
        userScore++;
    } else {
        alert("you win");
        cpuScore++;
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

