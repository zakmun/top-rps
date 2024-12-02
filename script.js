const r = "rock";
const p = "paper";
const s = "Scissors"

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(randNum) {

    cpuRand = Math.floor(Math.random() * randNum)

    if (cpuRand === 0) {
        console.log((r));
    } else if (cpuRand === 1) {
        console.log((p));
    } else  {
        console.log((s));
    }
    
}

getComputerChoice(3)






function getHumanChoice() {

    const selectRPS = prompt('Type Rock, Paper or Scissors')
    console.log(selectRPS)
}

getHumanChoice();

function playRound(humanChoice, computerChoice) {
    
}