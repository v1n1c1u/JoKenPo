document.addEventListener("DOMContentLoaded", () => {

const SCISSORS = "scissors",
      ROCK = "rock",
      PAPER = "paper",
      VICTORY = "You Win!",
      LOSS = "You Lose!",
      TIE = "It's  a  tie!",
      paperChoice = document.getElementById("player-choice-paper"),
      scissorsChoice = document.getElementById("player-choice-scissors"),
      rockChoice = document.getElementById("player-choice-rock"),
      computerPaperChoice = document.getElementById("computer-choice-paper"),
      computerScissorsChoice = document.getElementById("computer-choice-scissors"),
      computerRockChoice = document.getElementById("computer-choice-rock"),
      gameResult = document.getElementById("result"),
      playerScore = document.getElementById("player-score"),
      computerScore = document.getElementById("computer-score"),
      roundCounter = document.getElementById("round-text"),
      restartButton = document.getElementById("restart-button");

let round = 1,
    computerWins = 0,
    playerWins = 0;

paperChoice.addEventListener("click", ()=> {
    if(optionIsEnabled(paperChoice)){
        let computerChoice = computerPlay();
        let result;
        switch(computerChoice){
            case ROCK:
                choosenOne(computerRockChoice);
                computerChoice = computerRockChoice;
                result = VICTORY;
                playerWins++;
                break;
            case SCISSORS:
                choosenOne(computerScissorsChoice);
                computerChoice = computerScissorsChoice;
                computerWins++;
                result = LOSS;
                break;
            default:
                choosenOne(computerPaperChoice);
                computerChoice = computerPaperChoice;
                result = TIE;
                break;
        }
        choosenOne(paperChoice);
        disableOptions();
        animate(paperChoice, computerChoice);
        gameResult.innerText = result;
        round++;
        setTimeout(function(){reset(paperChoice, computerChoice)},2000);
    }
    
});
scissorsChoice.addEventListener("click", ()=> {
    if(optionIsEnabled(scissorsChoice)){
        let computerChoice = computerPlay();
        let result;

        switch(computerChoice){
            case ROCK:
                choosenOne(computerRockChoice);
                computerChoice = computerRockChoice;
                result = LOSS;
                computerWins++;
                break;
            case SCISSORS:
                choosenOne(computerScissorsChoice);
                computerChoice = computerScissorsChoice;
                result = TIE;
                break;
            default:
                choosenOne(computerPaperChoice);
                computerChoice = computerPaperChoice;
                result = VICTORY;
                playerWins++;
                break;
        }
        choosenOne(scissorsChoice);
        disableOptions();
        animate(scissorsChoice, computerChoice);
        gameResult.innerText = result;
        round++;
        setTimeout(function(){reset(scissorsChoice, computerChoice)},2000);
    }
});
rockChoice.addEventListener("click", ()=> {
    if(optionIsEnabled(rockChoice)){
        let computerChoice = computerPlay();
        let result;

        switch(computerChoice){
            case ROCK:
                choosenOne(computerRockChoice);
                computerChoice = computerRockChoice;
                result = TIE;
                break;
            case SCISSORS:
                choosenOne(computerScissorsChoice);
                computerChoice = computerScissorsChoice;
                result = VICTORY;
                playerWins++;
                break;
            default:
                choosenOne(computerPaperChoice);
                computerChoice = computerPaperChoice;
                result = LOSS;
                computerWins++;
                break;
        }
        choosenOne(rockChoice);
        disableOptions();
        animate(rockChoice, computerChoice);
        gameResult.innerText = result;
        round++;
        setTimeout(function(){reset(rockChoice, computerChoice)},2000);
    }
});

restartButton.addEventListener("click", ()=> {
    resetCounters();
    updateScoresAndRound();
})
const computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3)+1;
    switch(randomNumber){
        case 1:
            return ROCK;
        case 2:
            return SCISSORS;
        default:
            return PAPER;
    }
}
const choosenOne = (element) => {
    element.firstElementChild.style.opacity = "1";
    element.firstElementChild.style.width = "115px";
}

const optionIsEnabled = (option) => {
    return option.className === 'player-choice';
}

const disableOptions = () => {
    rockChoice.className = "disabled-option";
    scissorsChoice.className = "disabled-option";
    paperChoice.className = "disabled-option";
}
const enableOptions = () => {
    rockChoice.className = "player-choice";
    scissorsChoice.className = "player-choice";
    paperChoice.className = "player-choice";
}
const reset = (playerChoice, computerChoice) => {
    gameResult.innerText = '';
    resetOpacity(playerChoice, computerChoice);
    resetClass(playerChoice, computerChoice);
    enableOptions();
    resetSize(playerChoice, computerChoice);
    resetPosition(playerChoice, computerChoice);
    updateScoresAndRound();
}

const updateScoresAndRound = () => {
    playerScore.innerText = playerWins;
    computerScore.innerText = computerWins;
    roundCounter.innerText = round;
}

const resetCounters = () => {
    playerWins = 0;
    computerWins = 0;
    round = 1;
    updateScoresAndRound();
}

const resetOpacity = (playerChoice, computerChoice) => {
    playerChoice.firstElementChild.style.opacity = "0.5";
    computerChoice.firstElementChild.style.opacity = "0.5";
}
const resetSize = (playerChoice, computerChoice) => {
    playerChoice.firstElementChild.style.width = "110px";
    computerChoice.firstElementChild.style.width = "110px";
}

const resetPosition = (playerChoice, computerChoice) => {
    playerChoice.firstElementChild.style.bottom = "0px";
    computerChoice.firstElementChild.style.top = "0px";
}

const resetClass = (playerChoice, computerChoice) => {
    playerChoice.className = "player-choice";
    computerChoice.className = "computer-choice";
}

let animate = (playerChoice, computerChoice) => {
    playerChoice.className = "playerChoiceAnimated";
    computerChoice.className = "computerChoiceAnimated";
}
});