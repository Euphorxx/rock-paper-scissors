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

function phaseOne() {
    // buttons get disabled
    const btns = document.querySelectorAll('button');
    Array.from(btns).forEach( function(btn){
    if (selectedBtn == btn) {btn.classList.add('selected')
    } else {btn.classList.add('notSelected')};
    btn.disabled=true;
    });

    // human choice gets displayed on the red panel
    if (humanChoice == rock) {humanImg.classList.add('rock-img'), humanImg.setAttribute("src", "images/rock.png");
    } else if (humanChoice == paper) {humanImg.classList.add('paper-img'), humanImg.setAttribute("src", "images/paper.png");
    } else if (humanChoice == scissors) {humanImg.classList.add('scissors-img'), humanImg.setAttribute("src", "images/scissors.png");
    };

    process.textContent = 'Computer is thinking...'

    setTimeout(phaseTwo,1000)
};

function phaseTwo() {
    // computer choice chosen and displayed on red panel
    const computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {computerChoice = rock, compImg.classList.add('rock-img'), compImg.setAttribute("src", "images/rock.png");
    } else if (computerSelection === 2) {computerChoice = paper, compImg.classList.add('paper-img'), compImg.setAttribute("src", "images/paper.png");
    } else if (computerSelection === 3) {computerChoice = scissors, compImg.classList.add('scissors-img'), compImg.setAttribute("src", "images/scissors.png")};

    // round gets evaluated, score updated and displayed
    if (humanChoice === computerChoice) {process.textContent = `${humanChoice} vs ${computerChoice} — It's a draw!`,updateScore();
    } else if (humanChoice === rock && computerChoice === paper) { process.textContent = `${humanChoice} vs ${computerChoice} — Computer wins!`, computerScore++,updateScore();
    } else if (humanChoice === paper && computerChoice === rock) { process.textContent = `${humanChoice} vs ${computerChoice} — You win!`, humanScore++,updateScore();
    } else if (humanChoice === rock && computerChoice === scissors) { process.textContent = `${humanChoice} vs ${computerChoice} — You win!`, humanScore++,updateScore();
    } else if (humanChoice === scissors && computerChoice === rock) { process.textContent = `${humanChoice} vs ${computerChoice} — Computer wins!`, computerScore++,updateScore();
    } else if (humanChoice === paper && computerChoice === scissors) { process.textContent = `${humanChoice} vs ${computerChoice} — Computer wins!`, computerScore++,updateScore();
    } else if (humanChoice === scissors && computerChoice === paper) { process.textContent = `${humanChoice} vs ${computerChoice} — You win!`, humanScore++,updateScore()};
    
    setTimeout(phaseThree,1000)
};
function phaseThree() {
    // enable buttons
    const btns = document.querySelectorAll('button');
    Array.from(btns).forEach( function(btn){
        btn.classList.remove('notSelected');
        btn.classList.remove('selected');
        btn.disabled=false;
    });

    // clear the versus panel
    humanImg.classList.remove('rock-img'), humanImg.removeAttribute("src", "images/rock.png");
    humanImg.classList.remove('paper-img'), humanImg.removeAttribute("src", "images/paper.png");
    humanImg.classList.remove('scissors-img'), humanImg.removeAttribute("src", "images/scissors.png");
    
    compImg.classList.remove('rock-img'), compImg.removeAttribute("src", "images/rock.png")
    compImg.classList.remove('paper-img'), compImg.removeAttribute("src", "images/rock.png")
    compImg.classList.remove('scissors-img'), compImg.removeAttribute("src", "images/rock.png")

    // remove choices and update the text panel
    selectedBtn = null;
    humanChoice = null;
    computerChoice = null;
    round++;
};

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
