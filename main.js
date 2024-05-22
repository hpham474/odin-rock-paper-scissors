function getComputerChoice() {
    result = Math.floor((Math.random()) * 3) + 1;

    switch (result) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "error";
    }
}

function getHumanChoice() {
    let choice = "error";
    do {
        choice = prompt("Rock, paper, or scissors?");
    } while (!humanChoiceValidation(choice.toLowerCase()));

    return choice.toLowerCase();
}

function humanChoiceValidation(text) {
    if (text != "rock" && text != "paper" && text != "scissors") {
        console.log("Invalid input");
        return false;
    }
    return true;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("Tie! Rock equals Rock.");
        }
        else if(computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } 
        else if(computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if(computerChoice === "paper") {
            console.log("Tie! Paper equals Paper");
        } 
        else if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else if(computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } 
        else if(computerChoice === "scissors") {
            console.log("Tie! Scissors equals Scissors");
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else {
        console.log("Weird choices have been made")
    }
}

let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector(".selection");
selection.addEventListener("click", (event) => {
    let target = event.target;

    let humanChoice = target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

//playGame();
