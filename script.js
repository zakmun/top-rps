const r = "rock";
const p = "paper";
const s = "Scissors"


function getComputerChoice(randNum) {

    cpuRand = Math.floor(Math.random() * randNum)
    console.log(cpuRand)

    if (cpuRand === 0) {
        return (r);
    } else if (cpuRand === 1) {
        return (p);
    } else  {
        return (s);
    }
    
}

console.log(getComputerChoice(3))

const selectRPS = prompt('Type Rock, Paper or Scissors')
console.log(selectRPS);

