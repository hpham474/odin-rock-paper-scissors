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

let humanScore = 0;
let computerScore = 0;