const r = "rock";
const p = "paper";
const s = "Scissors"

let humanScore = 0;
let computerScore = 0;



// Playing a single round
function playRound (humanChoice, computerChoice) {
getComputerChoice(3)
getHumanChoice()

    
}


// Computer coice to output r,p,s randomly
function getComputerChoice(maxNum) {

    cpuRand = Math.floor(Math.random() * maxNum)

    if (cpuRand === 0) {
        return r
    } else if (cpuRand === 1) {
        return p
    } else  {
        return s
    }
    
}
console.log(getComputerChoice(3))



// Human choice to select r,p,s
function getHumanChoice() {

    const humanSelects = prompt("Choose your options: Rock, Paper, Scissors").toLowerCase();
    if (humanSelects === 'rock') {
        console.log(humanSelects)
    } else if (humanSelects === 'paper') {
        console.log(humanSelects)
    } else if (humanSelects === 'scissors') {
        console.log(humanSelects) 
    } else {
        getHumanChoice()
    }
    
}

getHumanChoice()