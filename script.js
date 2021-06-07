let humanScore = 0;
let computerScore = 0;

function computerInput(){
    let computer = Math.floor(Math.random()*3)

    switch (computer) {
        case 0:
            return 'scissor';
        case 1:
            return 'paper';
        case 2:
            return 'rock';
        default:
            break;
    }
}

function playerInput(){
    let pinput = prompt('Play something').toLowerCase();
    return pinput;
}

function checkWinner(player, computer){
    if (player === computer){
        console.log(`Player: ${player}. \nComputer: ${computer}\nNo winner this round`);
    }
    if (player == 'scissor' && computer == 'paper' ){
        humanScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nPlayer wins`)
    } 
    if (player == 'paper' && computer == 'rock' ){
        humanScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nPlayer wins`)
    }
    if (player == 'rock' && computer == 'scissor' ){
        humanScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nPlayer wins`)
    }
    if (computer == 'paper' && player == 'rock' ){
        computerScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nComputer wins`)
    }
    if (computer == 'rock' && player == 'scissor' ){
        computerScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nComputer wins`)
    }
    if (computer == 'scissor' && player == 'paper' ){
        computerScore ++;
        console.log(`Player: ${player}. \nComputer: ${computer}\nComputer wins`)
    }

}

function playRound(){
    let player = playerInput();
    let computer = computerInput();

    checkWinner(player, computer);
}


function game(times){
    for (let index = 0; index < times; index++) {
        playRound();
    }
    console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
    if (humanScore === computerScore) {
        console.log('Even steven');
    }else if(humanScore > computerScore){
        console.log('Player Wins');
    }else{
        console.log('Computer Wins');
    }

}

game(5);