const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const humanScore = 0;
const computerScore = 0;

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

