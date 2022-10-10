const SCISSORS = "scissors",
      ROCK = "rock",
      PAPER = "paper";

var computerWins = 0,
    playerWins = 0;

const computerPlay = () => {
    let num = Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            return "rock"
        case 2:
            return "scissors"
        case 3:
            return "paper"
        default:
            return `Oh no! Something went wrong!`
    }
}

const playRound = (playerSelection=null, computerSelection=null) => {
    if(playerSelection === SCISSORS && computerSelection === PAPER){
        playerWins ++;
        return "You Win! Scissors beats Paper"
    }else if(playerSelection === SCISSORS && computerSelection === ROCK){
        computerWins ++;
        return "You Lose! Rock beats Scissors"
    }else if(playerSelection === SCISSORS && computerSelection === SCISSORS){
        return "It's a tie! Both chose scissors!"
    }else if(playerSelection === PAPER && computerSelection === PAPER){
        return "It's a tie! Both chose paper!"
    }else if(playerSelection === PAPER && computerSelection === ROCK){
        playerWins ++;
        return "You Win! Paper beats Rock"
    }else if(playerSelection === PAPER && computerSelection === SCISSORS){
        computerWins ++;
        return "You Lose! Scissors beats Paper"
    }else if(playerSelection === ROCK && computerSelection === PAPER){
        computerWins ++;
        return "You Lose! Paper beats Rock"
    }else if(playerSelection === ROCK && computerSelection === ROCK){
        return "It's a tie! Both chose rock!"
    }else if(playerSelection === ROCK && computerSelection === SCISSORS){
        playerWins ++;
        return "You Win! Rock beats Scissors"
    }
}

const choiceIsValid = (choice) => { return (choice === SCISSORS || choice === ROCK || choice === PAPER) }

const game = () => {
    console.log("Let's play Jo Ken Po ! \n");
    let computerSelection, playerSelection, validChoice, quit;

    computerWins = 0,
    playerWins = 0;
    quit = false;

    for(let i = 1; i <= 5; i++){
        console.log(`                  ROUND ${i} \n`);

        validChoice = false;
        playerSelection = String(window.prompt("Choose your fighter                            (or type 'q' to quit)")).toLowerCase();
        while(!validChoice){
            if(playerSelection==='q'){
                quit = true;
                break;
            }
            if(!choiceIsValid(playerSelection)){
                console.log(`\'${playerSelection}\' is not a valid choice. Choose between rock, scissors and paper only.`);
                playerSelection = String(window.prompt("Choose your fighter                            (or type 'q' to quit)")).toLowerCase();
            }else{
                validChoice = true;
            }
        }
        if(quit){
            break;
        }
        computerSelection = computerPlay();

        console.log(`Your choice: ${playerSelection} \nComputer's choice: ${computerSelection}\n\n${playRound(playerSelection,computerSelection)}`);
    }
    if(quit){
        console.log("---------------- GAME OVER -------------------");
        console.log(`            YOU QUIT! WHAT A LOSER!`)
    }else{
        console.log("---------------- GAME OVER -------------------");
        var finalMessage = "";
        if(computerWins > playerWins){
            finalMessage+= `YOU LOSE!\n \nComputer (${computerWins}) x You (${playerWins})  (${5-playerWins-computerWins} ties)`;
        }else if(playerWins > computerWins){
            finalMessage+=`YOU WIN!\n \nYou (${playerWins}) x Computer (${computerWins})  (${5-playerWins-computerWins} ties)`;
        }else{
            finalMessage+=`IT WAS A TIE!\n \nYou (${playerWins}) x Computer (${computerWins})  (${5-playerWins-computerWins} ties)`;
        }
        finalMessage+="\n \n            Thanks for playing!";
    
        console.log(finalMessage);
    }
}