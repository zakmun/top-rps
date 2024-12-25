const r = "rock";
const p = "paper";
const s = "scissors";

let humanScore = 0;
let computerScore = 0;

const humanRock = document.getElementById('human-rock')
const humanPaper = document.getElementById('human-paper')
const humanScissors = document.getElementById('human-scissors')

const container = document.querySelector('.container')
const choiceContainer = document.querySelector('.choice-container')


 


// Computer coice to output r,p,s randomly
function getComputerChoice() {

    cpuRand = Math.floor(Math.random() * 3)

    if (cpuRand === 0) {
        return r
    } else if (cpuRand === 1) {
       return p
    } else  {
        return s
    }
    
}

humanRock.addEventListener('click', function() {
        
    const humanChoice = 'rock'
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

       
})


humanPaper.addEventListener('click', function() {
    
    const humanChoice = 'paper'
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

})
humanScissors.addEventListener('click', function() {

    const humanChoice = 'scissors'
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

})


function playRound(humanChoice, computerChoice) {
    const h4 = document.createElement('h4');
    choiceContainer.appendChild(h4);

    if (humanChoice === computerChoice) {
        h4.textContent = `You selected ${humanChoice}. Computer selected ${computerChoice} - It\'s a tie`;
    } else if (humanChoice === 'rock' && computerChoice === s) {
        h4.textContent = `${humanChoice} beats ${computerChoice}. You win! Human = ${++humanScore} - Computer = ${computerScore}`
    } else if (humanChoice === 'paper' && computerChoice === r) {
        h4.textContent = `${humanChoice} beats ${computerChoice}. You win! Human = ${++humanScore} - Computer = ${computerScore}`
    } else if (humanChoice === 'scissors' && computerChoice === p) {
        h4.textContent = `${humanChoice} beats ${computerChoice}. You win! Human = ${++humanScore} - Computer = ${computerScore}`
    } else if (humanChoice === 'scissors' && computerChoice === r) {
        h4.textContent = `${computerChoice} beats ${humanChoice}. You lose! Human = ${humanScore} - Computer = ${++computerScore}`
    } else if (humanChoice === 'rock' && computerChoice === p) {
        h4.textContent = `${computerChoice} beats ${humanChoice}. You lose! Human = ${humanScore} - Computer = ${++computerScore}`
    } else if (humanChoice === 'paper' && computerChoice === s) {
        h4.textContent = `${computerChoice} beats ${humanChoice}. You lose! Human = ${humanScore} - Computer = ${++computerScore}`
    }
}





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