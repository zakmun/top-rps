const r = "rock";
const p = "paper";
const s = "Scissors"

let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {

   
    
  }
  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice(3);
  
  playRound(humanChoice, computerChoice);
  

// Computer coice to output r,p,s randomly
function getComputerChoice(randNum) {

    cpuRand = Math.floor(Math.random() * randNum)

    if (cpuRand === 0) {
        console.log((r));
    } else if (cpuRand === 1) {
        console.log((p));
    } else  {
        console.log((s));
    }
    
}



// Human choice to select r,p,s
function getHumanChoice() {

    const selectRPS = prompt('Type Rock, Paper or Scissors')
    console.log(selectRPS)
}
