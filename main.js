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
     return false;
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    console.log ("You Lose! Scissors beats Paper");
     playerwin = false;
     return false;
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
    console.log ("You Lose! Paper beats Rock");
     playerwin = false;
     return false;
    }

    else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    console.log ("You Win! Scissors beats Paper");
     playerwin = true;
     return true;
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
    console.log ("You Win! Paper beats Rock");
     playerwin = true;
     return true;
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    console.log ("You Win! Rock beats Scissors");
     playerwin = true;
     return true;
    }

        else 
        {  
        console.log ("Tie!");
        playertie = true;
        return(playertie)
        }




console.log (computerSelection)
console.log(playerwin)
return(playerwin)
}


let playerlose = 0;
let playerscore = 0;
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playerSelection);
let findWinner = (playRound(playerSelection, computerSelection));
console.log(findWinner);

function game(){
for (let i = 0; i < 5; i++) {
    findWinner
    if (findWinner === true){
        playerscore++;
    }
    console.log(playerscore)
   
    
 }
}

game()
