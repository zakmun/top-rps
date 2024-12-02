const r = "rock";
const p = "paper";
const s = "Scissors"

function getComputerChoice(rps) {

    randrps = Math.floor(Math.random() * rps)

    if (randrps == 0) {
        return (r);
    } else if (rps == 1) {
        return (p);
    } else {
        return (s);
    }

    
}

console.log(getComputerChoice(3))
