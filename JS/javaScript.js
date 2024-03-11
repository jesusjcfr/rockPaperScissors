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

//function to declare a winner, loser or tie
function playRound(computerSelection, playerSelection) {
    //if to validate the player's selection
    if(playerSelection !== 'rock' || 'paper' || 'scissor'){
        return 'Invalid option, please select "rock, paper or scissor"';
    }
    //if to select a winner, loser or tie
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose!! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You Win!! Rock beats Scissor'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win!! Paper beats Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose!! Scissor beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win!! Scissor beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose!! Rock beats Scissor';
    }else{
        return 'Tie'
    }
}

    let computerSelection = getComputerChoice();
    let playerSelection = prompt('rock, paper or scissor?').toLowerCase();

    let win = playRound(computerSelection, playerSelection);
    console.log(win);

