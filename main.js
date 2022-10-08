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

    
    computerSelection = getComputerChoice();
    
    
   
    
    if (playRound(playerSelection, computerSelection)==='player'){
    playerscore++;
    
    resultdiv.innerHTML = 'Player win! ' + playerSelection + ' beats ' + computerSelection;
    updateplayerscore()
    
    }
    
    else if (playRound(playerSelection, computerSelection)==='bot'){
        compScore++;
        
        updatecompscore()
        resultdiv.innerHTML = 'Computer win! ' + computerSelection + ' beats ' + playerSelection;
    }
    
    else if (playRound(playerSelection, computerSelection)==='tie'){
        
        resultdiv.innerHTML = 'DRAW';
        
    }
    
    if (playerscore >= 5 || compScore >=5){
        playerscore = 0;
        compScore = 0;
        resultdiv.innerHTML = 'The winner is player!'
        
    }

    
    

   
   
    
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
    //bodydiv.style.cssText = "background-image: url(rock.gif)";
})


//---------------Paper Button---------------//

const paperbtn = document.getElementById('paper');
paperbtn.addEventListener('click', setpaper => {
    playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    game();
    
});
paperbtn.addEventListener('mouseover', hoveredpaper => {
    //bodydiv.style.cssText = "background-image: url(paper.gif)";
})


//---------------Scissor Button---------------//

const scissorsbtn = document.getElementById('scissors');
scissorsbtn.addEventListener('click', setscissors => {
    playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    game();
    
});
scissorsbtn.addEventListener('mouseover', hoveredgif => {
    //bodydiv.style.cssText = "background-image: url(blue-cut.gif)";
})


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


