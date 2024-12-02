const r = "rock";
const p = "paper";
const s = "Scissors"


function getComputerChoice(rps) {

    randrps = Math.floor(Math.random() * rps)
    console.log(randrps)

    if (randrps === 0) {
        return (r);
    } else if (randrps === 1) {
        return (p);
    } else  {
        return (s);
    }
    
}

console.log(getComputerChoice(3))

