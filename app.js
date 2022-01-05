let playerScore=0;
let computerScore=0;
const playerScore_span = document.getElementById('player-score-label');
const computerScore_span = document.getElementById('computer-score-label');
const scoreboard_div = document.querySelector('.scoreboard');
const winner_p = document.querySelector('.winner > p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}

function victory(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    winner_p.innerHTML = `${playerSelection} beats ${computerSelection}. The computer is defeated for now.`;
    document.getElementById(playerSelection).classList.add('glow-up');
    setTimeout(function() { document.getElementById(playerSelection).classList.remove('glow-up')}, 300);
    if (playerScore==3) { 
        winner_p.innerHTML = 'The Computers have been defeated and humanity has been saved!'
        let playerScore = 0;
        let computerScore = 0;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
    }

}

function loss(playerSelection, computerSelection) { 
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    winner_p.innerHTML = `${computerSelection} beats ${playerSelection}. You have lost for now!`;
    document.getElementById(playerSelection).classList.add('glow-down');
    setTimeout(function() { document.getElementById(playerSelection).classList.remove('glow-down')}, 300);
    if (computerScore==3) { 
        winner_p.innerHTML = 'Humanity has been defeated by the Computers, may mercy be upon us.'
        let playerScore = 0;
        let computerScore = 0;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
    }
}

function tie(playerSelection, computerSelection) { 
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    winner_p.innerHTML = `Your ${playerSelection} collides with the computer's ${computerSelection}. It's a tie!`;
    document.getElementById(playerSelection).classList.add('glow-tie');
    setTimeout(function() { document.getElementById(playerSelection).classList.remove('glow-tie')}, 300);

}


function game(playerSelection) {
    const computerSelection = computerPlay(); 
    //switch used to replace if else statements from old_script.
    //makes things look prettier and more concise.
    switch (playerSelection + computerSelection) { 
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper": 
            victory(playerSelection, computerSelection);
            break; 
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            loss(playerSelection, computerSelection);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(playerSelection, computerSelection);
            break;
    }
}



function play() {
    rock_div.addEventListener('click', function() {
        game('Rock')
    })
    
    paper_div.addEventListener('click', function() {
        game('Paper')
    })
    
    scissors.addEventListener('click', function() {
        game('Scissors')
    })
}



play();

