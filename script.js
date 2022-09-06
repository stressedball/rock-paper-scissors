let listOfChoices = ["rock", "paper", "scissors"];

const computerGuess = (Math.floor(Math.random() * 3));
const compGuessToString = listOfChoices[computerGuess];
console.log(compGuessToString);

let userChoice = prompt("Rock! Paper! Scissors!");
if (userChoice === compGuessToString) {
    prompt("You won!");
} else {
    prompt("You lost ;(")
}

 
/*best of five so make counter;
upper lower cases;
what is not expected aswer?
***/
