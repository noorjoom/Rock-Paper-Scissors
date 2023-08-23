function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Rock: 1, Paper: 2, Scissors: 3
// Rock beats Scissors
// Paper beats Rock
// Scissors beat Paper

function getComputerChoice(x) {
    x = getRandomInt(1,3);
    
    if (x === 1) {
        return 'rock';
    }
    else if (x === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Choose Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beat Paper");
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You Lose! Rock beats Scissors");
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You Lose! Scissors beat Paper");
    }
    else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("invalid choice");
    }
    else {
        console.log("You both chose the same.. TIED!");
    }
}

//this function is not working as supposed to.
function game() {
    let humanWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {

        let y = playRound();

        if (y === "You Win! Rock beats Scissors" || y === "You Win! Paper beats Rock" || y === "You Win! Scissors beat Paper") {
            humanWins++;
        }
        else if (y === "You Lose! Rock beats Scissors" || y === "You Lose! Paper beats Rock" || y === "You Lose! Scissors beat Paper") {
            computerWins++;
        }
    }
    if (humanWins > computerWins) {
        console.log("Human wins!!");
    }
    else if (computerWins > humanWins) {
        console.log("Computer Wins!!!");
    }
    else {
        console.log("tied");
    }
}

game();

