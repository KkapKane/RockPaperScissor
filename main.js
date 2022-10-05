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
const playerSelection = "Scissors";
let computerSelection = getComputerChoice();




function game(){
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice();
    console.log("round " + i)
    
   
    
    if (playRound(playerSelection, computerSelection)==='player'){
    playerscore++;
    console.log ("You Win! " + playerSelection + " beats " + computerSelection);}
    else if (playRound(playerSelection, computerSelection)==='bot'){
        compScore++;
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection === "quit"){
        break
    }
    else if (playRound(playerSelection, computerSelection)==='tie'){
        i--;
        console.log("Tie!");
    }
    console.log("Bot score:" + compScore + " " + "Player score:" + playerscore);
    
    
   
   
    
 }
 if (playerscore > compScore) {
    console.log("Player Win!")
    }
    else if (compScore > playerscore){
        console.log('Bot win!')
    }
}

game()
