function getComputerChoice () {
    const choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return (random,choices[random]);
}
let playertie = false;
let playerwin = false;
// function to compare scores
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
//function to see if key is pressed. restart score if so
document.addEventListener('keydown', (event) => {
        playerscore = 0;
        compScore = 0;
        updateplayerscore();
        updatecompscore();
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
        resultdiv.textContent = '';
})

let compScore= 0;
let playerscore = 0;

let computerSelection = getComputerChoice();




function game(){

      
    computerSelection = getComputerChoice();
    
    
   
    
    if (playRound(playerSelection, computerSelection)==='player'){
    playerscore++;
    
    resultdiv.textContent = 'Player win!' + playerSelection + 'beats ' + computerSelection;
    updateplayerscore()
    
    }
    
    else if (playRound(playerSelection, computerSelection)==='bot'){
        compScore++;
        
        updatecompscore()
        resultdiv.textContent = 'Computer win!' + computerSelection + 'beats ' + playerSelection;
    }
    
    else if (playRound(playerSelection, computerSelection)==='tie'){
        
        resultdiv.textContent = 'DRAW';
        
    }
    restartgame();
    

   
   
    
}




// Creating playerscore div

const bodydiv = document.querySelector('body');
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

// create result div

const btnboxdiv = document.querySelector('.btnbox');
const resultdiv = document.createElement('div');
resultdiv.classList.add('result')
resultdiv.textContent = ''
btnboxdiv.appendChild(resultdiv);



//---------------Rock Button---------------//

const rockbtn = document.getElementById('rock');
rockbtn.addEventListener('click', setrock => {
    playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    game();
    
});
rockbtn.addEventListener('mouseover', hoveredrock => {
   
})


//---------------Paper Button---------------//

const paperbtn = document.getElementById('paper');
paperbtn.addEventListener('click', setpaper => {
    playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    game();
    
});
paperbtn.addEventListener('mouseover', hoveredpaper => {

})


//---------------Scissor Button---------------//

const scissorsbtn = document.getElementById('scissors');
scissorsbtn.addEventListener('click', setscissors => {
    playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    game();
    
});
scissorsbtn.addEventListener('mouseover', hoveredgif => {
    
})


// Make a div and update it with the player's current score

function updateplayerscore() {
    playerdiv.textContent = 'Player Score: ' + playerscore;
    
}

//Make a div and update it with the Computer's current score

function updatecompscore() {
    
    computerdiv.textContent = 'Computer Score: ' + compScore;
    
}






//disable buttons when either player reaches 5 or more pts

function restartgame(){
    if (playerscore >= 5){
        
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        resultdiv.textContent = 'The winner is player!\nPress any key to restart';
        
    }
    else if (compScore >= 5){
        
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        resultdiv.textContent = 'The winner is computer!\nPress any key to restart';
    }  
    
}

