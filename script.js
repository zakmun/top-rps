const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;



// Playing entire game (5 rounds)
function playGame(roundNo) {

//     for (let newRound; newRound < roundNo; newRound){
//         console.log('this works')
//     }
//  +
}


playGame()



// Playing a single round
function playRound (humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log('It is a tie');
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

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice(3)
playRound(humanChoice, computerChoice)


// Computer coice to output r,p,s randomly
function getComputerChoice(maxNum) {

    cpuRand = Math.floor(Math.random() * maxNum)

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

    const humanSelects = prompt("Choose your options: Rock, Paper, Scissors").toLowerCase();
    if (humanSelects === 'rock') {
        console.log(`You have chosen: ${humanSelects}`)
        return humanSelects;
    } else if (humanSelects === 'paper') {
        console.log(`You have chosen: ${humanSelects}`)
        return humanSelects;
    } else if (humanSelects === 'scissors') {
        console.log(`You have chosen: ${humanSelects}`) 
        return humanSelects;
    } else {
        getHumanChoice()
    }

    return humanSelects;
    
}
