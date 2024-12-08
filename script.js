const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;


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


// Playing a single round
function playRound (humanChoice, computerChoice) {

    let result;

    if (humanChoice === computerChoice) {
        result = 'It\'s a tie';
        console.log(result)
    } else if (humanChoice === 'rock' && computerChoice === s){
        result = 'You win. rock beats scissors'
        console.log(result)
        console.log(`Human = ${++humanScore}`);
    } else if (humanChoice === 'paper' && computerChoice === r){
        result = 'You win. paper beats rock'
        console.log(result)
        console.log(`Human = ${++humanScore}`)
    } else if (humanChoice === 'scissors' && computerChoice === p){
        result = 'You win. scissors beats paper'
        console.log(result)
        console.log(`Human = ${++humanScore}n`)
    } else if (humanChoice === 'scissors' && computerChoice === r){
        result = 'You lose. rock beats scissors'
        console.log(result)
        console.log(`Computer = ${++computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === p){
        result = 'You lose. paper beats rock'
        console.log(result)
        console.log(`Computer = ${++computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === s){
        result ='You lose. scissors beats paper'
        console.log(result)
        console.log(`Computer = ${++computerScore}`);
    } else {
        alert('Incorrect otions. please try again')
    }
    
}


// Playing entire game (5 rounds)
function playGame() {
    
    for (let fiveRounds = 0; fiveRounds < 5; fiveRounds++){
    
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        
        playRound(humanChoice, computerChoice)
        
    }

    if (humanScore == computerScore) {
        console.log(`human = ${humanScore} vs computer = ${computerScore}`)
        console.log('No winner! It\'s a draw')
    } else if (humanScore < computerScore) {
        console.log(`human = ${humanScore} vs computer = ${computerScore}`)
        console.log('Computer wins!')
    } else {
        console.log(`human = ${humanScore} vs computer = ${computerScore}`)
        console.log('Human wins!')
    }
    
    
}
    
playGame()