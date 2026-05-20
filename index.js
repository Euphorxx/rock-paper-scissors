const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()  {
    const computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {return (rock);
    } else if (computerSelection === 2) {return (paper);
    } else if (computerSelection === 3) {return (scissors)};

};

function getHumanChoice(random)  {
    const humanSelection = random;
    random = prompt('Rock, Paper or Scissors?').toLowerCase();
    if (random === 'rock') {return (rock);
    } else if (random === 'paper') {return (paper);
    } else if (random === 'scissors') {return (scissors);
    } else if (random != rock || paper || scissors) {return alert('Cancelled')};

};

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

function playRound()  {
    if (humanChoice === computerChoice) {return alert(`${humanChoice} vs ${computerChoice} — It's a draw!`);
    } else if (humanChoice === rock, computerChoice === paper) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`), computerScore++;
    } else if (humanChoice === paper, computerChoice === rock) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`), humanScore++;
    } else if (humanChoice === rock, computerChoice === scissors) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`), humanScore++;
    } else if (humanChoice === scissors, computerChoice === rock) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`), computerScore++;
    } else if (humanChoice === paper, computerChoice === scissors) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`), computerScore++;
    } else if (humanChoice === scissors, computerChoice === paper) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`), humanScore++;
    } else {return alert('Cancelled')};

}

