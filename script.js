const r = "rock";
const p = "paper";
const s = "scissors"

let humanScore = 0;
let computerScore = 0;



// Playing a single round
// function playRound (humanChoice, computerChoice) {

//     console.log(getComputerChoice(3))
//     getHumanChoice()

//     if (humanChoice === 'rock' && computerChoice === s) {
//         console.log(++humanScore)
//     } else if (humanChoice === 'scissors' && computerChoice === r) {
//         console.log(++humanScore)
//     } else if (humanChoice === 'paper' && computerChoice === p) {
//         console.log('no point')
//     } else {
//         console.log
//     }
    
// }

playRound()

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




// Human choice to select r,p,s
function getHumanChoice() {

    const humanSelects = prompt("Choose your options: Rock, Paper, Scissors").toLowerCase();
    if (humanSelects === 'rock') {
        console.log(`You have chosen: ${humanSelects}`)
    } else if (humanSelects === 'paper') {
        console.log(`You have chosen: ${humanSelects}`)
    } else if (humanSelects === 'scissors') {
        console.log(`You have chosen: ${humanSelects}`) 
    } else {
        getHumanChoice()
    }
    
}

