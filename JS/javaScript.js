//function to get computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock'
    } else if (choice === 2) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

let computerSelection;
let playerSelection;
let player = 0;
let computer = 0;

//function to declare a winner, loser or tie of the round
function playRound(computerSelection, playerSelection) {
  
    //if to validate the player's selection
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
        return 'Invalid option, please select "rock", "paper", or "scissor"';
    }
    //if to select a winner, loser or tie
    /*In each round, the value of computer or player is increased
     to declare a winner after multiple rounds*/
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computer++;
        return 'You Lose this round!! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        player++;
        return 'You Win this round!! Rock beats Scissor'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        player++
        return 'You Win this round!! Paper beats Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computer++;
        return 'You Lose this round!! Scissor beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        player++
        return 'You Win this round!! Scissor beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computer++;
        return 'You Lose this round!! Rock beats Scissor';
    } else {
        return 'Tie'
    }
}
//function to play multiple rounds
function playGame() {
    for(let i = 0; i<5; i++){
    computerSelection = getComputerChoice();
    playerSelection = prompt('Rock Paper or Scissor').toLowerCase();
    playRound(computerSelection, playerSelection);
    console.log(playRound(computerSelection, playerSelection));
    } 
//if to declare a winner of all rounds
    if(player > computer){
       console.log ("you win!");
    }else {
        console.log("you lose!")
    }
}
playGame();




