const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let humanScore = Number(0);
let computerScore = Number(0);
let round = Number(1);

let humanChoice;
let computerChoice;
let selectedBtn;

let humanScoreDisplay = document.querySelector(".human-count");
humanScoreDisplay.textContent = humanScore;
let computerScoreDisplay = document.querySelector(".comp-count");
computerScoreDisplay.textContent = computerScore;

function updateScore() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
};

const process = document.querySelector("p");

const rockBtn = document.querySelector("#rock");
const rockBtnImg = rockBtn.querySelector("img");
const paperBtn = document.querySelector("#paper");
const paperBtnImg = paperBtn.querySelector("img");
const scissorsBtn = document.querySelector("#scissors");
const scissorsBtnImg = scissorsBtn.querySelector("img");

const buttons = document.querySelector(".buttons");

const humanImg = document.querySelector(".human-opt");
const compImg = document.querySelector(".comp-opt");
    

// initiation phase, listen for click and store human choice
    buttons.addEventListener('click', (e) => {
        if (e.target == rockBtn || e.target == rockBtnImg) 
            {selectedBtn = rockBtn,humanChoice = rock
        } else if (e.target == paperBtn || e.target == paperBtnImg) 
            {selectedBtn = paperBtn,humanChoice = paper
        } else if (e.target == scissorsBtn || e.target == scissorsBtnImg) 
            {selectedBtn = scissorsBtn,humanChoice = scissors};
    phaseOne();
    });
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
