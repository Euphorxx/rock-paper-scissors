const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

let humanScoreDisplay = document.querySelector(".human-count");
humanScoreDisplay.textContent = humanScore;
let computerScoreDisplay = document.querySelector(".comp-count");
computerScoreDisplay.textContent = computerScore;

const process = document.querySelector("p");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const buttons = document.querySelector(".buttons");
let selected = false;
let selectedBtn;

function playGame() {

    function getComputerChoice()  {
        const computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {return (rock), computerChoice = rock;
    } else if (computerSelection === 2) {return (paper), computerChoice = paper;
    } else if (computerSelection === 3) {return (scissors), computerChoice = scissors};

    buttons.onclick = (e) => {
        selected = true;
        if (e.target == rockBtn) {selectedBtn = rockBtn, humanChoice = rock;
        } else if (e.target == paperBtn) {selectedBtn = paperBtn, humanChoice = paper;
        } else if (e.target == scissorsBtn) {selectedBtn = scissorsBtn, humanChoice = scissors};
    
        } else if (random != rock || paper || scissors) {return alert('Cancelled')};
    };

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    function playRound()  {
        if (humanChoice == computerChoice) {return alert(`${humanChoice} vs ${computerChoice} — It's a draw!`);
        } else if (humanChoice === rock && computerChoice === paper) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`),computerScore++;
        } else if (humanChoice === paper && computerChoice === rock) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`),humanScore++;
        } else if (humanChoice === rock && computerChoice === scissors) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`),humanScore++;
        } else if (humanChoice === scissors && computerChoice === rock) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`),computerScore++;
        } else if (humanChoice === paper && computerChoice === scissors) {return alert(`${humanChoice} vs ${computerChoice} — Computer wins!`),computerScore++;
        } else if (humanChoice === scissors && computerChoice === paper) {return alert(`${humanChoice} vs ${computerChoice} — Human wins!`),humanScore++;}
    }

    playRound();
}

playGame();
    console.log(`Round 1:`)
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
playGame();
    console.log(`Round 2:`)
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
playGame();
    console.log(`Round 3:`)
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
playGame();
    console.log(`Round 4:`)
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
playGame();
    console.log(`Round 5:`)
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

console.log(`Final Results:`)
console.log(`Total Human Score: ${humanScore}`);
console.log(`Total Computer Score: ${computerScore}`);

if (humanScore === computerScore) alert(`You vs Computer: ${humanScore} — ${computerScore} \nIt's a tie! Reload to play again.`);
if (humanScore > computerScore) alert(`You vs Computer: ${humanScore} — ${computerScore} \nYou Won! Reload to play again.`);
if (humanScore < computerScore)alert(`You vs Computer: ${humanScore} — ${computerScore} \nYou Lose! Reload to play again.`);
const credits = document.querySelector("#credits");
const creditList = document.querySelector(".tooltip");

function creditToggle() {
let pin = false;
credits.onmouseenter = () => 
    creditList.setAttribute('style','display:flex');
credits.onmouseleave = () => { 
    if (pin == false) {creditList.removeAttribute('style','display:flex')};
};
credits.onclick = () => {
    pin = !pin;
    if (pin == true) {creditList.setAttribute('style','display:flex');
    } else if (pin == false) {creditList.removeAttribute('style','display:flex')}
};
};

creditToggle();
