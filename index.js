const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice()  {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {return (rock);
    } else if (random === 2) {return (paper);
    } else if (random === 3) {return (scissors);}

};

console.log('Computer\'s choice: ' + getComputerChoice());

