/* Pseudocode:

getComputerChoice function
    create a computerSelection variable
    picks a random number from 1 to 3 and store it in computerChoice
        if 1 choose Rock
        if 2 choose Paper
        else choose Scissors

*/

/*

getPlayerChoice function
    create a playerChoice variable
    ask the user to enter Rock, Paper or Scissors
    convert choice to lowercase
    validate if its correct
    if correct store in playerSelection

*/

/* 

playRound function with playerSelection and computerSelection as parameters
    if playerSelection == computerSelection
    return TIE
    else if playerSelection == "rock" && computerSelection == "scissors"
        print You won this round!
        return 1
    else if playerSelection == "paper" && computerSelection == "rock"
        print You won this round!
        return 1
    else if playerSelection == "scissors" && computerSelection == "paper"
        print You won this round!
        return 1
    else
        print Computer wins this round!

*/

/* 

game function
playround 5 times     

*/