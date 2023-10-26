// getComputerChoice function:
//      Selects a random number from 1 to 3 and stores it into a randomNumber variable
//      Assigns to a variable computerSelection rock, paper or scissors depending on the number generated and returns it 

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber == 1 ) {
        let computerSelection = "rock" 
        return computerSelection;
    }
    else if ( randomNumber == 2 ) {
        let computerSelection = "paper"
        return computerSelection;
    }
    else {
        let computerSelection = "scissors" 
        return computerSelection;
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Please type Rock, Paper or Scissors:");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

// playRound function:
//      Takes the playerSelection and the computerSelection variables and compares them to determine who wins
//      If player wins it returns 1 point and none if the computer wins.

function playRound(playerSelection, computerSelection) {   
        console.log(`Player selected: "${playerSelection}"\nComputer selected: "${computerSelection}"\n`);
        if ( playerSelection == computerSelection ) {
            console.log(`It's a tie!`);  
            console.log(`Scores are: You "${playerScore}" - Computer "${computerScore}"`);
            roundNumber = roundNumber + 1;
        }
        else if ( playerSelection == "rock" && computerSelection == "scissors" ) {
            playerScore = playerScore + 1;
            console.log(`You won this round!`);
            console.log(`Scores are: You "${playerScore}" - Computer "${computerScore}"`);
            roundNumber = roundNumber + 1;
            return playerScore;
        }
        else if ( playerSelection == "paper" && computerSelection == "rock" ) {
            playerScore = playerScore + 1;
            console.log(`You won this round!`);
            console.log(`Scores are: You "${playerScore}" - Computer "${computerScore}"`);
            roundNumber = roundNumber + 1;
            return playerScore;
        }
        else if ( playerSelection == "scissors" && computerSelection == "paper" ) {
            playerScore = playerScore + 1;
            console.log(`You won this round!`);
            console.log(`Scores are: You "${playerScore}" - Computer "${computerScore}"`);
            roundNumber = roundNumber + 1;
            return playerScore;
        }
        else {
            computerScore = computerScore + 1;
            console.log(`Computer won this round!`); 
            console.log(`Scores are: You "${playerScore}" - Computer "${computerScore}"`);
            roundNumber = roundNumber + 1;
            return computerScore;
        }
}

// Game function:
// Runs a for loop 5 times and on each round gets the user and computer choices and executes the playRound function. 
// If the player or the computer gets 3 points it wins, if not, whoever has more points in the 5th round wins.
// If the player and computer have the same points on round 5 then it's a tie.

function game() {    
    console.log("Welcome to Rock/Paper/Scissors!");
    for ( let i = 0; i <= 4; i++ ) {
        if ( roundNumber == 1 ) {
            console.log("Let's start! Round 1!")
            }
        else {
            console.log(`Round ${roundNumber}`);  
        }
        console.log("Please make your selection!");
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if ( playerScore == 3 ) {
            console.log("You have won the game!");
            return keepGoing = false;
        }
        else if ( computerScore == 3 ) {
            console.log("The computer won the game!");
            return keepGoing = false;
        }
        else if ( i == 4) {
            console.log(`Game over! Final scores are:`);
            console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
            if ( playerScore == computerScore ) {
                console.log(`The game is a tie!`);
                return keepGoing = false;
            }
            else if ( playerScore > computerScore ) {
                console.log(`You won the game!`);
                return keepGoing = false;
            }
            else {
                console.log(`The computer won the game!`);
                return keepGoing = false;
            }
        }
        else {
            console.log("Lets keep playing! Next round!");
        }
    }
}

// Initializes game variables

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let keepGoing = true;
let computerSelection = 0;
let playerSelection = 0;

// Game function starts the game

game();