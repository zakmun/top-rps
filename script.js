const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;



// Playing entire game (5 rounds)
function playGame() {
    



}

const rounds = playRound()
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()
playGame(playRound(humanChoice, computerChoice))



// Playing a single round
function playRound (humanChoice, computerChoice) {

    let result;

    if (humanChoice === computerChoice) {
        result = 'It is a tie';
    } else if (humanChoice === 'rock' && computerChoice === s){
        console.log('You win. rock beats scissors')
        console.log(`${++humanScore} point to human`);
    } else if (humanChoice === 'paper' && computerChoice === r){
        console.log('You win. paper beats rock')
        console.log(`${++humanScore} point to human`)
    } else if (humanChoice === 'scissors' && computerChoice === p){
        console.log('You win. scissors beats paper')
        console.log(`${++humanScore} point to human`)
    } else if (humanChoice === 'scissors' && computerChoice === r){
        console.log('You lose. rock beats scissors')
        console.log(`${++computerScore} point to computer`);
    } else if (humanChoice === 'rock' && computerChoice === p){
        console.log('You lose. paper beats rock')
        console.log(`${++computerScore} point to computer`);
    } else if (humanChoice === 'paper' && computerChoice === s){
        console.log('You lose. scissors beats paper')
        console.log(`${++computerScore} point to computer`);
    } else {
        alert('Incorrect otions. please try again')
    }
    
}



// Computer coice to output r,p,s randomly
function getComputerChoice() {

    cpuRand = Math.floor(Math.random() * 3)

    if (cpuRand === 0) {
        console.log(`Computer has chosen: ${r}`) 
        return r
    } else if (cpuRand === 1) {
        console.log(`Computer has chosen: ${p}`) 
        return p
    } else  {
        console.log(`Computer has chosen: ${s}`) 
        return s
    }
    
}





// Human choice to select r,p,s
function getHumanChoice() {

    const humanChoice = prompt("Choose your options: Rock, Paper, Scissors").toLowerCase();
    if (humanChoice === 'rock') {
        console.log(`You have chosen: ${humanChoice}`)
        return humanChoice;
    } else if (humanChoice === 'paper') {
        console.log(`You have chosen: ${humanChoice}`)
        return humanChoice;
    } else if (humanChoice === 'scissors') {
        console.log(`You have chosen: ${humanChoice}`) 
        return humanChoice;
    } else {
        getHumanChoice()
    }

        
}
