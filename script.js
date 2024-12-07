const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;



// Playing a single round
function playRound (humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 2){
        console.log(`${++humanScore} point to human`);
        console.log('You win. rock beats scissors')
    } else if (humanChoice === 'paper' && computerChoice === 0){
        console.log(`${++humanScore} point to human`)
        console.log('You win. paper beats rock')
    } else if (humanChoice === 'scissors' && computerChoice === 1){
        console.log(`${++humanScore} point to human`)
        console.log('You win. scissors beats paper')
    } else {
        console.log(++computerScore)
    }
         
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice(3)

playRound(humanChoice, computerChoice)

// Computer coice to output r,p,s randomly
function getComputerChoice(maxNum) {

    cpuRand = Math.floor(Math.random() * maxNum)

    if (cpuRand === 0) {
        console.log(`Computer has chosen: ${r}`) 
    } else if (cpuRand === 1) {
        console.log(`Computer has chosen: ${p}`) 
    } else  {
        console.log(`Computer has chosen: ${s}`) 
    }
    
    return cpuRand;
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

    return humanSelects;
    
}
