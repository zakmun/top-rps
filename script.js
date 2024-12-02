const r = "rock";
const p = "paper";
const s = "Scissors"

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(randNum) {

    cpuRand = Math.floor(Math.random() * randNum)
    console.log(cpuRand)

    if (cpuRand === 0) {
        return (r);
    } else if (cpuRand === 1) {
        return (p);
    } else  {
        return (s);
    }
    
}

console.log(getComputerChoice(3))






// function getHumanChoice() {

//     const selectRPS = prompt('Type Rock, Paper or Scissors')
//     console.log(selectRPS)
// }

// getHumanChoice();

function playRound(humanChoice, computerChoice) {

}