// import { buildDice } from "./Dice";

class Board {
    constructor(attr, skills, misc) {
        this.attr = attr;
        this.skills = skills;
        this.misc = misc;
        this.specialize = false;
    }

}



//creating main board for display
const board = document.createElement('div');
// adding class for styling
board.classList.add("main-board");


// create field for selecting number of dice
const selectionContainer = document.createElement("div")
selectionContainer.classList.add("selection-container");
board.append(selectionContainer);

// button for rolling
const roll = document.createElement("button");
roll.classList.add("roll-button");
roll.innerHTML = "roll dice";
roll.onclick = function() {
    buildDice();
}
selectionContainer.appendChild(roll);

// button for removing all die (use for in between)
const clear = document.createElement("button");
clear.classList.add("clear-dice-button");
clear.innerText = "clear dice";
clear.onclick = function() {
    clearDice();
}
selectionContainer.appendChild(clear);


//randomly determine dice number
rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// container for boards displaying all dice and hits
const boardContainer = document.createElement("div");
boardContainer.classList.add("board-container");
board.append(boardContainer);
 

// board to contain all dice
const diceContainer = document.createElement("div");
diceContainer.classList.add("dice-container")
boardContainer.append(diceContainer);
const diceTitle = document.createElement("h2")
diceTitle.innerText = "Total Dice";
diceContainer.append(diceTitle)

// board to display all dice
const diceBoard = document.createElement('section');
diceBoard.classList.add("dice-board");
diceContainer.append(diceBoard);


// hits Container
const hitsContainer = document.createElement("div");
hitsContainer.classList.add("hits-container")
boardContainer.append(hitsContainer);
const hitsTitle = document.createElement("h2");
hitsTitle.innerText = `Hits`;
hitsContainer.append(hitsTitle);

// board to display only hits
const hitsBoard = document.createElement("section");
hitsBoard.classList.add("hits-board");
hitsContainer.append(hitsBoard);


// global variables - move to larger on click event once rolling multiple dice at once.
let total = 0;
let hitsTotal = 0;
// add make a new die every time 
function buildDice() {
    total += 1;
    const die = rollDice();
    const dieDiv = document.createElement('div');
    dieDiv.innerHTML = die;
    dieDiv.classList.add("dice", `dice-${die}`)
    diceBoard.append(dieDiv);
    if (total === 1) {
        diceTitle.innerText = "1 Total Die";
    } else {
        diceTitle.innerText = `${total} Total Dice`;
    }

    // if die is a hit(5 or 6) create element and add to hits board. Also track total hits
    if (die > 4) {
        hitsTotal += 1;
        const hitsDiv = document.createElement("div");
        hitsDiv.innerHTML = die;
        hitsDiv.classList.add("dice", `dice-${die}`)
        hitsBoard.append(hitsDiv);

        if( hitsTotal === 1) {
            hitsTitle.innerText = "1 Hit"
        } else {
            hitsTitle.innerText = `${hitsTotal} Hits`
        }
    }
    return die;
}

// function to remove all dice
function clearDice () {
    const allDice = document.querySelectorAll(".dice");
    while (allDice.length > 0) {
        allDice[0].parentNode.removeChild(allDice[0]);
    }
};




module.exports =  board;
