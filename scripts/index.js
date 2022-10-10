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
    let computerSelection, playerSelection, validChoice;

    computerWins = 0,
    playerWins = 0;

    for(let i = 1; i <= 5; i++){
        console.log(`                  ROUND ${i} \n`);

        validChoice = false;
        playerSelection = String(window.prompt("Choose your fighter")).toLowerCase();
        while(!validChoice){
            if(!choiceIsValid(playerSelection)){
                console.log(`\'${playerSelection}\' is not a valid choice. Choose between rock, scissors and paper only.`);
                playerSelection = String(window.prompt("Choose your fighter")).toLowerCase();
            }else{
                validChoice = true;
            }
        }
        computerSelection = computerPlay();

        console.log(`Your choice: ${playerSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
    }

    console.log("---------------- GAME OVER ------------------- \n \n")
    if(computerWins > playerWins){
        console.log(`The machine won the game!\n Computer (${computerWins}) - You (${playerWins})`)
    }else if(playerWins > computerWins){
        console.log(`You won the game!\n You (${playerWins}) - Computer (${computerWins})`)
    }else{
        console.log(`It was a tie!\n You (${playerWins}) - Computer (${computerWins})`)
    }
    console.log("\n \n                   Thanks for playing!")
}