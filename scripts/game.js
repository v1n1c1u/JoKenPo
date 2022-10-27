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
      gameResult = document.getElementById("result");


paperChoice.addEventListener("click", ()=> {
    let computerChoice = computerPlay();
    let result;
    switch(computerChoice){
        case ROCK:
            choosenOne(computerRockChoice);
            computerChoice = computerRockChoice;
            result = VICTORY;
            break;
        case SCISSORS:
            choosenOne(computerScissorsChoice);
            computerChoice = computerScissorsChoice;
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
    setTimeout(function(){reset(paperChoice, computerChoice)},2000);
});
scissorsChoice.addEventListener("click", ()=> {
    let computerChoice = computerPlay();
    let result;

    switch(computerChoice){
        case ROCK:
            choosenOne(computerRockChoice);
            computerChoice = computerRockChoice;
            result = LOSS;
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
            break;
    }
    choosenOne(scissorsChoice);
    disableOptions();
    animate(scissorsChoice, computerChoice);
    gameResult.innerText = result;
    setTimeout(function(){reset(scissorsChoice, computerChoice)},2000);
});
rockChoice.addEventListener("click", ()=> {
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
            break;
        default:
            choosenOne(computerPaperChoice);
            computerChoice = computerPaperChoice;
            result = LOSS;
            break;
    }
    choosenOne(rockChoice);
    disableOptions();
    animate(rockChoice, computerChoice);
    gameResult.innerText = result;
    setTimeout(function(){reset(rockChoice, computerChoice)},2000);
});
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