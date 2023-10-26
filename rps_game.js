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

// playRound function:
//      Takes the playerSelection and the computerSelection variables and compares them to determine who wins
//      If player wins it returns 1 point and none if the computer wins.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    console.log(`Player selected: "${playerSelection}"\nComputer selected: "${computerSelection}"\n`)
    if ( playerSelection == computerSelection ) {
        console.log("It's a tie!")  
        return 0;
    }
    else if ( playerSelection == "rock" && computerSelection == "scissors" ) {
        console.log("You won this round!")
        return 1; 
    }
    else if ( playerSelection == "paper" && computerSelection == "rock" ) {
        console.log("You won this round!") 
        return 1; 
    }
    else if ( playerSelection == "scissors" && computerSelection == "paper" ) {
        console.log("You won this round!")
        return 1; 
    }
    else {
        console.log("The computer wins this round") 
        return 0;
    }
}

// Game starts running below:

// playerSelection variable is hardcoded for now, but later it will be inputted by the user

let playerSelection = "Paper";

// The computerSelection is assigned running the getComputerChoice function

const computerSelection = getComputerChoice();

// The round is played taking the playerSelection and computerSelection into the playRound function. The result is printed on the console.

console.log(playRound(playerSelection, computerSelection));