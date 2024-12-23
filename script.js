const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;

const humanRock = document.getElementById('human-rock')
const humanPaper = document.getElementById('human-paper')
const humanScissors = document.getElementById('human-scissors')

const container = document.querySelector('.div')


// Computer coice to output r,p,s randomly
function getComputerChoice() {

    cpuRand = Math.floor(Math.random() * 3)

    if (cpuRand === 0) {
        console.log(`Computer has chosen: ${r}`) 
        
    } else if (cpuRand === 1) {
        console.log(`Computer has chosen: ${p}`) 
       
    } else  {
        console.log(`Computer has chosen: ${s}`) 
        
    }
    
}


// Human choice to select r,p,s
function getHumanChoice() {

    if (humanChoice === 'rock') {
        console.log(`You have chosen: ${humanChoice}`)
        
    } else if (humanChoice === 'paper') {
        console.log(`You have chosen: ${humanChoice}`)
        
    } else if (humanChoice === 'scissors') {
        console.log(`You have chosen: ${humanChoice}`) 
        
    } else {
        getHumanChoice()
    }

        
}


// Playing a single round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log('It\'s a tie');
    } else if (humanChoice === 'rock' && computerChoice === s) {
        console.log('You win. rock beats scissors');
        console.log(`Human = ${++humanScore}`);
    } else if (humanChoice === 'paper' && computerChoice === r) {
        console.log('You win. paper beats rock');
        console.log(`Human = ${++humanScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === p) {
        console.log('You win. scissors beats paper');
        console.log(`Human = ${++humanScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === r) {
        console.log('You lose. rock beats scissors');
        console.log(`Computer = ${++computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === p) {
        console.log('You lose. paper beats rock');
        console.log(`Computer = ${++computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === s) {
        console.log('You lose. scissors beats paper');
        console.log(`Computer = ${++computerScore}`);
    }
}

        
    
        
    // playRound(humanChoice, computerChoice)


    humanRock.addEventListener('click', function() {
        
        const humanChoice = 'rock'
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
        
    })
    
    
    humanPaper.addEventListener('click', function() {
        const humanChoice = 'paper'
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    })
    humanScissors.addEventListener('click', function() {

        const humanChoice = 'scissors'
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    })


// Playing entire game (5 rounds)
// function playGame() {
    
       
//         const humanChoice = getHumanChoice()
//         const computerChoice = getComputerChoice()
        
//         playRound(humanChoice, computerChoice)
        
//     }

//     if (humanScore == computerScore) {
//         console.log(`human = ${humanScore} vs computer = ${computerScore}`)
//         console.log('No winner! It\'s a draw')
//     } else if (humanScore < computerScore) {
//         console.log(`human = ${humanScore} vs computer = ${computerScore}`)
//         console.log('Computer wins!')
//     } else {
//         console.log(`human = ${humanScore} vs computer = ${computerScore}`)
//         console.log('Human wins!')
    
    
    
// }
    
// playGame()