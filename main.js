function getComputerChoice () {
    const choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return (random,choices[random]);
}
let playertie = false;
let playerwin = false;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
    
     playerwin = false;
     return 'bot';
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
    
     playerwin = false;
     return 'bot';
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
    
     playerwin = false;
     return 'bot';
    }

    else if (computerSelection === "paper" && playerSelection === "scissors") {
    
     playerwin = true;
     return 'player';
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
    
     playerwin = true;
     return 'player';
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
    
     playerwin = true;
     return 'player';
    }

    else if (computerSelection === playerSelection)
        {  
        return 'tie';
       
        
        }





}


let compScore= 0;
let playerscore = 0;

let computerSelection = getComputerChoice();




function game(){
//for (let i = 0; i < 5; i++) {
    //let playerSelection = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    //console.log("round " + i)
    
   
    
    if (playRound(playerSelection, computerSelection)==='player'){
    playerscore++;
    console.log ("You Win! " + playerSelection + " beats " + computerSelection);
    updateplayerscore()
    
    }
    
    else if (playRound(playerSelection, computerSelection)==='bot'){
        compScore++;
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        updatecompscore()
    }
    //else if (playerSelection === "quit"){
        //break
    //}
    else if (playRound(playerSelection, computerSelection)==='tie'){
        //i--;
        console.log("Tie!");
    }
    console.log("Bot score:" + compScore + " " + "Player score:" + playerscore);
    
    
   
   
    
 //}
 if (playerscore > compScore) {
    console.log("Player Win!")
    }
    else if (compScore > playerscore){
        console.log('Bot win!')
    }
}
// Creating playerscore div

const scorediv = document.querySelector('#scoreboard');
const playerdiv = document.createElement('div');
playerdiv.classList.add('playerscore')
playerdiv.textContent = 'Player Score: 0'
scorediv.appendChild(playerdiv);

// Creating computerscore div


const computerdiv = document.createElement('div');
computerdiv.classList.add('Computerscore')
computerdiv.textContent = 'Computer Score: 0'
scorediv.appendChild(computerdiv);



//---------------Rock Button---------------//

const rockbtn = document.getElementById('rock');
rockbtn.addEventListener('click', setrock => {
    playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    game();
    
});

//---------------Paper Button---------------//

const paperbtn = document.getElementById('paper');
paperbtn.addEventListener('click', setpaper => {
    playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    game();
    
});

//---------------Scissor Button---------------//

const scissorsbtn = document.getElementById('scissors');
scissorsbtn.addEventListener('click', setscissors => {
    playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    game();
    
});


// Make a div and update it with the player's current score

function updateplayerscore() {
    playerdiv.innerHTML = 'Player Score: ' + playerscore;
    //playerdiv.textContent = 'playerscore: ' + playerscore;
    //scorediv.appendChild(playerdiv);
}

//Make a div and update it with the Computer's current score

function updatecompscore() {
    
    computerdiv.innerHTML = 'Computer Score: ' + compScore;
    //computerdiv.textContent = 'Computer Score: ' + compScore;
    //scorediv.appendChild(computerdiv);
}

