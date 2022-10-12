const SCISSORS = "scissors",
      ROCK = "rock",
      PAPER = "paper",
      PROMPT_MESSAGE = "Choose your fighter                            (or type 'q' to quit)",
      RULES = "            Let's play Jo Ken Po ! \n \n"+
                "These are the rules: \n"+
                "   - There are 5 rounds\n"+
                "   - You have to choose between rock, paper and scissors each round\n"+
                "   - You will play against the computer \n"+
                "   - Paper beats rock\n"+
                "   - Rock beats scissors\n"+
                "   - Scissors beats paper";
      
var computerWins = 0,
    playerWins = 0;

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3)+1;
    switch(randomNumber){
        case 1:
            return ROCK;
        case 2:
            return SCISSORS;
        case 3:
            return PAPER;
        default:
            return "apache helicopter";
    }
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === SCISSORS){
        if(computerSelection === PAPER){
            playerWins ++;
            return "You Win! Scissors beats Paper";
        }else if(computerSelection === ROCK){
            computerWins ++;
            return "You Lose! Rock beats Scissors";
        }else if(computerSelection === SCISSORS){
            return "It's a tie! Both chose scissors!";
        }
    }else if(playerSelection === PAPER){
        if(computerSelection === PAPER){
            return "It's a tie! Both chose paper!";
        }else if(computerSelection === ROCK){
            playerWins ++;
            return "You Win! Paper beats Rock";
        }else if(computerSelection === SCISSORS){
            computerWins ++;
            return "You Lose! Scissors beats Paper";
        }
    }else if(playerSelection === ROCK){
        if(computerSelection === PAPER){
            computerWins ++;
            return "You Lose! Paper beats Rock";
        }else if(computerSelection === ROCK){
            return "It's a tie! Both chose rock!";
        }else if(computerSelection === SCISSORS){
            playerWins ++;
            return "You Win! Rock beats Scissors";
        }
    }
}

const choiceIsValid = (choice) => { return (choice === SCISSORS || choice === ROCK || choice === PAPER) }

const game = () => {
    console.log(RULES+"\n \n");

    let computerSelection,
        playerSelection, 
        validChoice,
        quit;

    computerWins = 0,
    playerWins = 0;
    quit = false;

    for(let i = 1; i <= 5; i++){
        console.log(`                  ROUND ${i} \n`);

        validChoice = false;
        playerSelection = String(window.prompt(PROMPT_MESSAGE)).toLowerCase();
        
        while(!validChoice){
            if(playerSelection === 'q'){
                quit = true;
                break;
            }
            if(!choiceIsValid(playerSelection)){
                console.log(`\'${playerSelection}\' is not a valid choice.`);
                playerSelection = String(window.prompt(PROMPT_MESSAGE)).toLowerCase();
            }else{
                validChoice = true;
            }
        }
        if(quit){
            break;
        }
        computerSelection = computerPlay();

        console.log(`Your choice: ${playerSelection}\n`+
                    `Computer's choice: ${computerSelection}\n\n`+
                    `${playRound(playerSelection,computerSelection)}`);
    }
    console.log("---------------- GAME OVER -------------------");
    if(quit){
        console.log(`            YOU QUIT! WHAT A LOSER!`)
    }else{
        var finalMessage = "";
        const ties = 5-playerWins-computerWins;
        if(computerWins > playerWins){
            finalMessage+= `YOU LOSE!\n \nComputer (${computerWins}) x You (${playerWins})     (${ties} ties)`;
        }else if(playerWins > computerWins){
            finalMessage+=`YOU WIN!\n \nYou (${playerWins}) x Computer (${computerWins})     (${ties} ties)`;
        }else{
            finalMessage+=`IT WAS A TIE!\n \nYou (${playerWins}) x Computer (${computerWins})     (${ties} ties)`;
        }
        finalMessage+="\n \n              Thanks for playing!";
    
        console.log(finalMessage);
    }
}