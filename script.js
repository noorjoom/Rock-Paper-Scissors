function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(x) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = getRandomInt(0, 2);
    return choices[randomIndex];
}

// console.log(getComputerChoice());

function playRound() {

    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    
    if (!playerSelection) {
        console.log("Invalid choice");
        return "Invalid choice";
    }
    
    const player = playerSelection.toLowerCase();

    if (
        player !== "rock" &&
        player !== "paper" &&
        player !== "scissors"
    ) {
        console.log("Invalid choice");
        return "Invalid choice";
    }

    const computerSelection = getComputerChoice();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log(`You Win! ${player} beats ${computer}`);
        return "win";
    } else {
        console.log(`You Lose! ${computer} beats ${player}`);
        return "lose";
    }
}

//this function is not working as supposed to.
function game() {
    let humanWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const roundResult = playRound();

        if (roundResult === "win") {
            humanWins++;
        }
        else if (roundResult === "lose") {
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
        console.log("It's a tie!");
    }
}

game();

