const r = "rock";
const p = "paper";
const s = "Scissors"

let humanScore = 0;
let computerScore = 0;



// Playing a single round
function playRound(humanChoice, computerChoice) {

    
        // if (humanChoice === r && computerChoice === s) {
        //     console.log(++humanScore)
        //     console.log(humanScore)
        // } else {
        //     console.log(++computerScore) 
        //     console.log(computerScore)
        // } 
    
  }
  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice(3);
  
  playRound(humanChoice, computerChoice);
  

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

    const selectRPS = prompt('Type Rock, Paper or Scissors')
    console.log(selectRPS)
}
