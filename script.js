let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let gameResult = "";

const playerScoreElement = document.querySelector('.humanScore');
const computerScoreElement = document.querySelector('.computerScore');
const playerChoiceElement = document.getElementById('playerChoice');
const computerChoiceElement = document.getElementById('computerChoice');
const roundResultElement = document.querySelector('.round-result');
const gameResultElement = document.querySelector('.game-result');


function updateScoreDisplay() {
    playerScoreElement.textContent = `Your Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer's Score: ${computerScore}`;
}

function updateChoicesDisplay(playerChoice, computerChoice) {
    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;
    roundResultElement.textContent = `Round Result: ${roundResult}`;
    gameResultElement.textContent = `Game Result: ${gameResult}`;
}

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


function playRound(playerSelection) {
    const computer = getComputerChoice();

    
    // console.log(`Player chose: ${playerSelection}`);
    // console.log(`Computer chose: ${computer}`);
    
    if (playerSelection === computer) {
        // console.log("It's a tie!");
        roundResult = "Tie";
    } else if (
        (playerSelection === "rock" && computer === "scissors") ||
        (playerSelection === "paper" && computer === "rock") ||
        (playerSelection === "scissors" && computer === "paper")
    ) {
        // console.log(`You Win! ${playerSelection} beats ${computer}`);
        playerScore++;
        roundResult = "Player wins";
    } else {
        // console.log(`You Lose! ${computer} beats ${playerSelection}`);
        computerScore++;
        roundResult = "Computer wins";
    }
    
    updateScoreDisplay();
    updateChoicesDisplay(playerSelection, computer);
    
    
    if (playerScore === 5 || computerScore === 5) {
        const gameButtons = document.querySelectorAll('.game-button');
    
        gameButtons.forEach((button) => {
            button.disabled = true;
        });
    }

    if (playerScore === 5) {
        gameResult = "You Win!!! Congratulations";
        gameResultElement.textContent = `Game Result: ${gameResult}`;
    } else if (computerScore === 5) {
        gameResult = "Computer Wins.. Better luck next time.";
        gameResultElement.textContent = `Game Result: ${gameResult}`;
    }
        // resetGame();
}

const buttons = document.querySelectorAll('button');
    
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        playRound(playerSelection);
    });
});

const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', resetGame);

newGameButton.disabled = false;

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult = "";
    gameResult = "";
    updateScoreDisplay();
    updateChoicesDisplay("", "");

    button.forEach((button) => {
        button.disabled = false;
    });
    gameResultElement.textContent = `Game Result: ${gameResult}`;
}

resetGame();