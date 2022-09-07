/*
let comparison = [];
comparison = [compGuessToString, userChoice];
console.log(comparison);
 */


/**
best of five so make counter;
upper lower cases;
what is not expected aswer?
**/

const listOfChoices = ["rock", "paper", "scissors"];

const computerGuess = (Math.floor(Math.random() * 3));
const compGuessToString = listOfChoices[computerGuess];
console.log(compGuessToString);

let userChoice = prompt("Rock! Paper! Scissors!");


let cpuCounter = 0, userCounter = 0;

switch (userChoice) {
    case ("rock"):
        if (compGuessToString === "scissors") {
            console.log("cpu won");
        } else if (compGuessToString === "paper") {
            console.log("you won!");
        }
        break;
    case ("scissors"):
        if (compGuessToString === "rock") {
            console.log("cpu won");
        } else if (compGuessToString === "paper") {
            console.log("you won!")
        }
        break;
    case ("paper"):
        if (compGuessToString === "scissors") {
            console.log("cpu won");
        } else if (compGuessToString === "rock") {
            console.log("you won!");
        } 
        break;
}

