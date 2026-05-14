const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice()  {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {return (rock);
    } else if (random === 2) {return (paper);
    } else if (random === 3) {return (scissors);}

};

function getHumanChoice(random)  {
    random = prompt('Rock, Paper or Scissors?').toLowerCase();
    if (random === 'rock') {return (rock);
    } else if (random === 'paper') {return (paper);
    } else if (random === 'scissors') {return (scissors);
    } else if (random != rock || paper || scissors) {return alert('Cancelled')};

};

console.log('Your choice: ' + getHumanChoice());
console.log('Computer\'s choice: ' + getComputerChoice());

