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

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
        }
        else if(computerChoice === "paper") {
            computerScore++;
        } 
        else if(computerChoice === "scissors") {
            humanScore++;
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            humanScore++;
        }
        else if(computerChoice === "paper") {
        } 
        else if(computerChoice === "scissors") {
            computerScore++;
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            computerScore++;
        }
        else if(computerChoice === "paper") {
            humanScore++;
        } 
        else if(computerChoice === "scissors") {
        }
        else {
            console.log("Weird choices have been made")
        }
    }
    else {
        console.log("Weird choices have been made")
    }
}

function changeScore() {
    const score = document.querySelector(".score");
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector(".selection");
selection.addEventListener("click", (event) => {
    let target = event.target;

    let humanChoice = target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    changeScore();
})
