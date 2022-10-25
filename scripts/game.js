document.addEventListener("DOMContentLoaded", () => {

const SCISSORS = "scissors",
      ROCK = "rock",
      PAPER = "paper",
      paperChoice = document.getElementById("player-choice-paper"),
      scissorsChoice = document.getElementById("player-choice-scissors"),
      rockChoice = document.getElementById("player-choice-rock"),
      computerPaperChoice = document.getElementById("computer-choice-paper"),
      computerScissorsChoice = document.getElementById("computer-choice-scissors"),
      computerRockChoice = document.getElementById("computer-choice-rock"),
      gameResult = document.getElementById("result");

    let computerWins = 0,
    playerWins = 0;

paperChoice.addEventListener("click", ()=> {
    let computerChoice = computerPlay();
    let result;
    switch(computerChoice){
        case ROCK:
            computerRockChoice.firstElementChild.style.opacity = "1";
            computerRockChoice.firstElementChild.style.width = "115px";
            computerChoice = computerRockChoice;
            result = ("You Win!");
            break;
        case SCISSORS:
            computerScissorsChoice.firstElementChild.style.opacity = "1";
            computerScissorsChoice.firstElementChild.style.width = "115px";
            computerChoice = computerScissorsChoice;
            result = ("You Lose!");
            break;
        default:
            computerPaperChoice.firstElementChild.style.opacity = "1";
            computerPaperChoice.firstElementChild.style.width = "115px";
            computerChoice = computerPaperChoice;
            result = ("It's  a  tie!");
            break;
    }
    paperChoice.firstElementChild.style.opacity = "1";
    paperChoice.firstElementChild.style.width = "115px";
    animate(paperChoice, computerChoice);
    gameResult.innerText = result;
    setTimeout(function(){reset(paperChoice, computerChoice)},2000);
});
scissorsChoice.addEventListener("click", ()=> {
    let computerChoice = computerPlay();
    let result;

    switch(computerChoice){
        case ROCK:
            computerRockChoice.firstElementChild.style.opacity = "1";
            computerRockChoice.firstElementChild.style.width = "115px";
            computerChoice = computerRockChoice;
            result = ("You Lose!");
            break;
        case SCISSORS:
            computerScissorsChoice.firstElementChild.style.opacity = "1";
            computerScissorsChoice.firstElementChild.style.width = "115px";
            computerChoice = computerScissorsChoice;
            result = ("It's  a  tie!");
            break;
        default:
            computerPaperChoice.firstElementChild.style.opacity = "1";
            computerPaperChoice.firstElementChild.style.width = "115px";
            computerChoice = computerPaperChoice;
            result = ("You Win!");
            break;
    }
    scissorsChoice.firstElementChild.style.opacity = "1";
    scissorsChoice.firstElementChild.style.width = "115px";
    animate(scissorsChoice, computerChoice);
    gameResult.innerText = result;
    setTimeout(function(){reset(scissorsChoice, computerChoice)},2000);
});
rockChoice.addEventListener("click", ()=> {
    let computerChoice = computerPlay();
    let result;

    switch(computerChoice){
        case ROCK:
            computerRockChoice.firstElementChild.style.opacity = "1";
            computerRockChoice.firstElementChild.style.width = "115px";
            computerChoice = computerRockChoice;
            result = ("It's  a  tie!");
            break;
        case SCISSORS:
            computerScissorsChoice.firstElementChild.style.opacity = "1";
            computerScissorsChoice.firstElementChild.style.width = "115px";
            computerChoice = computerScissorsChoice;
            result = ("You Win!");
            break;
        default:
            computerPaperChoice.firstElementChild.style.opacity = "1";
            computerPaperChoice.firstElementChild.style.width = "115px";
            computerChoice = computerPaperChoice;
            result = ("You Lose!");
            break;
    }
    rockChoice.firstElementChild.style.opacity = "1";
    rockChoice.firstElementChild.style.width = "115px";
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
const reset = (playerChoice, computerChoice) => {
    console.log("reset");
    gameResult.innerText = '';
    resetOpacity(playerChoice, computerChoice);
    resetClass(playerChoice, computerChoice);
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
    playerChoice.className = "choice";
    computerChoice.className = "choice";
}

let animate = (playerChoice, computerChoice) => {
    playerChoice.className = "playerChoiceAnimated";
    computerChoice.className = "computerChoiceAnimated";
}
});