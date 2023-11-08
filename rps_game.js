// Initializes game variables

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerSelection = 0;
let playerSelection = 0;

// DOM elements setup

// Creates Round Info text
const roundContainer = document.querySelector("#round_container");
const roundContent = document.createElement("p");
roundContent.textContent = "Round 1";
roundContainer.appendChild(roundContent);

// Creates Result Info text
const resultContainer = document.querySelector("#results_container");
const resultContent = document.createElement("p");
resultContent.textContent = "Choose your move to start the game!";
resultContainer.appendChild(resultContent);

// Creates Score texts
const playerScoreContainer = document.querySelector("#player_score");
const playerScoreContent = document.createElement("p");
playerScoreContent.textContent = `Player : ${playerScore}`;
playerScoreContainer.appendChild(playerScoreContent);

const computerScoreContainer = document.querySelector("#computer_score");
const computerScoreContent = document.createElement("p");
computerScoreContent.textContent = `${computerScore} : Computer`;
computerScoreContainer.appendChild(computerScoreContent);

// Creates "Start Game" button
const startGameButtonContainer = document.querySelector("#star_game_button_container");
const startGameButton = document.createElement("button");
startGameButton.textContent = "Play Again";
startGameButton.classList.add('restart_button');
startGameButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    computerSelection = 0;
    playerSelection = 0;
    roundContent.textContent = `Round ${roundNumber}`;
    playerScoreContent.textContent = `Player : ${playerScore}`;
    computerScoreContent.textContent = `${computerScore} : Computer`;
    resultContent.textContent = "Choose your move to start the game!";
    startGameButtonContainer.removeChild(startGameButton);
  });

// getComputerChoice function:
//      Selects a random number from 1 to 3 and stores it into a randomNumber variable
//      Assigns to a variable computerSelection rock, paper or scissors depending on the number generated and returns it 

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber == 1 ) {
        let computerSelection = "rock"; 
        return computerSelection;
    }
    else if ( randomNumber == 2 ) {
        let computerSelection = "paper";
        return computerSelection;
    }
    else {
        let computerSelection = "scissors";
        return computerSelection;
    }
};

// playRound function:
//      Takes the playerSelection and the computerSelection variables and compares them to determine who wins
//      If player wins it returns 1 point and none if the computer wins.

function playRound(playerSelection, computerSelection) {   
    if (
        ( playerSelection === "rock" && computerSelection === "scissors" ) ||
        ( playerSelection === "paper" && computerSelection === "rock" ) || 
        ( playerSelection === "scissors" && computerSelection === "paper" ) && 
        ( computerScore <= 5 || playerScore <= 5 )) {
        playerScore = playerScore + 1;
        resultContent.textContent = (`Player selected: "${playerSelection}". Computer selected: "${computerSelection}". - You won this round!`);
        roundNumber = roundNumber + 1;
        roundContent.textContent = `Round ${roundNumber}`;
        playerScoreContent.textContent = `Player : ${playerScore}`;
        computerScoreContent.textContent = `${computerScore} : Computer`;
        }
    else if (
        ( playerSelection === "scissors" && computerSelection === "rock" ) ||
        ( playerSelection === "rock" && computerSelection === "paper" ) || 
        ( playerSelection === "paper" && computerSelection === "scissors" ) && 
        ( computerScore <= 5 || playerScore <= 5 ))  {
        computerScore = computerScore + 1;
        resultContent.textContent = (`Player selected: "${playerSelection}". Computer selected: "${computerSelection}". - Computer won this round!`);
        roundNumber = roundNumber + 1;
        roundContent.textContent = `Round ${roundNumber}`;
        playerScoreContent.textContent = `Player : ${playerScore}`;
        computerScoreContent.textContent = `${computerScore} : Computer`;
        }
    else if ( playerSelection === computerSelection ) {
        resultContent.textContent = (`Player selected: "${playerSelection}". Computer selected: "${computerSelection}". - It's a tie!`);
        roundNumber = roundNumber + 1;
        roundContent.textContent = `Round ${roundNumber}`;
        }
    if ( playerScore == 5 ) {
        playerScoreContent.textContent = `Player : ${playerScore}`;
        computerScoreContent.textContent = `${computerScore} : Computer`;
        roundContent.textContent = `Round ${roundNumber}`;
        startGameButtonContainer.appendChild(startGameButton);
    }
    else if ( computerScore == 5 ) {
        playerScoreContent.textContent = `Player : ${playerScore}`;
        computerScoreContent.textContent = `${computerScore} : Computer`;
        roundContent.textContent = `Round ${roundNumber}`;
        startGameButtonContainer.appendChild(startGameButton);
    }
};

// Assigns events to buttons

function addButtonValueRock(){
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function addButtonValuePaper(){
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function addButtonValueScissors(){
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};

const btnRock = document.querySelector("#btn_rock");
btnRock.addEventListener('click', addButtonValueRock);

const btnPaper = document.querySelector("#btn_paper");
btnPaper.addEventListener('click', addButtonValuePaper); 

const btnScissors = document.querySelector("#btn_scissors");
btnScissors.addEventListener('click', addButtonValueScissors);

// Removes events once the score is met (not working)

if ( playerScore === 5 || computerScore === 5 ) {
    console.log("Its 5!");
    btnRock.removeEventListener('click', addButtonValueRock);
    btnPaper.removeEventListener('click', addButtonValuePaper);
    btnScissors.removeEventListener('click', addButtonValueScissors);
};