function getComputerChoice () {
    const choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return (random,choices[random]);
}
let playertie = false;
let playerwin = false;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
    console.log ("You Lose! Rock beats Scissors");
     playerwin = false;
     return 'bot';
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    console.log ("You Lose! Scissors beats Paper");
     playerwin = false;
     return 'bot';
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
    console.log ("You Lose! Paper beats Rock");
     playerwin = false;
     return 'bot';
    }

    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    console.log ("You Win! Scissors beats Paper");
     playerwin = true;
     return 'player';
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
    console.log ("You Win! Paper beats Rock");
     playerwin = true;
     return 'player';
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    console.log ("You Win! Rock beats Scissors");
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
const playerSelection = "Scissors";
let computerSelection = getComputerChoice();




function game(){
for (let i = 1; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    console.log("round " + i)
    console.log("Player Choice: " + playerSelection);
    console.log("Computer Choice: " + computerSelection)
    
    if (playRound(playerSelection, computerSelection)==='player'){
    playerscore++;}
    else if (playRound(playerSelection, computerSelection)==='bot'){
        compScore++;
    }
    else if (playRound(playerSelection, computerSelection)==='tie'){
        i--;
    }
    console.log("Bot score is " + compScore);
    console.log("Player score is " + playerscore);
    
   
   
    
 }
}

game()
