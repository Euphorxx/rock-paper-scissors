const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const humanScore = 0;
const computerScore = 0;

function getComputerChoice()  {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {return (rock), console.log('Computer\'s choice: Rock');
    } else if (random === 2) {return (paper), console.log('Computer\'s choice: Paper');
    } else if (random === 3) {return (scissors), console.log('Computer\'s choice: Scissors');}

};

function getHumanChoice(random)  {
    random = prompt('Rock, Paper or Scissors?').toLowerCase();
    if (random === 'rock') {return (rock), console.log('Your choice: Rock');
    } else if (random === 'paper') {return (paper), console.log('Your choice: Paper');
    } else if (random === 'scissors') {return (scissors), console.log('Your choice: Scissors');
    } else if (random != rock || paper || scissors) {return alert('Cancelled')};

};







